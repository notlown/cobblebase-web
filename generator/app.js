// Cobblebase Datapack Generator - Application Logic

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────────
  const state = {
    // Map of species name → { skillId: proficiency }
    species: new Map()
  };

  // ── Sprite URL helper ──────────────────────────────────────────────
  // Uses PokeAPI sprites for official Pokemon, returns null for fakemons
  const POKEAPI_SPRITE_BASE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  // Map of species names to National Dex numbers (for PokeAPI sprite URLs)
  // Built lazily on first use
  let pokedexMap = null;

  function buildPokedexMap() {
    if (pokedexMap) return;
    pokedexMap = new Map();
    // Common Pokemon name → dex number mappings
    // PokeAPI uses dex number as filename: e.g., 25.png for Pikachu
    // We'll try fetching by name from PokeAPI's named endpoint instead
  }

  function getSpriteUrl(speciesName) {
    const name = speciesName.toLowerCase().replace(/[^a-z0-9-]/g, '');
    // PokeAPI uses lowercase names with hyphens
    // Try the showdown sprite CDN which uses names directly
    return `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
  }

  // ── Skill categories in display order ──────────────────────────────
  const CATEGORY_ORDER = [
    'gathering',
    'generation',
    'support',
    'combat',
    'utility',
    'legendary',
    'fairy'
  ];

  const CATEGORY_LABELS = {
    gathering: 'Gathering',
    generation: 'Generation',
    support: 'Support',
    combat: 'Combat',
    utility: 'Utility',
    legendary: 'Legendary',
    fairy: 'Fairy'
  };

  // Group skills by category
  function getSkillsByCategory() {
    const grouped = {};
    for (const cat of CATEGORY_ORDER) {
      grouped[cat] = [];
    }
    for (const skill of SKILLS) {
      const cat = skill.category || 'utility';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(skill);
    }
    // Sort within each category by name
    for (const cat of Object.keys(grouped)) {
      grouped[cat].sort((a, b) => a.name.localeCompare(b.name));
    }
    return grouped;
  }

  const skillsByCategory = getSkillsByCategory();

  // ── DOM References ─────────────────────────────────────────────────
  const container = document.getElementById('species-container');
  const btnAdd = document.getElementById('btn-add-species');
  const btnImport = document.getElementById('btn-import');
  const btnDownload = document.getElementById('btn-download');
  const importFile = document.getElementById('import-file');
  const modal = document.getElementById('species-search-modal');
  const searchInput = document.getElementById('species-search-input');
  const searchResults = document.getElementById('species-search-results');
  const cardTemplate = document.getElementById('species-card-template');
  const skillTemplate = document.getElementById('skill-item-template');
  const toast = document.getElementById('toast');

  // ── Search index (pre-built for performance) ───────────────────────
  // We keep the lowercase list for matching
  const speciesLower = SPECIES_LIST.map(s => s.toLowerCase());

  // ── Toast ──────────────────────────────────────────────────────────
  let toastTimer = null;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('hidden'), 3000);
  }

  // ── Update download button state ───────────────────────────────────
  function updateDownloadBtn() {
    btnDownload.disabled = state.species.size === 0;
  }

  // ── Modal ──────────────────────────────────────────────────────────
  function openModal() {
    modal.classList.remove('hidden');
    searchInput.value = '';
    searchInput.focus();
    renderSearchResults('');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  function renderSearchResults(query) {
    const q = query.toLowerCase().trim();
    searchResults.innerHTML = '';

    let matches;
    if (q.length === 0) {
      // Show first 50
      matches = SPECIES_LIST.slice(0, 50);
    } else {
      // Filter and limit
      const results = [];
      for (let i = 0; i < speciesLower.length && results.length < 80; i++) {
        if (speciesLower[i].includes(q)) {
          results.push(SPECIES_LIST[i]);
        }
      }
      matches = results;
    }

    const frag = document.createDocumentFragment();
    for (const sp of matches) {
      const div = document.createElement('div');
      div.className = 'search-result-item';
      const img = document.createElement('img');
      img.className = 'search-sprite';
      img.src = getSpriteUrl(sp);
      img.alt = '';
      img.loading = 'lazy';
      img.onerror = function() { this.style.display = 'none'; };
      div.appendChild(img);
      const span = document.createElement('span');
      span.textContent = sp;
      div.appendChild(span);
      if (state.species.has(sp)) {
        div.classList.add('already-added');
      } else {
        div.addEventListener('click', () => {
          addSpecies(sp);
          closeModal();
        });
      }
      frag.appendChild(div);
    }

    if (matches.length === 0) {
      const div = document.createElement('div');
      div.className = 'search-result-item';
      div.textContent = 'No species found';
      div.style.opacity = '0.5';
      div.style.pointerEvents = 'none';
      frag.appendChild(div);
    }

    searchResults.appendChild(frag);
  }

  // ── Species Card ───────────────────────────────────────────────────
  function addSpecies(name, existingSkills) {
    if (state.species.has(name)) return;

    const skills = existingSkills || {};
    state.species.set(name, skills);

    // Remove empty state if present
    const emptyState = container.querySelector('.empty-state');
    if (emptyState) emptyState.remove();

    // Clone template
    const card = cardTemplate.content.cloneNode(true).querySelector('.species-card');
    card.dataset.species = name;
    card.querySelector('.species-name').textContent = name;

    // Load Pokemon sprite from PokeAPI
    const spriteImg = card.querySelector('.species-sprite');
    const spriteUrl = getSpriteUrl(name);
    if (spriteUrl) {
      spriteImg.src = spriteUrl;
      spriteImg.alt = name;
    } else {
      spriteImg.style.display = 'none';
    }

    // Remove button
    card.querySelector('.btn-remove').addEventListener('click', () => {
      state.species.delete(name);
      card.remove();
      if (state.species.size === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">&#x1F4E6;</div>
            <h2>No species configured</h2>
            <p>Click "Add Species" to start building your datapack.</p>
          </div>`;
      }
      updateDownloadBtn();
    });

    // Build skills grid
    const grid = card.querySelector('.skills-grid');
    for (const cat of CATEGORY_ORDER) {
      const catSkills = skillsByCategory[cat];
      if (!catSkills || catSkills.length === 0) continue;

      const header = document.createElement('div');
      header.className = 'skill-category-header';
      header.dataset.category = cat;
      header.textContent = CATEGORY_LABELS[cat] || cat;
      grid.appendChild(header);

      for (const skill of catSkills) {
        const item = skillTemplate.content.cloneNode(true).querySelector('.skill-item');
        item.dataset.skillId = skill.id;
        item.querySelector('.skill-name').textContent = skill.name;
        item.querySelector('.skill-desc').textContent = skill.description;

        const checkbox = item.querySelector('.skill-checkbox');
        const starsContainer = item.querySelector('.proficiency-stars');
        const stars = starsContainer.querySelectorAll('.star');

        // If skill was pre-configured
        const existingProf = skills[skill.id] || 0;
        if (existingProf > 0) {
          checkbox.checked = true;
          item.classList.add('active');
          starsContainer.dataset.proficiency = existingProf;
          updateStarDisplay(stars, existingProf);
        }

        // Checkbox toggle
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            item.classList.add('active');
            if (parseInt(starsContainer.dataset.proficiency) === 0) {
              starsContainer.dataset.proficiency = 1;
              updateStarDisplay(stars, 1);
              skills[skill.id] = 1;
            } else {
              skills[skill.id] = parseInt(starsContainer.dataset.proficiency);
            }
          } else {
            item.classList.remove('active');
            delete skills[skill.id];
          }
          updateDownloadBtn();
        });

        // Star click
        stars.forEach(star => {
          star.addEventListener('click', () => {
            const val = parseInt(star.dataset.value);
            starsContainer.dataset.proficiency = val;
            updateStarDisplay(stars, val);
            if (!checkbox.checked) {
              checkbox.checked = true;
              item.classList.add('active');
            }
            skills[skill.id] = val;
            updateDownloadBtn();
          });
        });

        grid.appendChild(item);
      }
    }

    container.appendChild(card);
    updateDownloadBtn();
  }

  function updateStarDisplay(stars, value) {
    stars.forEach(star => {
      const v = parseInt(star.dataset.value);
      star.classList.toggle('filled', v <= value);
    });
  }

  // ── ZIP Generation ─────────────────────────────────────────────────
  async function generateDatapack() {
    if (state.species.size === 0) return;

    const zip = new JSZip();

    // pack.mcmeta
    zip.file('pack.mcmeta', JSON.stringify({
      pack: {
        pack_format: 15,
        description: 'Cobblebase custom species skills datapack'
      }
    }, null, 2));

    // Species skill files
    for (const [speciesName, skills] of state.species) {
      const skillEntries = [];
      for (const [skillId, proficiency] of Object.entries(skills)) {
        skillEntries.push({
          skillId: skillId,
          proficiency: proficiency
        });
      }

      const speciesData = {
        species: speciesName,
        skills: skillEntries
      };

      zip.file(
        `data/cobblebase/species_skills/${speciesName}.json`,
        JSON.stringify(speciesData, null, 2)
      );
    }

    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cobblebase-datapack.zip';
    a.click();
    URL.revokeObjectURL(url);

    showToast('Datapack downloaded successfully!');
  }

  // ── Import ─────────────────────────────────────────────────────────
  async function importDatapack(file) {
    try {
      const zip = await JSZip.loadAsync(file);
      let imported = 0;

      const files = Object.keys(zip.files).filter(
        f => f.startsWith('data/cobblebase/species_skills/') && f.endsWith('.json')
      );

      for (const path of files) {
        const content = await zip.files[path].async('string');
        try {
          const data = JSON.parse(content);
          if (data.species && Array.isArray(data.skills)) {
            const skills = {};
            for (const s of data.skills) {
              if (s.skillId && s.proficiency) {
                skills[s.skillId] = Math.min(5, Math.max(1, s.proficiency));
              }
            }
            addSpecies(data.species, skills);
            imported++;
          }
        } catch (e) {
          console.warn('Skipping invalid file:', path, e);
        }
      }

      if (imported > 0) {
        showToast(`Imported ${imported} species from datapack`);
      } else {
        showToast('No valid species files found in ZIP');
      }
    } catch (e) {
      console.error('Import failed:', e);
      showToast('Failed to import datapack');
    }
  }

  // ── Event Listeners ────────────────────────────────────────────────
  btnAdd.addEventListener('click', openModal);

  btnDownload.addEventListener('click', generateDatapack);

  btnImport.addEventListener('click', () => importFile.click());

  importFile.addEventListener('change', (e) => {
    if (e.target.files[0]) {
      importDatapack(e.target.files[0]);
      e.target.value = '';
    }
  });

  // Modal
  modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
  modal.querySelector('.modal-close').addEventListener('click', closeModal);

  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

})();
