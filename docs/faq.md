# Frequently Asked Questions

## General

### What is Cobblebase?

Cobblebase is a Minecraft mod for Cobblemon that transforms the Pasture Block into a Palworld-style base. Your Pokemon get assigned jobs, work automatically, and produce resources, apply buffs, guard your base, and more.

### Does Cobblebase work on servers?

Yes. Cobblebase works on both singleplayer and multiplayer servers. All data (skill assignments, logs, discoveries) is stored server-side and persists across restarts.

### Does it work with Fabric and NeoForge?

Yes. Cobblebase has separate builds for both Fabric and NeoForge. Make sure to download the correct version for your mod loader.

### Is Cobblebase compatible with Cobblemon 1.7.0?

Cobblebase requires Cobblemon **1.7.0 or higher**. It was built and tested against Cobblemon 1.7.x on Minecraft 1.21.1.

---

## Installation

### The game crashes on startup with ClassNotFoundException

You are missing **Cloth Config**. Cobblebase requires Cloth Config to be installed. Without it, the mod crashes with `ClassNotFoundException: me.shedaniel.autoconfig.ConfigData`. Install Cloth Config from [Modrinth](https://modrinth.com/mod/cloth-config) or [CurseForge](https://www.curseforge.com/minecraft/mc-mods/cloth-config).

### The game crashes on NeoForge

Make sure you have **Kotlin for Forge 5.x** installed. Also verify that you are using the NeoForge build of Cobblebase, not the Fabric build.

If you still experience crashes, check for known [mod incompatibilities](compatibility.md#known-incompatibilities).

### Where do I configure Cobblebase?

Press **K** (default keybind) in-game to open the Cloth Config settings screen. All settings can also be edited via JSON config files.

---

## Skills and Jobs

### How do I assign a job to my Pokemon?

1. Right-click a Pasture Block
2. Click the **"Cobblebase"** button
3. In the Skills tab, click a skill button next to the Pokemon you want to assign, or click **Auto** to let the mod choose the best skill

### What does "Auto" do?

Auto mode selects the skill with the highest proficiency for that Pokemon. In most cases, this is the optimal choice.

### My Pokemon is not doing anything. Why?

Check these common issues:
- **Is the Pokemon assigned to a job?** Open the Skills tab and verify a skill is selected.
- **Is the skill on cooldown?** Some skills have long cooldowns (Mining: 5 min, Finder jobs: 4 min, Legendary Recruiter: 10 min). Wait for the cooldown to expire.
- **Does the skill require something nearby?** Fishing and Diving require water within the search radius. Furnace Fuel needs a furnace. Cauldron fills need an empty cauldron.
- **Is the skill category disabled?** Check Cloth Config settings -- skill categories can be individually toggled off.

### Can I change a Pokemon's proficiency?

Proficiency is fixed per species and cannot be leveled up through gameplay. However, server admins can change proficiency levels using the [Admin GUI](admin.md) (`/cobblebase admin`) or via [datapacks](datapacks.md).

### What determines which skills a Pokemon gets?

For official Cobblemon species (996 Pokemon), every skill assignment is hand-crafted based on the Pokemon's identity and lore. A Charizard gets Lava Fill and Guard, not because it is a Fire type, but because those fit its character.

For [Fakemon packs](compatibility.md), skills are auto-assigned based on typing, base stats, and BST tiers.

---

## Proficiency

### How does proficiency affect cooldowns?

See the [Proficiency Guide](proficiency.md) for the full formula. In short: Prof 1 is 1.67x slower than base, Prof 3 is normal speed, and Prof 5 is 0.33x (about 5 times faster than Prof 1).

### What does Prof 5 do for buffs?

At proficiency 5, buff skills become **global** -- they apply to the pasture owner anywhere in the world, not just near the pasture. The effect is also effectively permanent with zero cooldown. See the [Buffs Guide](buffs.md#prof-5-global-behavior).

### Is there a way to level up proficiency?

No. Proficiency is a fixed attribute of each Pokemon species. A Magikarp with Fishing Prof 1 will always be Prof 1. To get higher proficiency, you need to find or catch a Pokemon species with higher proficiency for that skill.

---

## Buffs

### Do buffs stack?

**Same buff type:** No. Only the highest proficiency applies.
**Different buff types:** Yes. You can have Speed Boost, Strength Boost, and Night Vision all active at the same time.

### I can not see buff particles on my character

Buff particles on players are intentionally disabled to reduce visual clutter. You can see active buffs in the [Buffs tab](gui.md#buffs-tab) and through the standard Minecraft effect icons.

### How do I get permanent buffs?

You need a Pokemon with **proficiency 5** for the buff skill you want. At Prof 5, the buff has zero cooldown and 70-second duration, making it effectively permanent and global. These Pokemon are rare -- check the [Buffs Guide](buffs.md) for which Pokemon have each buff.

---

## Admin and Customization

### How do I open the Admin GUI?

Run `/cobblebase admin` in chat. You need **OP level 2** or higher.

### Can I add skills to Fakemon?

Yes. Use the [Admin GUI](admin.md) to assign skills to any loaded species. You can also add entirely new species by typing the name in the search bar and clicking "+ Add".

### Do Admin GUI changes survive server restarts?

Yes. Custom assignments are saved to `cobblebase_species_overrides.json` in the world folder.

### Can I share my custom skill assignments with other servers?

Yes. Copy the `cobblebase_species_overrides.json` file from your world folder to the other server's world folder. You can also create a [datapack](datapacks.md) for a more portable solution.

---

## Troubleshooting

### The GUI is blurry

This was a known bug in earlier versions caused by Minecraft 1.21+'s Gaussian blur shader. It is fixed in version 1.2.0 and later. Update to the latest version.

### Selected skills reset when I switch tabs

Fixed in version 1.3.0. Update to the latest version.

### A Pokemon named Farfetch'd crashes the GUI

Fixed in version 1.3.0. Species names with special characters (apostrophes, accents) are now handled correctly.

### Items are dropping on the ground instead of going into chests

Most loot-producing skills (Diving, Archeologist, Honey Collect, all Finders) deposit items into nearby chests automatically. Make sure:
- There are chests within the search radius (default: 10 blocks)
- The chests have available inventory space
- The chests are accessible (not blocked by other blocks)

If no valid chest is found, items drop on the ground as a fallback.

### Lucky Charm does not seem to work

Lucky Charm applies to the **owner** of the pasture, not to all players. It boosts the shiny rate for wild Pokemon that spawn near you. The effect is passive and has no visual indicator -- you need to encounter wild Pokemon to notice the difference. At Prof 5, the shiny rate is 3x the base rate.
