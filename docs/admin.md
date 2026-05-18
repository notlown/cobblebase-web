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
- Fakemon from installed mods (Lively Mons, Alatias Pack, etc.)
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

## Jobs Tab

The Jobs tab (added in 1.5.5) lets admins tune cooldown, search radius, per-proficiency cooldowns, and job-specific parameters per skill — globally, without datapacks.

### Layout

- **Left sidebar** -- expandable category list (Gathering / Finder / Combat / Production / Support / etc.). Click a category to expand; click a job to enter its detail view.
- **Detail view** has three sub-tabs:
  - **Settings** -- cooldown, search radius, enabled toggle, declared tuning fields (see below), and five synthetic per-proficiency cooldown rows (`_prof1Cd` ... `_prof5Cd`) that override the global cooldown for that specific proficiency level.
  - **Loot** -- embedded loot editor in `lockedToBaseName` mode, so the job's loot table is editable inline without leaving the Jobs tab.
  - **Stats** -- placeholder for future per-job analytics.

All edits are previewed in-tab and saved together when you click **Save**. An unsaved-changes indicator (`*unsaved`) appears next to the button while edits are pending.

### Per-Job Tuning Fields

Several support and production jobs expose extra parameters beyond cooldown/radius. Each renders as an indented sub-row in the Settings sub-tab.

| Job | Tuning key | What it does |
|---|---|---|
| Mentor | `xpMultiplier` | Scales the proficiency-derived XP boost (1.0 = vanilla, 2.0 = doubled) |
| Speed / Strength / Resistance / Jump / Haste / Saturation / Night Vision / Water Breathing | `effectLevel` | Sets the status effect amplifier applied to players (Speed I, II, III, ...) |
| Aura Boost | `luckBonus` | Adds extra Luck levels on top of the proficiency-scaled amplifier |
| Lucky Charm | `shinyMultiplier` | Multiplier on top of the proficiency-scaled shiny rate |
| Growth Aura | `growthMultiplier` | Multiplier on crops ticked per pulse |
| Egg Hatcher | `incubationSpeed` | Multiplier on the Cobbreeding egg timer tick rate (1.0 = vanilla, 2.0 = hatch twice as fast) |

Each support executor falls back to its built-in default if the JSON omits the tuning declaration, so existing third-party skill JSONs keep working unchanged.

### Per-Proficiency Cooldowns

Every job auto-gets five extra rows (`_prof1Cd` ... `_prof5Cd`) under Settings. Defaults follow the existing prof-cooldown formula; admins only need to edit the rows they want to override. Stored in the same `JobConfigOverrides.tuning` map and consumed via `CobblebaseConfig.getEffectiveCooldownTicks(base, prof, skillId)`.

## Server Tab

The Server tab (added in 1.5.5) houses server-wide feature flags that aren't tied to any single job.

| Setting | Default | Effect |
|---|---|---|
| **WorkerWiki visibility** | enabled | When disabled, the in-game WorkerWiki sub-tab renders a "disabled" message instead of the species grid -- useful for servers where admins want players to discover skills by experimenting. |
| **Pasture Range** | 10 blocks | Server-wide radius Pokemon use to scan for work targets and stay near the pasture. Overrides the local cloth-config `jobSearchRadius` value. Bounded 5-30. |
| **Max Working Pokemon per Pasture** | 0 (unlimited) | Caps how many tethered Pokemon can hold a job assignment at once per pasture. Mons past the cap (in tether order) are hard-unassigned to Relax. Aura-only mons (null assignment, species grants passive buff) are not counted toward the cap. Bounds 0-64. |

Settings persist in `cobblebase_general.json` and broadcast to all clients on change.

## Loot Tab

The dedicated Loot tab from earlier releases was folded into each job's per-job detail view (Jobs tab -> select job -> Loot sub-tab). All loot editing now happens inline alongside the job's other settings — see the Jobs Tab section above.

## Wiki Tab

External-resources panel: Modrinth page, GitHub, Discord, Ko-fi support box. Server-config flags that previously lived here (e.g. the WorkerWiki visibility toggle) have moved to the Server tab.

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
- **The Admin GUI shows ALL species.** Every loaded species appears in the scrollable list. Use the search bar to find what you need quickly.
