# Datapacks

Cobblebase is fully customizable via Minecraft datapacks. You can add new skills, modify loot tables, or reassign Pokemon species without touching any code.

## Overview

Cobblebase uses two types of JSON data:

1. **Skill definitions** -- Define what a job does, its cooldown, search radius, and executor
2. **Species assignments** -- Map Pokemon species to skills and set proficiency levels

Both can be overridden or extended via datapacks placed in your world's `datapacks/` folder.

## File Structure

A Cobblebase datapack follows the standard Minecraft datapack structure:

```
my_cobblebase_pack/
  pack.mcmeta
  data/
    cobblebase/
      skills/
        my_custom_skill.json
      species/
        my_custom_pokemon.json
```

### pack.mcmeta

```json
{
  "pack": {
    "pack_format": 48,
    "description": "My custom Cobblebase datapack"
  }
}
```

Use pack format `48` for Minecraft 1.21.1.

## Skill Definition Format

Each skill is defined as a JSON file in `data/cobblebase/skills/`. Here is the full format with all available fields:

```json
{
  "id": "cobblebase:my_skill",
  "name": "My Custom Skill",
  "description": "What this skill does",
  "category": "gathering",
  "cooldownSeconds": 120,
  "searchRadius": 10,
  "executor": "harvester",
  "effectType": "default",
  "lootTable": "cobblebase:my_loot_table",
  "targetBlock": "minecraft:water",
  "requiresNearby": true,
  "xpReward": 50
}
```

### Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier in `namespace:name` format |
| `name` | string | Yes | Display name shown in the GUI |
| `description` | string | Yes | Tooltip text |
| `category` | string | Yes | Skill category (see below) |
| `cooldownSeconds` | integer | Yes | Base cooldown in seconds (modified by proficiency) |
| `searchRadius` | integer | Yes | How far the Pokemon searches for targets |
| `executor` | string | Yes | Which executor handles this skill (see below) |
| `effectType` | string | Yes | Visual effect type |
| `lootTable` | string | No | Loot table reference for loot-based skills |
| `targetBlock` | string | No | Block the Pokemon needs nearby (e.g., `minecraft:water`) |
| `requiresNearby` | boolean | No | Whether the target block must be within search radius |
| `xpReward` | integer | No | XP awarded on successful execution |

### Categories

| Category | Description |
|----------|-------------|
| `gathering` | Resource collection skills |
| `combat` | Fighting and defense |
| `support` | Healing and buff skills |
| `generation` | Block/fuel generation (furnace, cauldron, brewing) |
| `utility` | Utility skills (gathering items, irrigating, scouting) |
| `fairy` | Recruiting skills |
| `legendary` | Legendary-exclusive abilities |

### Executors

| Executor | Used By |
|----------|---------|
| `harvester` | Harvester |
| `fishing` | Fishing |
| `mining` | Mining |
| `honey` | Honey Collect |
| `archeology` | Archeologist |
| `diving` | Diving |
| `finder_evo`, `finder_hea`, `finder_bui`, etc. | All Finder subtypes |
| `guard` | Guard |
| `healer` | Healer |
| `mentor` | Mentor |
| `gather_items` | Item Gatherer |
| `scout` | Scout |
| `irrigate` | Irrigator |
| `cauldron_fill` | Lava Fill, Water Fill, Snow Fill |
| `furnace_fuel` | Furnace Fuel |
| `brew_fuel` | Brewing Fuel |
| `recruiter` | Friend Recruiter, Legendary Recruiter |
| `lucky_charm` | Lucky Charm |
| `growth` | Growth Aura |
| `extinguish` | Extinguisher |
| `speed_boost`, `strength_boost`, etc. | All buff skills |
| `aura` | Aura Boost |

### Effect Types

| Effect Type | Visual |
|-------------|--------|
| `default` | Standard particles |
| `harvest` | Green/nature particles |
| `water` | Blue water particles |
| `fire` | Fire/orange particles |
| `combat` | Red combat particles |
| `heal` | Pink/green heal particles |
| `special` | Gold/sparkle particles |

## Skill Definition Examples

### Example: Custom Gathering Skill

```json
{
  "id": "mypack:mushroom_forager",
  "name": "Mushroom Forager",
  "description": "Forages for mushrooms in dark areas",
  "category": "gathering",
  "cooldownSeconds": 60,
  "searchRadius": 15,
  "executor": "harvester",
  "effectType": "harvest"
}
```

### Example: Custom Environmental Skill

```json
{
  "id": "mypack:campfire_lighter",
  "name": "Campfire Lighter",
  "description": "Lights nearby campfires",
  "category": "generation",
  "cooldownSeconds": 45,
  "searchRadius": 10,
  "executor": "furnace_fuel",
  "effectType": "fire"
}
```

### Example: Overriding a Built-in Skill

To modify an existing skill, create a file with the same path. For example, to change Mining's cooldown from 300 to 180 seconds, create:

`data/cobblebase/skills/mining.json`

```json
{
  "id": "cobblebase:mining",
  "name": "Mining",
  "description": "Digs for ores, tumblestones, fossils, and gems",
  "category": "gathering",
  "cooldownSeconds": 180,
  "searchRadius": 10,
  "executor": "mining",
  "effectType": "harvest"
}
```

## Species Assignment Format

Species skill assignments map Pokemon to their available skills and proficiency levels. These are stored in `data/cobblebase/species/` with one JSON file per species.

```json
{
  "species": "cobblemon:charizard",
  "skills": {
    "cobblebase:guard": 4,
    "cobblebase:lava_fill": 5,
    "cobblebase:furnace_fuel": 4
  }
}
```

The keys are skill IDs and the values are proficiency levels (1-5).

### Example: Adding Skills to a Fakemon

```json
{
  "species": "myfakemons:flamedeer",
  "skills": {
    "cobblebase:guard": 3,
    "cobblebase:furnace_fuel": 4,
    "cobblebase:lava_fill": 3,
    "cobblebase:finder_food": 2
  }
}
```

## Loading Datapacks

1. Place your datapack folder in `<world>/datapacks/`
2. Run `/reload` or restart the server
3. The new skills and species assignments take effect immediately

## Priority Order

When multiple sources define skills for the same species:

1. **Admin GUI overrides** (highest priority) -- saved in `cobblebase_species_overrides.json`
2. **Datapacks** -- loaded from `datapacks/` folder
3. **Built-in data** (lowest priority) -- shipped with the mod

This means datapacks override built-in data, and the Admin GUI overrides everything.

## Tips

- **Test with Dev Mode.** Enable Dev Mode in Cloth Config settings to set all cooldowns to 5 seconds, making it easy to verify your datapack changes.
- **Use the Admin GUI for quick edits.** The [Admin GUI](admin.md) is faster for one-off changes. Use datapacks for large-scale modifications that should be shared or version-controlled.
- **Back up before overriding.** If you override built-in skills, keep a copy of the original values so you can restore them.
- **Namespace your custom skills.** Use your own namespace (e.g., `mypack:skill_name`) instead of `cobblebase:` to avoid conflicts with future updates.
