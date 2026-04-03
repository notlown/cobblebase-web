# Getting Started

This guide walks you through installing Cobblebase and getting your first Pokemon base up and running.

## Requirements

| Dependency | Version |
|-----------|---------|
| Minecraft | **1.21.1** |
| Cobblemon | **1.7.0+** |
| Cloth Config | Required (mod crashes without it) |

### Fabric

- Fabric Loader **0.16.14+**
- Fabric Language Kotlin

### NeoForge

- NeoForge **21.1+**
- Kotlin for Forge **5.x**

## Installation

1. Download the latest Cobblebase JAR for your platform (Fabric or NeoForge) from [Modrinth](https://modrinth.com/project/cobblebase) or [GitHub Releases](https://github.com/notlown/cobblebase/releases).
2. Place the JAR in your `mods/` folder alongside Cobblemon, Cloth Config, and the Kotlin language adapter for your platform.
3. Launch the game.

## First Steps

### 1. Place a Pasture Block

Cobblebase works through the Cobblemon Pasture Block. Place one down and send your Pokemon into the pasture as you normally would.

### 2. Open the Cobblebase GUI

Right-click the Pasture Block to open it. You will see a **"Cobblebase"** button in the Pasture Block UI. Click it to open the management interface.

### 3. Assign Jobs

In the **Skills** tab, you will see each Pokemon in your pasture along with their available skills. You have two options:

- **Auto** -- The mod automatically picks the best skill for each Pokemon based on proficiency.
- **Manual** -- Click a specific skill button to assign that job.

### 4. Watch Your Pokemon Work

Once assigned, Pokemon begin performing their jobs on cooldown-based cycles. They will harvest crops, mine ores, guard your base, find items, and more -- all automatically.

### 5. Check Your Logs

Switch to the **Logs** tab to see what your Pokemon have been doing. Filter by rarity to quickly find valuable discoveries.

## Configuration

Press **K** (default keybind) to open the Cloth Config settings screen. Key options include:

| Setting | Description | Default |
|---------|-------------|---------|
| Dev Mode | Sets all cooldowns to 5 seconds for testing | Off |
| Passive XP | Toggle passive XP gain for pastured Pokemon | On |
| Passive XP Percentage | Percentage of XP to next level gained per tick | 5% |
| Passive XP Interval | Seconds between passive XP ticks | 60s |
| Skill Toggles | Enable/disable entire skill categories | All on |
| Search Radius | Default block search radius for skills | 10 |
| Mentor Max Boost | Cap the mentor XP multiplier | 100% |

All settings are also available as JSON configuration files for server admins.

## Building from Source

```bash
git clone https://github.com/notlown/cobblebase.git
cd cobblebase
./gradlew build          # builds both Fabric and NeoForge
./gradlew fabric:build   # Fabric only
./gradlew neoforge:build # NeoForge only
```

Output JARs are located in `fabric/build/libs/` and `neoforge/build/libs/`. Requires **Java 21**.

## Next Steps

- Learn about all [44 jobs](jobs.md) your Pokemon can perform
- Understand the [proficiency system](proficiency.md) that scales performance
- Explore the [GUI](gui.md) tabs for managing your base
- Check [compatibility](compatibility.md) with Fakemon packs
