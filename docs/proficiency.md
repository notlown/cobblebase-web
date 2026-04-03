# Proficiency System

Every Pokemon in Cobblebase has a proficiency level (1-5) for each of its skills. Proficiency determines how effectively a Pokemon performs its assigned job -- affecting cooldowns, range, loot quality, and special behavior.

## Proficiency Levels

| Level | Title | Cooldown Multiplier | Description |
|-------|-------|---------------------|-------------|
| 1 | Novice | 1.67x (slower) | Base rates, small range |
| 2 | Apprentice | 1.33x | Slightly improved |
| 3 | Skilled | 1.00x (normal) | Standard performance |
| 4 | Expert | 0.67x (faster) | Better loot tiers, wider range |
| 5 | Master | 0.33x (fastest) | Best rates, maximum range |

## Cooldown Formula

The effective cooldown for any skill is calculated as:

```
Effective Cooldown = Base Cooldown x Cooldown Multiplier
```

For example, Mining has a base cooldown of 300 seconds:

| Proficiency | Multiplier | Effective Cooldown |
|-------------|------------|-------------------|
| 1 (Novice) | 1.67x | 501 seconds (~8.4 min) |
| 2 (Apprentice) | 1.33x | 399 seconds (~6.7 min) |
| 3 (Skilled) | 1.00x | 300 seconds (5 min) |
| 4 (Expert) | 0.67x | 201 seconds (~3.4 min) |
| 5 (Master) | 0.33x | 99 seconds (~1.7 min) |

A Prof 5 Pokemon completes jobs roughly **5 times faster** than a Prof 1 Pokemon.

## Effects Beyond Cooldowns

Proficiency also affects several other aspects of each skill:

### Loot Quality

Higher proficiency increases the chance of rolling higher loot tiers. A Prof 5 Miner is more likely to find diamonds and ancient debris, while a Prof 1 Miner mostly pulls up tumblestones and raw copper.

### Range

Several skills scale their effective radius with proficiency:

| Skill | Prof 1 Range | Prof 5 Range |
|-------|-------------|-------------|
| Item Gatherer | 5 blocks | 12 blocks |
| Scout | 50 blocks | 200 blocks |
| Lucky Charm | 10 blocks | 20 blocks |

### Buff Duration and Behavior

Passive [buff skills](buffs.md) scale heavily with proficiency:

| Proficiency | Duration | Cooldown |
|-------------|----------|----------|
| 1 | 15 seconds | 60 seconds |
| 3 | ~40 seconds | ~30 seconds |
| 5 | 70 seconds (effectively permanent) | 0 seconds |

At Prof 5, buffs become **global** -- they apply to the owner anywhere in the world, not just near the pasture.

### Healer Scaling

The Healer skill restores a percentage of each Pokemon's max HP per tick:

| Proficiency | Healing per Tick |
|-------------|-----------------|
| 1 | 5% max HP |
| 3 | 15% max HP |
| 5 | 25% max HP |

### Mentor Scaling

The Mentor provides a passive XP boost to all Pokemon in the pasture:

| Proficiency | XP Boost |
|-------------|----------|
| 1 | +20% |
| 3 | +60% |
| 5 | +100% (double XP) |

The highest-proficiency Mentor wins. Multiple Mentors do not stack.

### Scout Discovery Types

The Scout unlocks new discovery categories at higher proficiency:

| Proficiency | Discovers |
|-------------|-----------|
| 1-2 | Wild Pokemon only |
| 3 | + Structures (Villages, Mineshafts, etc.) |
| 4-5 | + Rare Biomes (Mushroom Fields, Deep Dark, etc.) |

### Friend Recruiter Rarity

Higher proficiency increases the chance of spawning rarer Pokemon:

| Proficiency | Ultra-Rare Chance |
|-------------|------------------|
| 1 | 0.2% |
| 3 | 0.3% |
| 5 | 0.4% |

### Lucky Charm Scaling

The shiny rate multiplier scales from 1.4x at Prof 1 to 3.0x at Prof 5.

## Species Proficiency

Each Pokemon species has its own proficiency level for each skill it possesses. These are pre-assigned in the species data files and reflect the identity and lore of each Pokemon.

For example:
- **Gyarados** has Fishing Prof 5 -- it is a master fisher.
- **Magikarp** has Fishing Prof 1 -- it struggles.
- **Alakazam** has Mentor Prof 5 -- the ultimate teacher.

Proficiency is fixed per species and cannot be leveled up through gameplay. It is part of each Pokemon's identity.

## Customizing Proficiency

Server admins can modify proficiency levels for any species through:

1. **Admin GUI** (`/cobblebase admin`) -- Click the proficiency stars in the skill editor to set 1-5 for any skill on any species. See the [Admin Guide](admin.md).
2. **Datapacks** -- Override species skill assignments via JSON files. See the [Datapacks Guide](datapacks.md).

## Fakemon BST-Based Proficiency

For Fakemon packs without hand-crafted assignments, proficiency is determined by Base Stat Total (BST):

| BST Range | Proficiency Bonus | Tier |
|-----------|------------------|------|
| 600+ | Prof 5, legendary skills | Legendary |
| 570+ | High proficiency, Aura Boost | Pseudo-Legendary |
| 530+ | +2 proficiency bonus | Strong |
| 480+ | +1 proficiency bonus | Above Average |
| Below 480 | Base proficiency | Standard |

See [Compatibility](compatibility.md) for details on supported Fakemon packs.
