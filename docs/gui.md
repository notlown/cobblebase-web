# GUI Guide

Cobblebase adds a tabbed management interface to the Pasture Block. This guide covers all four tabs and how to use them effectively.

## Opening the GUI

1. Right-click any Pasture Block to open the standard Cobblemon pasture interface.
2. Click the **"Cobblebase"** button to open the management screen.

The GUI uses a dark theme with 0.75x font scaling for a compact, information-dense layout.

---

## Skills Tab

The Skills tab is your primary management interface. It shows every Pokemon in the pasture along with their available jobs.

### Layout

Each row displays:
- **Pokemon sprite** -- top-aligned icon for the species
- **Pokemon name and level** -- displayed next to the sprite
- **Aura icon** -- if the Pokemon has a buff skill, a small icon appears between the name and skill buttons
- **Auto button** -- a narrow button in its own column that enables automatic skill selection
- **Skill buttons** -- color-coded buttons for each available skill, with proficiency stars

### Row Height

Rows use dynamic height based on how many skills a Pokemon has:
- Pokemon with few skills get compact rows (24px)
- Pokemon with many skills get taller rows (42px)

### Assigning Skills

**Auto mode:** Click the "Auto" button to let Cobblebase automatically select the best skill for the Pokemon based on its highest proficiency.

**Manual mode:** Click any specific skill button to assign that job. The button highlights to show the active assignment.

Skill assignments persist across sessions and server restarts.

### Skill Button Colors

Skills are color-coded by category:
- Gathering skills use harvest/nature colors
- Combat skills use red tones
- Support skills use healing/green colors
- Environmental skills use elemental colors (fire, water, ice)
- Legendary skills use special/gold colors

---

## Buffs Tab

The Buffs tab shows all currently active jobs and effects for this pasture.

### What It Shows

- Every Pokemon currently assigned to a job
- The job name and category, color-coded
- Proficiency stars (1-5) for each active skill
- Active buff effects and their status

This tab gives you an at-a-glance overview of your entire base's productivity.

---

## Logs Tab

The Logs tab shows a chronological activity log of everything your Pokemon have been doing.

### Columns

| Column | Description |
|--------|-------------|
| Time | When the event occurred |
| Pokemon | Which Pokemon performed the action |
| Action | What job was executed |
| Item | What was found/produced (if applicable) |
| Rarity | Color-coded rarity tier |

### Rarity Color Coding

| Color | Rarity |
|-------|--------|
| Gray | Common |
| Green | Uncommon |
| Blue | Rare |
| Gold | Ultra Rare |

### Filtering

Use the filter buttons at the top to show only events above a certain rarity:
- **All** -- show everything
- **Uncommon+** -- hide common events
- **Rare+** -- show only rare and ultra rare
- **Ultra Rare** -- show only the rarest finds

### Storage

- Up to **100 entries** per pasture are stored
- Entries older than **24 hours** are automatically cleaned up
- Logs persist in `cobblebase_logs.json` in the world folder

Note: Passive buff applications do not appear in the log to avoid clutter.

---

## Discovery Tab

The Discovery tab (also called Scout tab) shows permanent discoveries made by [Scout](jobs.md#scout) Pokemon.

### What It Shows

A scrollable table with:

| Column | Description |
|--------|-------------|
| Type | Icon indicating Pokemon, Structure, or Biome |
| Name | The name of the discovery |
| Coordinates | X, Y, Z location (clickable) |
| Discovered By | Which Pokemon made the discovery |
| When | Timestamp of the discovery |

### Filter Buttons

- **All** -- show all discoveries
- **Structures** -- show only structure discoveries
- **Biomes** -- show only biome discoveries

### Discovery Types

| Type | Unlocked At | Examples |
|------|-------------|---------|
| Wild Pokemon | Prof 1+ | Any wild Pokemon in range |
| Structures | Prof 3+ | Villages, Mineshafts, Ruined Portals, Shipwrecks, Ocean Ruins |
| Biomes | Prof 4+ | Mushroom Fields, Ice Spikes, Cherry Grove, Deep Dark, Lush Caves |

### Persistence

- Wild Pokemon sightings auto-expire after **30 minutes**
- Structure and biome discoveries are **permanent**
- All discoveries are saved to `cobblebase_discoveries.json` in the world folder
- Chunk-based deduplication prevents the same discovery from being reported twice

---

## Tips

- **Use Auto for most Pokemon.** It picks the highest-proficiency skill, which is almost always optimal.
- **Check Logs regularly.** Ultra Rare drops can be easy to miss if you are not watching.
- **Filter by Rare+** to quickly spot valuable finds without scrolling through common results.
- **Multiple Scouts** with different proficiency levels can discover different things in the same area.
- **The Buffs tab is read-only.** To change assignments, switch to the Skills tab.
