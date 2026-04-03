# Admin GUI Guide

The Admin GUI allows server operators to manage skill assignments for any Pokemon species directly in-game -- no JSON editing or server restarts needed. This is especially powerful for adding support for Fakemon mods that do not have built-in skill assignments.

## Opening the Admin GUI

```
/cobblebase admin
```

Requires **OP level 2** or higher.

## Interface Layout

The Admin GUI has two main panels:

### Left Panel: Species Browser

A scrollable, searchable list of **all loaded Pokemon species**, including:
- All official Cobblemon species
- Fakemon from installed mods (Lively Mons, Alatias Pack, Gravelmon, etc.)
- Custom species added through the Admin GUI

Each entry shows the Pokemon's **sprite** (with a fallback icon for unknown species).

**Search:** Type in the search bar at the top to filter species by name. The list updates in real-time as you type.

### Right Panel: Skill Editor

When you select a species from the browser, the right panel shows:

- **Species name** at the top
- **3-column skill grid** organized by category
- **Checkbox** for each skill to toggle it on or off
- **Proficiency stars** (1-5) that you can click to set the proficiency level

## Managing Skills

### Toggling Skills

Click the **checkbox** next to any skill to enable or disable it for the selected species. Changes take effect **immediately** -- no restart required.

### Setting Proficiency

Click the **star icons** (1-5) next to any enabled skill to set its proficiency level:
- 1 star = Novice
- 2 stars = Apprentice
- 3 stars = Skilled
- 4 stars = Expert
- 5 stars = Master

See the [Proficiency Guide](proficiency.md) for how each level affects performance.

### Resetting to Default

Click the **"Reset to Default"** button to revert a species to its built-in skill assignments. This removes any custom overrides you have made for that species.

## Adding Fakemon

If you have a Fakemon mod installed and a species does not appear in the species list:

1. Type the Fakemon's name in the **search bar**
2. A green **"+ Add"** option will appear at the bottom of the list
3. Click it to create a new species entry
4. Assign skills and set proficiency levels
5. The Fakemon will persist across restarts

## Persistence

All custom assignments are saved to:

```
<world_folder>/cobblebase_species_overrides.json
```

This file is loaded on server start and takes priority over built-in assignments. You can also edit this file manually if needed, but the in-game GUI is the recommended approach.

### Override Behavior

Custom assignments **fully override** built-in data for a species. If you toggle a single skill for a Pokemon, all of its skills (including the ones you did not change) are saved in the override file.

## Use Cases

### Balancing Skills for Your Server

If you think a Pokemon's proficiency is too high or too low for your server's balance, use the Admin GUI to adjust it. For example:
- Lower Arceus from Prof 5 to Prof 3 on Legendary Recruiter to reduce legendary spawns
- Increase a less common Pokemon's Guard proficiency to make it more useful

### Adding Fakemon Support

When you install a new Fakemon mod:
1. Open `/cobblebase admin`
2. Browse or search for the new species
3. Assign appropriate skills based on the Fakemon's theme and stats
4. Consider the [Fakemon BST guidelines](proficiency.md#fakemon-bst-based-proficiency) for balanced assignments

### Creating Themed Bases

Assign unusual skills to specific Pokemon for themed bases:
- Give all your Eevee evolutions unique Finder specializations
- Make a "Fire Base" where Fire-type Fakemon handle all environmental jobs

## Tips

- **Changes are live.** If a Pokemon is currently assigned to a job and you remove that skill, the Pokemon will stop working immediately.
- **Override file is per-world.** Different worlds can have different skill configurations.
- **Back up your overrides.** If you have spent time configuring many species, back up `cobblebase_species_overrides.json` before wiping your world.
- **The Admin GUI shows ALL species.** Even if 7,000+ Gravelmon species are loaded, they all appear in the scrollable list. Use the search bar to find what you need quickly.
