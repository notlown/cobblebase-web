// Cobblebase Datapack Generator - Data
// Auto-generated from Cobblebase source files

const SKILLS = [
  {
    "id": "cobblebase:archeologist",
    "name": "Archeologist",
    "description": "Digs for fossils and ancient treasures",
    "category": "gathering",
    "cooldownSeconds": 80,
    "searchRadius": 10,
    "executor": "archeology",
    "effectType": "default",
    "lootTable": "cobblebase:archeology_treasure"
  },
  {
    "id": "cobblebase:aura_boost",
    "name": "Aura Boost",
    "description": "All nearby workers perform jobs faster",
    "category": "legendary",
    "cooldownSeconds": 0,
    "searchRadius": 15,
    "executor": "aura",
    "effectType": "special"
  },
  {
    "id": "cobblebase:brew_fuel",
    "name": "Brewing Fuel",
    "description": "Adds fuel to brewing stands",
    "category": "generation",
    "cooldownSeconds": 80,
    "searchRadius": 10,
    "executor": "brew_fuel",
    "effectType": "fire"
  },
  {
    "id": "cobblebase:diving",
    "name": "Diving",
    "description": "Dives for underwater treasure",
    "category": "gathering",
    "cooldownSeconds": 90,
    "searchRadius": 10,
    "executor": "diving",
    "effectType": "water",
    "lootTable": "cobblebase:dive_treasure",
    "targetBlock": "minecraft:water",
    "requiresNearby": true
  },
  {
    "id": "cobblebase:extinguisher",
    "name": "Extinguisher",
    "description": "Puts out nearby fires",
    "category": "utility",
    "cooldownSeconds": 0,
    "searchRadius": 10,
    "executor": "extinguish",
    "effectType": "water"
  },
  {
    "id": "cobblebase:finder_bal",
    "name": "Collector",
    "description": "Searches the area for Pokeballs of all types",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_bal",
    "effectType": "default"
  },
  {
    "id": "cobblebase:finder_bui",
    "name": "Architect",
    "description": "Searches the area for building materials",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_bui",
    "effectType": "default"
  },
  {
    "id": "cobblebase:finder_evo",
    "name": "Alchemist",
    "description": "Searches the area for evolution items and stones",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_evo",
    "effectType": "default"
  },
  {
    "id": "cobblebase:finder_exp",
    "name": "Scholar",
    "description": "Searches the area for XP Candies and Rare Candies",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_exp",
    "effectType": "default"
  },
  {
    "id": "cobblebase:finder_food",
    "name": "Chef",
    "description": "Searches the area for food and cooking ingredients",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_food",
    "effectType": "default"
  },
  {
    "id": "cobblebase:finder_hea",
    "name": "Pharmacist",
    "description": "Searches the area for healing items and berries",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_hea",
    "effectType": "heal"
  },
  {
    "id": "cobblebase:finder_held",
    "name": "Armorer",
    "description": "Searches the area for battle held items",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_held",
    "effectType": "default"
  },
  {
    "id": "cobblebase:finder_ore",
    "name": "Excavator",
    "description": "Searches the area for ores and raw minerals",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_ore",
    "effectType": "default"
  },
  {
    "id": "cobblebase:finder_see",
    "name": "Botanist",
    "description": "Searches the area for seeds and plantable items",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_see",
    "effectType": "harvest"
  },
  {
    "id": "cobblebase:finder_smith",
    "name": "Smith",
    "description": "Searches the area for smithing templates and pottery",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_smith",
    "effectType": "default"
  },
  {
    "id": "cobblebase:finder_stat",
    "name": "Trainer",
    "description": "Searches the area for vitamins and training items",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_stat",
    "effectType": "default"
  },
  {
    "id": "cobblebase:finder_treasure",
    "name": "Prospector",
    "description": "Searches the area for relics and treasure",
    "category": "gathering",
    "cooldownSeconds": 240,
    "searchRadius": 10,
    "executor": "finder_treasure",
    "effectType": "default"
  },
  {
    "id": "cobblebase:fishing",
    "name": "Fishing",
    "description": "Catches fish from nearby water",
    "category": "gathering",
    "cooldownSeconds": 60,
    "searchRadius": 10,
    "executor": "fishing",
    "effectType": "water",
    "lootTable": "minecraft:gameplay/fishing",
    "targetBlock": "minecraft:water",
    "requiresNearby": true
  },
  {
    "id": "cobblebase:friend_recruiter",
    "name": "Friend Recruiter",
    "description": "Attracts rare wild Pokemon to appear nearby with charm",
    "category": "fairy",
    "cooldownSeconds": 300,
    "searchRadius": 15,
    "executor": "recruiter",
    "effectType": "special"
  },
  {
    "id": "cobblebase:furnace_fuel",
    "name": "Furnace Fuel",
    "description": "Adds fuel to furnaces",
    "category": "generation",
    "cooldownSeconds": 80,
    "searchRadius": 10,
    "executor": "furnace_fuel",
    "effectType": "fire"
  },
  {
    "id": "cobblebase:gatherer",
    "name": "Item Gatherer",
    "description": "Picks up dropped items from the ground and sorts them into nearby chests",
    "category": "utility",
    "cooldownSeconds": 5,
    "searchRadius": 24,
    "executor": "gather_items",
    "effectType": "default"
  },
  {
    "id": "cobblebase:growth_aura",
    "name": "Growth Aura",
    "description": "Crops and berries grow faster nearby",
    "category": "legendary",
    "cooldownSeconds": 0,
    "searchRadius": 10,
    "executor": "growth",
    "effectType": "special"
  },
  {
    "id": "cobblebase:guard",
    "name": "Guard",
    "description": "Repels wild Pokemon, earns XP or loot",
    "category": "combat",
    "cooldownSeconds": 120,
    "searchRadius": 10,
    "executor": "guard",
    "effectType": "combat",
    "lootTable": "cobblebase:guard_loot",
    "xpReward": 50
  },
  {
    "id": "cobblebase:harvester",
    "name": "Harvester",
    "description": "Harvests crops, berries, apricorns, mints, netherwart, and more",
    "category": "gathering",
    "cooldownSeconds": 10,
    "searchRadius": 20,
    "executor": "harvester",
    "effectType": "harvest"
  },
  {
    "id": "cobblebase:haste_boost",
    "name": "Haste Boost",
    "description": "Grants Haste I to nearby players",
    "category": "support",
    "cooldownSeconds": 60,
    "searchRadius": 16,
    "executor": "haste_boost",
    "effectType": "heal"
  },
  {
    "id": "cobblebase:healer",
    "name": "Healer",
    "description": "Heals nearby players with regeneration",
    "category": "support",
    "cooldownSeconds": 0,
    "searchRadius": 10,
    "executor": "healer",
    "effectType": "heal"
  },
  {
    "id": "cobblebase:irrigator",
    "name": "Irrigator",
    "description": "Hydrates nearby farmland",
    "category": "utility",
    "cooldownSeconds": 0,
    "searchRadius": 20,
    "executor": "irrigate",
    "effectType": "water"
  },
  {
    "id": "cobblebase:jump_boost",
    "name": "Jump Boost",
    "description": "Grants Jump Boost I to nearby players",
    "category": "support",
    "cooldownSeconds": 60,
    "searchRadius": 16,
    "executor": "jump_boost",
    "effectType": "heal"
  },
  {
    "id": "cobblebase:lava_fill",
    "name": "Lava Fill",
    "description": "Fills cauldrons with lava",
    "category": "generation",
    "cooldownSeconds": 90,
    "searchRadius": 10,
    "executor": "cauldron_fill",
    "effectType": "fire"
  },
  {
    "id": "cobblebase:lucky_charm",
    "name": "Lucky Charm",
    "description": "Increases loot quality for all workers",
    "category": "legendary",
    "cooldownSeconds": 0,
    "searchRadius": 15,
    "executor": "lucky_charm",
    "effectType": "special"
  },
  {
    "id": "cobblebase:mentor",
    "name": "Mentor",
    "description": "Boosts passive XP gain for all Pokemon in the base",
    "category": "support",
    "cooldownSeconds": 0,
    "searchRadius": 10,
    "executor": "mentor",
    "effectType": "special"
  },
  {
    "id": "cobblebase:mining",
    "name": "Mining",
    "description": "Digs for ores, tumblestones, fossils, and gems",
    "category": "gathering",
    "cooldownSeconds": 300,
    "searchRadius": 10,
    "executor": "mining",
    "effectType": "harvest"
  },
  {
    "id": "cobblebase:night_vision",
    "name": "Night Vision",
    "description": "Grants Night Vision to nearby players",
    "category": "support",
    "cooldownSeconds": 60,
    "searchRadius": 16,
    "executor": "night_vision",
    "effectType": "heal"
  },
  {
    "id": "cobblebase:recruiter",
    "name": "Recruiter",
    "description": "Attracts rare wild Pokemon to spawn near your base",
    "category": "legendary",
    "cooldownSeconds": 600,
    "searchRadius": 20,
    "executor": "recruiter",
    "effectType": "special"
  },
  {
    "id": "cobblebase:resistance_boost",
    "name": "Resistance Boost",
    "description": "Grants Resistance I to nearby players",
    "category": "support",
    "cooldownSeconds": 60,
    "searchRadius": 16,
    "executor": "resistance_boost",
    "effectType": "heal"
  },
  {
    "id": "cobblebase:saturation_boost",
    "name": "Saturation Boost",
    "description": "Grants Saturation to nearby players",
    "category": "support",
    "cooldownSeconds": 60,
    "searchRadius": 16,
    "executor": "saturation_boost",
    "effectType": "heal"
  },
  {
    "id": "cobblebase:scout",
    "name": "Scout",
    "description": "Explores the area to discover wild Pokemon, structures, and biomes",
    "category": "utility",
    "cooldownSeconds": 300,
    "searchRadius": 100,
    "executor": "scout",
    "effectType": "special"
  },
  {
    "id": "cobblebase:snow_fill",
    "name": "Snow Fill",
    "description": "Fills cauldrons with powder snow",
    "category": "generation",
    "cooldownSeconds": 90,
    "searchRadius": 10,
    "executor": "cauldron_fill",
    "effectType": "water"
  },
  {
    "id": "cobblebase:speed_boost",
    "name": "Speed Boost",
    "description": "Grants Speed II to nearby players",
    "category": "support",
    "cooldownSeconds": 60,
    "searchRadius": 16,
    "executor": "speed_boost",
    "effectType": "heal"
  },
  {
    "id": "cobblebase:strength_boost",
    "name": "Strength Boost",
    "description": "Grants Strength I to nearby players",
    "category": "support",
    "cooldownSeconds": 60,
    "searchRadius": 16,
    "executor": "strength_boost",
    "effectType": "heal"
  },
  {
    "id": "cobblebase:water_breathing",
    "name": "Water Breathing",
    "description": "Grants Water Breathing to nearby players",
    "category": "support",
    "cooldownSeconds": 60,
    "searchRadius": 16,
    "executor": "water_breathing",
    "effectType": "heal"
  },
  {
    "id": "cobblebase:water_fill",
    "name": "Water Fill",
    "description": "Fills cauldrons with water",
    "category": "generation",
    "cooldownSeconds": 90,
    "searchRadius": 10,
    "executor": "cauldron_fill",
    "effectType": "water"
  }
];

// 1367 species
const SPECIES_LIST = ["abomasnow", "abra", "absol", "accelgor", "aegislash", "aerodactyl", "aggron", "aipom", "alakazam", "alcremie", "alloette", "alomomola", "altaria", "amaura", "ambipom", "ambling", "amoonguss", "ampharos", "ampharosregional", "ampularigus", "ancientgale", "anglerine", "annihilape", "anorith", "appletun", "applin", "aquaskewer", "araquanid", "arbok", "arbokregional", "arboliva", "arcanine", "arceus", "archaludon", "archen", "archeops", "arctibax", "arctovish", "arctozolt", "ariados", "armaldo", "armarouge", "armillo", "aromatisse", "aron", "arrokuda", "articoo", "articuno", "audino", "aurorus", "avalinx", "avalugg", "axew", "azelf", "azumarill", "azurill", "bagon", "ballearia", "baltoy", "banette", "barbaracle", "barboach", "barraskewda", "basculegion", "basculin", "basicmon", "bastiodon", "baxcalibur", "bayleef", "beaquin", "beartic", "beautifly", "beedrill", "beheeyem", "beldum", "bellibolt", "bellossom", "bellossom_valencian", "bellsprout", "bergmite", "berrock", "beryllius", "beta", "bewear", "bibarel", "bibishock", "bidoof", "binacle", "bisharp", "bizaa", "blabully", "blacephalon", "blastoise", "blaziken", "blipbug", "blissey", "blitzle", "blitzumi", "boldore", "boltund", "bombirdier", "bonsly", "boomka", "bouffalant", "bounsweet", "bowldozer", "boxrin", "braixen", "brambleghast", "bramblin", "branchief", "braviary", "braviary_hisuian", "breezior", "breloom", "brionne", "bronzong", "bronzor", "brutebonnet", "bruxish", "budabon", "budew", "buizel", "bulbasaur", "bulbee", "buneary", "bunearyregional", "bunnelby", "burmy", "burstile", "butterfree", "butterfree_valencian", "buzzlex", "buzzwole", "cacnea", "cacturne", "calciopi", "calyrex", "camerupt", "canjitsu", "capsakid", "capyboulda", "carbink", "carkol", "carnivine", "carracosta", "carvanha", "cascoon", "castform", "caterpie", "caterpie_valencian", "celebi", "celesteela", "centisculk", "centiskorch", "ceruclone", "ceruledge", "cetitan", "cetoddle", "chandelure", "chansey", "charcadet", "charizard", "charjabug", "charmander", "charmeleon", "chatot", "cherrim", "cherubi", "chesnaught", "chespin", "chewtle", "chi-yu", "chien-pao", "chienpao", "chikorita", "chimchar", "chimecho", "chinchou", "chingling", "chiroquila", "chiyu", "chortoise", "cinccino", "cinderace", "citrillume", "citrisaurid", "clamperl", "clarissie", "clauncher", "clawitzer", "clawviathan", "claydol", "clefable", "clefairy", "cleffa", "clobbopus", "clodsire", "cloyster", "coalossal", "cobalion", "cofagrigus", "combee", "combusken", "comfey", "conkeldurr", "copperajah", "coracondra", "corkshermit", "corphish", "corsola", "corsola_galarian", "corviknight", "corvisquire", "cosmoem", "cosmog", "cottonee", "courpup", "crabominable", "crabrawler", "cradily", "cramorant", "cranidos", "crawdaunt", "creslume", "cresselia", "crimsonmaw", "croagunk", "crobat", "crocalor", "croconaw", "crustle", "cryogonal", "cubchoo", "cubone", "cufant", "cursola", "cutiefly", "cyclizar", "cyclopod", "cyndaquil", "dachsbun", "darkrai", "darmanitan", "dartrix", "darumaka", "decidueye", "decidueye_hisuian", "dedenne", "deerling", "deino", "delcalf", "delcatty", "delibird", "delphox", "deoxys", "dewgong", "dewott", "dewpider", "dhelmise", "diablaze", "dialga", "diancie", "diggersby", "diglett", "diglett_alolan", "dipplin", "ditto", "djinnferno", "dodeca", "dodrio", "doduo", "doduoregional", "dollamb", "dolliv", "dolwashi", "dondozo", "donphan", "dottler", "doublade", "dracovish", "dracozolt", "dragalge", "dragapult", "dragonair", "dragonite", "drakloak", "drakoceros", "drakoon_alatia", "dralyura", "drampa", "drapion", "dratini", "dreaneuma", "drednaw", "dreepy", "drifblim", "drifloon", "drilbur", "drillorm", "drizzile", "dromijinn", "dromist", "droppel", "drowzee", "druddigon", "dubwool", "ducklett", "dudunsparce", "dugtrio", "dugtrio_alolan", "dunecargo", "dunsparce", "duosion", "duraludon", "durant", "dusclops", "duskarou", "dusknoir", "duskull", "dustox", "dwebble", "dwebbleregional", "ebery", "echolyte", "ectomancer", "eelektrik", "eelektross", "eevee", "eggward", "eiscue", "ekans", "ekansregional", "eldegoss", "electabuzz", "electivire", "electrike", "electrode", "electrode_hisuian", "elekid", "elgyem", "emboar", "emolga", "empoleon", "enamorus", "entei", "escavalier", "espathra", "espeon", "espurr", "eternatus", "excadrill", "exeggcute", "exeggutor", "exeggutor_alolan", "exploud", "falinks", "farfetchd", "farfetchd_galarian", "farigiraf", "fearow", "feebas", "fennekin", "feraligatr", "feralwish", "ferndred", "ferroseed", "ferrosleyer", "ferrothorn", "fezandipiti", "fidough", "fimbulven", "finizen", "finneon", "flaaffy", "flaaffyregional", "flabebe", "flamble", "flamigo", "flapple", "flareon", "fletchinder", "fletchling", "flittle", "floatzel", "floette", "floragato", "florges", "fluttermane", "flygon", "folly", "fomantis", "foongus", "forgipup", "forretress", "fossoil", "fraxure", "frigibax", "frillish", "frinx", "frivid", "froakie", "frogadier", "froslass", "frosmoth", "frostnatch", "froxic", "fuecoco", "fungalith", "furfrou", "furret", "gabite", "galecadet", "gallade", "gallornet", "galvantula", "galvantularegional", "garbodor", "garchomp", "gardevoir", "garganacl", "gargrave", "gastly", "gastrodon", "genesect", "gengar", "geodude", "geodude_alolan", "geoduderegional", "gholdendough", "gholdengo", "gible", "gigalith", "gildenose", "gimmibread", "gimmighoul", "gimmighoul_chest", "gimmighoul_roaming", "girafarig", "giragrub", "giratina", "glaceon", "gladiathorn", "glalie", "glameow", "glastrier", "glideon", "gligar", "glimmet", "glimmora", "gliscor", "gloom", "gloom_valencian", "gloomshade", "glownet", "gogoat", "golbat", "goldeen", "golduck", "golem", "golem_alolan", "golett", "golisopede", "golisopod", "golurk", "goodra", "goodra_hisuian", "goomy", "gorebyss", "gossifleur", "gothicub", "gothita", "gothitelle", "gothorita", "gougingfire", "gourgeist", "gourgrenade", "grafaiai", "granbull", "grapploct", "graveler", "graveler_alolan", "greattusk", "greavard", "greedent", "greninja", "griferis", "griffick", "grimer", "grimer_alolan", "grimmsnarl", "griphoon", "grookey", "grotle", "groudon", "grovyle", "growlithe", "grubbee", "grubbin", "grumpig", "gulpin", "gumshoos", "gurdurr", "guzzlord", "gyarados", "haghoula", "haidon", "hakamoo", "happiny", "hariyama", "hatenna", "hatterene", "hattertainer", "hattrem", "hattrix", "haunter", "hawlucha", "haxorus", "heatmor", "heatran", "heliolisk", "helioptile", "heracross", "herculaias", "herdier", "hippopotas", "hippowdon", "hissicobra", "hissilly", "hitmonchan", "hitmonlee", "hitmontop", "hollorn", "honchkrow", "honedge", "hooh", "hoopa", "hoothoot", "hoppip", "horsea", "houndoom", "houndour", "houndstone", "huntail", "hydrapple", "hydreigon", "hypno", "hyrealis", "icicranid", "igglybuff", "igniskewer", "illumise", "impidimp", "incineroar", "indeedee", "infernape", "infernito", "inkay", "inteleon", "ironbeak", "ironbell", "ironboulder", "ironbundle", "ironcocoon", "ironcore", "ironcrown", "irondrill", "irondrone", "ironflare", "ironflux", "irongene", "irongenerator", "irongenesis", "ironhands", "ironjugulis", "ironjustice", "ironleaves", "ironmoth", "ironsail", "ironstalker", "ironthorns", "irontreads", "irontroupe", "ironvaliant", "ironvictory", "ironvirus", "ironwarp", "ivysaur", "jangmoo", "jellicent", "jigglypuff", "jirachi", "jolteon", "joltik", "joltikregional", "jourenard", "jumpluff", "jynx", "kabuto", "kabutops", "kadabra", "kaibiparo", "kaidon", "kakuna", "kangaskhan", "karfoal", "karrablast", "kartana", "katmir", "kecleon", "keenai", "keldeo", "kilowattrel", "kingambit", "kingdra", "kingler", "kirlia", "klang", "klawf", "kleavor", "klefki", "klink", "klinklang", "klinkopter", "koffing", "komala", "kommoo", "koraidon", "krabby", "kricketot", "kricketune", "krillcracker", "krokorok", "krookodile", "kubfu", "kyogre", "kyurem", "lairon", "lampent", "landorus", "lanturn", "lapras", "larvesta", "larvitar", "latias", "latios", "latot", "leafeon", "leavanny", "lechonk", "ledian", "ledyba", "levilord", "lickilicky", "lickitung", "liepard", "lileep", "lilligant", "lilligant_hisuian", "lillipup", "limonzal", "linoone", "linoone_galarian", "linub", "litleo", "litrub", "litten", "litwick", "lokix", "lombre", "lopunny", "lopunnyregional", "lotad", "loudred", "lucario", "ludicolo", "ludikappa", "lugia", "lumineon", "lumintail", "lunala", "lunarveil", "lunatone", "lupayena", "lurantis", "luvdisc", "luxio", "luxray", "lycanroc", "mabosstiff", "machamp", "machoke", "machop", "magby", "magcargo", "magearna", "magikarp", "magmar", "magmortar", "magnemite", "magneton", "magnezone", "makuhita", "malamar", "mamolint", "mamoswine", "manaphy", "mandibuzz", "manectric", "mankey", "mantine", "mantyke", "maractus", "mareanie", "mareep", "mareepregional", "marill", "marowak", "marowak_alolan", "marshadow", "marshtomp", "maschiff", "masquerain", "maushold", "mawile", "medicham", "meditite", "meerogue", "meganium", "melmetal", "meloetta", "melofly", "meltan", "meowscarada", "meowstic", "meowth", "meowth_alolan", "meowth_galarian", "mesprit", "metagross", "metang", "metapod", "metapod_valencian", "mew", "mewtwo", "mielador", "mienfoo", "mienshao", "mightyena", "milcery", "milotic", "miltank", "mimejr", "mimikyu", "minccino", "minior", "minun", "miraidon", "misdreavus", "mismagius", "moistery", "moleneum", "moltres", "monferno", "morelull", "morgrem", "morpeko", "mortaraid", "mothim", "mr_mime_galarian", "mrmime", "mrrime", "mudbray", "mudkip", "mudsdale", "muk", "muk_alolan", "munchlax", "munkidori", "munna", "murkrow", "musharna", "mysticmirage", "nacli", "naclstack", "naganadel", "nagarel", "natu", "necrozma", "neonite", "nickit", "nidoking", "nidoqueen", "nidoranf", "nidoranm", "nidorina", "nidorino", "nihilego", "nincada", "ninetales", "ninetales_alolan", "ninjask", "nitragon", "noctowl", "noibat", "noivern", "norstar", "noseferatu", "nosepass", "nosepyre", "numel", "nuzleaf", "nymble", "obstagoon", "octillery", "oddish", "oddish_valencian", "ogerpon", "ohho", "oinkologne", "okidogi", "omanyte", "omastar", "onix", "oranguru", "orbeetle", "orbiclad", "oricorio", "orthworm", "oshawott", "ostrike", "overqwil", "pachirisu", "palafin", "palkia", "palobod", "palossand", "palossnow", "palpitoad", "pancham", "pangoro", "panpour", "pansage", "pansear", "papersol", "paras", "parasect", "passimian", "patrat", "pawmi", "pawmo", "pawmot", "pawniard", "pecharunt", "pelipper", "permafrox", "perrserker", "persian", "persian_alolan", "petilil", "petrolisk", "phanpy", "phantasmare", "phantump", "pheromosa", "phione", "pichu", "pidgeot", "pidgeotto", "pidgey", "pidove", "pignite", "pikachu", "pikipek", "pillosinge", "pillowisp", "pilolint", "piloswine", "pincurchin", "pineco", "pinsir", "piochio", "piplup", "pitchertun", "plusle", "podlin", "poipole", "pokokari", "politoed", "poliwag", "poliwhirl", "poliwrath", "polporos", "poltchageist", "polteageist", "ponyta", "ponyta_galarian", "poochyena", "popplio", "porygon", "porygon2", "porygonz", "porytron", "porytron2", "porytronz", "potdary", "prechooja", "primalshell", "primarina", "primeape", "prinplup", "prismeon_alatia", "probopass", "psyduck", "pumett", "pumpkaboo", "pumpkaboom", "pungudua", "pupitar", "purlady", "purrloin", "purugly", "pyroar", "pyrong", "pyukumuku", "quagsire", "quaquaval", "quaxly", "quaxwell", "quilava", "quilladin", "qwilfish", "qwilfish_hisuian", "raboot", "rabsca", "ragingbolt", "raichu", "raichu_alolan", "raikou", "ralts", "rampardos", "rapidash", "rapidash_galarian", "raticate", "raticate_alolan", "rattata", "rattata_alolan", "raygul", "rayquaza", "regice", "regiclay", "regidrago", "regieleki", "regigigas", "regirock", "regisculk", "registeel", "regitenebris", "reinfowl", "relicanth", "rellor", "remoraid", "reshiram", "reuniclus", "revaroom", "revavroom", "revendier", "rhydon", "rhyhorn", "rhyperior", "ribombee", "rillaboom", "rinstomp", "riolu", "rlx", "roaringmoon", "rockarin", "rockruff", "roggenrola", "rolycoly", "rondidi", "rookidee", "roselia", "roserade", "rotisikree", "rotom", "rowlet", "rufflet", "runerigus", "saberjaw", "sableye", "sajonin", "saladune", "salamence", "salandit", "salazzle", "samurott", "samurott_hisuian", "sandaconda", "sandile", "sandshrew", "sandslash", "sandygast", "sandyshocks", "sawk", "sawsbuck", "scatterbug", "sceptile", "scizor", "scolipede", "scorbunny", "scorchin", "scovillain", "scrafty", "scraggy", "screamtail", "scyther", "seadra", "seaking", "sealeo", "seedlin", "seedot", "seel", "seibat", "seismitoad", "sentret", "sephiredge", "serperior", "servine", "seviper", "sewaddle", "shade", "sharpedo", "shaymin", "shedinja", "shelgon", "shellder", "shellos", "shelmet", "shiboom", "shieldon", "shiftry", "shiinotic", "shinx", "shivershrub", "shroodle", "shroomish", "shuckle", "shuppet", "sigilyph", "silcoon", "silicobra", "silkloon", "silvally", "silwaddle", "simipour", "simisage", "simisear", "sinistcha", "sinistea", "sirfetchd", "sizzlipede", "skarmory", "skeledirge", "skiddo", "skiploom", "skitty", "skorupi", "skrelp", "skuntank", "skwovet", "slacho", "slaking", "slakoth", "sleeblaze", "sliggoo", "sliggoo_hisuian", "slimara", "slitherwing", "slowbro", "slowbro_galarian", "slowking", "slowking_galarian", "slowpoke", "slowpoke_galarian", "slugma", "slugrit", "slurpuff", "smeargle", "smoliv", "smoochum", "sneasel", "sneasel_hisuian", "sneasler", "snivy", "snoddle", "snom", "snorlax", "snorunt", "snover", "snowygast", "snubbull", "sobble", "solarica", "solgaleo", "solosis", "solrock", "sonayre", "sounoir", "spearow", "spectrier", "spewpa", "spheal", "spidops", "spinaga", "spinarak", "spinarift", "spinda", "spiritomb", "spiritube", "spoink", "sprigatito", "spritzee", "squawkabilly", "squirtle", "stagrion", "stakataka", "stantler", "staraptor", "staravia", "starly", "starmie", "starstellation", "staryu", "statchic", "steelix", "steenee", "stonjourner", "stouthound", "stoutland", "stufful", "stunfisk", "stunfisk_galarian", "stunky", "stygipede", "sudowoodo", "suicune", "sunflora", "sunkern", "surisham", "surskit", "swablu", "swadloon", "swalot", "swampert", "swanna", "swellow", "swinub", "swirlix", "swoobat", "sylveon", "sympheon", "tadbulb", "taillow", "talonflame", "tandemaus", "tangela", "tanglare", "tangrowth", "taplatter", "tapubulu", "tapufini", "tapukoko", "tapulele", "tarountula", "tatsugiri", "tauros", "teddiursa", "temga", "tempestfang", "tentacool", "tentacruel", "tepig", "tequibat", "terapagos", "terrakion", "thievul", "throh", "thunderingbrute", "thundurus", "thunkoo", "thwackey", "tikishock", "timaanowl", "timburr", "tinchoir", "ting-lu", "tinglu", "tinkatink", "tinkaton", "tinkatuff", "tirtouga", "toedscool", "toedscruel", "togedemaru", "togekiss", "togepi", "togetic", "tomledger", "torchflyer", "torchic", "torchlin", "torkoal", "tornadus", "torracat", "torraoka", "torterra", "totodile", "toucannon", "toxapex", "toxel", "toxicmelody", "toxicroak", "toxtricity", "tranquill", "trapinch", "treecko", "trevenant", "tridion", "tropius", "trubbish", "trumbeak", "tsareena", "tuligant", "turalyzer", "turtonator", "turtwig", "twinledger", "tympole", "tynamo", "typecast", "typenull", "typhlosion", "typhlosion_hisuian", "tyranitar", "tyrantrum", "tyrogue", "tyrunt", "umbrelligant", "umbreon", "unfezant", "ungimole", "unown", "uodkaibig", "ursaluna", "ursaring", "ursashock", "urshifu", "uxie", "vanillish", "vanillite", "vanilluxe", "vaporeon", "varoom", "vasaddle", "veluza", "velvettia", "venente", "venipede", "venomoth", "venonat", "venusaur", "vespiquen", "vibrava", "victini", "victreebel", "vigoroth", "vikavolt", "vileplume", "vileplume_valencian", "virizion", "vivillon", "volbeat", "volcanion", "volcarona", "volparin", "voltite", "voltorb", "voltorb_hisuian", "vullaby", "vulpix", "vulpix_alolan", "wailevi", "wailmer", "wailmerregional", "wailord", "wailordregional", "walkingwake", "walphin", "walrein", "wartortle", "watchog", "wattrel", "weavanny", "weavile", "weedle", "weepinbell", "weezing", "weezing_galarian", "whimsicott", "whirlipede", "whiscash", "whismur", "wickarus", "wigglytuff", "wiglett", "wildgene", "wimpod", "wingull", "wishiwashi", "wizledger", "wo-chien", "wobbuffet", "wochien", "woobat", "wooloo", "wooper", "wooper_paldean", "wormadam", "worvator", "wugtrio", "wurmple", "wynaut", "wyrdeer", "xatu", "xenoster", "xerfawn", "xerneas", "xurkitree", "yamask", "yamper", "yangram", "yanma", "yanmega", "yivpip", "yungoos", "yveltal", "zacian", "zamazenta", "zangoose", "zapdos", "zarude", "zebstrika", "zekrom", "zephyrouge", "zeraora", "zerpint", "zigzagoon", "zigzagoon_galarian", "zoroark", "zoroark_hisuian", "zorocean", "zorua", "zorua_hisuian", "zubat", "zweilous", "zygarde"];
