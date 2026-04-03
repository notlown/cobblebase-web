# Buffs and Legendary Abilities

Cobblebase includes 9 passive buff skills and 3 legendary abilities. These skills apply status effects to players or provide passive benefits to your base.

## How Buffs Work

Buff skills apply Minecraft status effects to all players within **16 blocks** of the pasture. The buff executor runs on a cooldown cycle, reapplying the effect periodically.

### Duration and Cooldown Scaling

Both duration and cooldown scale with [proficiency](proficiency.md):

| Proficiency | Duration | Cooldown | Uptime |
|-------------|----------|----------|--------|
| 1 (Novice) | 15 seconds | 60 seconds | ~25% |
| 2 (Apprentice) | ~28 seconds | ~45 seconds | ~62% |
| 3 (Skilled) | ~40 seconds | ~30 seconds | ~100% |
| 4 (Expert) | ~55 seconds | ~15 seconds | 100% |
| 5 (Master) | 70 seconds | 0 seconds | 100% (permanent) |

### Prof 5 Global Behavior

At proficiency 5, buffs become **global**. Instead of requiring players to be near the pasture, the buff applies to the **pasture owner anywhere in the world**. The effect is effectively permanent with zero cooldown and 70-second duration, meaning it reapplies before it expires.

This makes Prof 5 buff Pokemon extremely valuable -- you get a permanent status effect regardless of where you are.

### Buff Particles

When a buff is applied, themed particles appear at the pasture origin. Player-side buff particles (speed swirls, haste glitter, etc.) are **disabled** to avoid visual clutter.

### Buff Logging

Buff applications do **not** appear in the Activity Log to prevent clutter. You can see active buffs in the [Buffs tab](gui.md#buffs-tab) of the GUI.

---

## Passive Buff Skills

All buff skills share a **60-second base cooldown** and **16-block search radius**.

### Speed Boost

Grants **Speed II** to nearby players, significantly increasing movement speed.

| Pokemon | Proficiency |
|---------|-------------|
| Ninjask | 4 |
| Regieleki | - |
| Rapidash | 4 |
| Jolteon | 5 |
| Zeraora | - |

After the rarity overhaul, only **12 Pokemon** have Speed Boost (down from 45).

### Strength Boost

Grants **Strength I** to nearby players, increasing melee damage.

| Pokemon | Proficiency |
|---------|-------------|
| Kartana | - |
| Rayquaza | - |
| Machamp | 5 |
| Groudon | - |
| Regigigas | - |

After the rarity overhaul, only **12 Pokemon** have Strength Boost (down from 55).

### Resistance Boost

Grants **Resistance I** to nearby players, reducing incoming damage.

| Pokemon | Proficiency |
|---------|-------------|
| Regirock | - |
| Steelix | 5 |
| Melmetal | - |
| Aggron | 4 |
| Shuckle | - |

After the rarity overhaul, only **12 Pokemon** have Resistance Boost (down from 58).

### Night Vision

Grants **Night Vision** to nearby players, allowing clear sight in darkness.

| Pokemon | Proficiency |
|---------|-------------|
| Giratina | - |
| Umbreon | 5 |
| Darkrai | - |
| Yveltal | - |
| Spectrier | - |

After the rarity overhaul, only **15 Pokemon** have Night Vision (down from 132).

### Water Breathing

Grants **Water Breathing** to nearby players, allowing unlimited underwater breathing.

| Pokemon | Proficiency |
|---------|-------------|
| Kyogre | - |
| Milotic | 4 |
| Lapras | 5 |
| Vaporeon | 4 |
| Wailord | - |

After the rarity overhaul, only **18 Pokemon** have Water Breathing (down from 133).

### Jump Boost

Grants **Jump Boost I** to nearby players, increasing jump height.

| Pokemon | Proficiency |
|---------|-------------|
| Lopunny | 4 |
| Hitmonlee | 4 |
| Blaziken | 3 |

Only **5 Pokemon** have Jump Boost (unchanged in the rarity overhaul).

### Haste Boost

Grants **Haste I** to nearby players, increasing mining and attack speed.

| Pokemon | Proficiency |
|---------|-------------|
| Palkia | - |
| Dialga | - |
| Rayquaza | - |
| Mewtwo | - |
| Alakazam | 4 |

After the rarity overhaul, only **12 Pokemon** have Haste Boost (down from 53).

### Saturation

Grants **Saturation** to nearby players, restoring hunger without eating.

| Pokemon | Proficiency |
|---------|-------------|
| Slurpuff | 3 |
| Snorlax | 5 |
| Munchlax | 4 |
| Ting-Lu | - |
| Blissey | - |

After the rarity overhaul, only **10 Pokemon** have Saturation (down from 27).

### Aura Boost

Grants **Luck** to nearby players, improving loot quality from all sources (chests, fishing, mob drops).

| Proficiency | Effect |
|-------------|--------|
| 1-2 | Luck I |
| 3-4 | Luck II |
| 5 | Luck III (global) |

| Pokemon | Proficiency |
|---------|-------------|
| Victini | 5 |
| Rayquaza | 5 |
| Arceus | 5 |

Aura Boost is classified as a legendary skill and only appears on top-tier Pokemon.

---

## Legendary Abilities

These special passive abilities are exclusive to legendary and mythical Pokemon.

### Lucky Charm

Boosts the **shiny encounter rate** for wild Pokemon near the owner.

| Proficiency | Shiny Multiplier | Radius |
|-------------|-----------------|--------|
| 1 | 1.4x | 10 blocks |
| 2 | 1.8x | 12 blocks |
| 3 | 2.2x | 14 blocks |
| 4 | 2.6x | 17 blocks |
| 5 | 3.0x | 20 blocks |

The effect follows the **owner**, not the pasture. At Prof 5, this triples the base shiny rate within a 20-block radius.

| Pokemon | Proficiency |
|---------|-------------|
| Arceus | 5 |
| Mew | 5 |
| Jirachi | 4 |
| Victini | 4 |

### Growth Aura

Passively **accelerates crop growth** near the pasture. Affects all standard crops, berries, and Cobblemon plants.

| Property | Value |
|----------|-------|
| Base Cooldown | Continuous (0s) |
| Search Radius | 10 blocks |

| Pokemon | Proficiency |
|---------|-------------|
| Arceus | 5 |
| Celebi | 5 |
| Shaymin | 4 |

### Extinguisher

Automatically **removes fire blocks** and **extinguishes lit campfires** near the base. Scans continuously for fire, soul fire, and lit campfire blocks within the search radius.

| Property | Value |
|----------|-------|
| Base Cooldown | Continuous (0s) |
| Search Radius | 10 blocks |

| Pokemon | Proficiency |
|---------|-------------|
| Wartortle | 3 |
| Muk | 3 |
| Squirtle | 2 |
| Blastoise | - |

---

## Buff Stacking

Multiple buff Pokemon of the **same type** do not stack. The highest-proficiency buff wins. For example, if you have both a Prof 3 and Prof 5 Speed Boost Pokemon in the same pasture, only the Prof 5 effect applies.

Different buff types **do stack**. You can have Speed Boost, Strength Boost, and Night Vision all active simultaneously from different Pokemon in the same pasture.

## Recommendations

- **Prioritize Prof 5 buff Pokemon** for the global, permanent effect.
- **Aura Boost (Luck)** is one of the most impactful buffs -- Luck III significantly improves loot from all sources.
- **Lucky Charm** is highly sought after for shiny hunting. A Prof 5 Mew or Arceus triples your shiny rate.
- **Night Vision** eliminates the need for torches during cave exploration.
- **Saturation** from a Prof 5 Snorlax means you never need to eat.
- Combine **Haste Boost** with **Strength Boost** for efficient mining sessions.
