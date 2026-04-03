# Compatibility

This page covers supported Fakemon packs, known mod incompatibilities, and dependency information.

## Dependencies

Cobblebase requires the following mods to be installed:

| Dependency | Version | Notes |
|-----------|---------|-------|
| Minecraft | 1.21.1 | Only this version is supported |
| Cobblemon | 1.7.0+ | The base Pokemon mod |
| Cloth Config | Latest | **Required** -- mod crashes without it |
| Fabric Language Kotlin | Latest | Fabric only |
| Kotlin for Forge | 5.x | NeoForge only |

### Cloth Config Dependency

Cobblebase uses Cloth Config (`me.shedaniel.autoconfig`) for its configuration screen. Without it installed, the mod will crash on startup with:

```
ClassNotFoundException: me.shedaniel.autoconfig.ConfigData
```

Install Cloth Config from [Modrinth](https://modrinth.com/mod/cloth-config) or [CurseForge](https://www.curseforge.com/minecraft/mc-mods/cloth-config).

---

## Supported Fakemon Packs

Cobblebase includes **built-in skill assignments** for all species in these Fakemon mods. They work out of the box with no configuration needed.

### Official Cobblemon

| Property | Value |
|----------|-------|
| Species | 996 |
| Assignment Method | Hand-crafted, individually tuned |
| Notes | Every Pokemon has skills chosen based on its identity and lore, not just typing |

### Lively Mons

| Property | Value |
|----------|-------|
| Species | 59 |
| Assignment Method | Auto-assigned by typing + stats |
| Download | Available on Modrinth |

### Alatias Fakemon Pack (AFP)

| Property | Value |
|----------|-------|
| Species | 87 |
| Assignment Method | Auto-assigned by typing + stats |
| Download | Available on Modrinth |

### Laser's Fakemon Pack

| Property | Value |
|----------|-------|
| Species | 53 |
| Assignment Method | Auto-assigned by typing + stats |
| Download | Available on Modrinth |

### Wilbayan's Fakemons (Vol 1-3 + G)

| Property | Value |
|----------|-------|
| Species | 37 |
| Assignment Method | Auto-assigned by typing + stats |
| Download | Available on Modrinth |

### Gravelmon

| Property | Value |
|----------|-------|
| Species | 7,194 |
| Assignment Method | Auto-assigned by typing + stats |
| Download | Available on Modrinth |
| Notes | Largest supported pack -- all 7,194 species have assignments |

### Total Species Count

**8,426 species** have built-in skill assignments across all supported packs.

---

## How Fakemon Auto-Assignment Works

For Fakemon packs (everything except official Cobblemon), skills are automatically assigned based on three factors:

### 1. Typing

A Fakemon's type determines which skills it can receive:

| Type | Assigned Skills |
|------|----------------|
| Water | Fishing, Water Fill, Water Breathing, Diving |
| Fire | Furnace Fuel, Lava Fill |
| Grass | Harvester, Irrigator, Botanist |
| Ground/Rock | Mining, Archeologist, Excavator |
| Fighting | Guard, Trainer |
| Psychic | Mentor |
| Fairy | Friend Recruiter |
| Normal | Gatherer |
| Ghost/Dark | Night Vision, Scout |
| Ice | Snow Fill |
| Bug | Honey Collect |
| Poison | Brew Fuel |

### 2. Base Stats

Individual base stats influence additional skill assignments:

| Stat Condition | Assigned Skill |
|----------------|---------------|
| High ATK (110+) | Guard |
| High SPE (110+) | Scout |
| High SPA (110+) | Mentor |
| High HP (100+) | Healer |

### 3. BST Tiers

Base Stat Total determines proficiency levels and access to legendary skills:

| BST Range | Effects |
|-----------|---------|
| 600+ (Legendary) | Prof 5, Legendary Recruiter, Lucky Charm, Aura Boost |
| 570+ (Pseudo) | High proficiency, Aura Boost, high Mentor |
| 530+ | +2 proficiency bonus to all skills |
| 480+ | +1 proficiency bonus to all skills |
| Below 480 | Base proficiency levels |

---

## Using Unsupported Fakemon Packs

If you install a Fakemon mod that is not in the supported list above, those species will not have any skill assignments by default. You have two options:

### Option 1: Admin GUI (Recommended for small packs)

Use `/cobblebase admin` to manually assign skills to each species. See the [Admin Guide](admin.md) for details.

1. Open the Admin GUI
2. Search for the Fakemon species
3. If it does not appear, type the name and click **"+ Add"**
4. Assign skills and proficiency levels
5. Changes save automatically

### Option 2: Datapacks (Recommended for large packs)

Create a [datapack](datapacks.md) with species assignment JSON files for bulk configuration. This is better for large packs with many species that you want to configure all at once.

---

## Known Incompatibilities

### Chiselmon

**Status:** Incompatible

Chiselmon causes GUI crashes when opening the Cobblebase screen. If you experience crashes when clicking the "Cobblebase" button in the Pasture Block, check if Chiselmon is installed.

**Workaround:** Remove Chiselmon from your mods folder. There is currently no fix available.

---

## Recommended Modpack

For the best Cobblebase experience, use the [Cobbleverse](https://modrinth.com/modpack/cobbleverse) modpack. It includes hundreds of additional Pokemon species, and Cobblebase has skill assignments for all of them. The modpack is tested for compatibility and includes all required dependencies.

---

## Reporting Compatibility Issues

If you find a mod that causes issues with Cobblebase, please report it on the [GitHub Issues](https://github.com/notlown/cobblebase/issues) page or in the [Discord server](https://discord.gg/6As3sVZgVT).

Include the following information:
- Cobblebase version
- Conflicting mod name and version
- Minecraft version and mod loader (Fabric/NeoForge)
- Crash log or error description
