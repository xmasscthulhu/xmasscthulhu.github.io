//SECTION #: arrays of all kindred options and all class options

const availableKin = [
    "dragonborn",
    "drow",
    "duergar",
    "dwarf",
    "gargantua",
    "gnome",
    "goblin",
    "halfling",
    "half_elf",
    "half_orc",
    "hephaestan",
    "elf",
    "human",
    "mutoid",
    "mycelian",
    "phase_elf",
    "svirfneblin",
    "tiefling",
    "wood_elf"
]

const allClasses = [
    "acolyte",
    "acrobat",
    "assassin",
    "barbarian",
    "bard",
    "beast_master",
    "cleric",
    "druid",
    "fighter",
    "illusionist",
    "kineticist",
    "knight",
    "mage",
    "magic_user",
    "paladin",
    "ranger",
    "thief"
];

//SECTION #: kindred JSON Objects AND kin-specific functions
//and kin-specific name generators
const dragonborn = {
    "classes":[
        "assassin",
        "cleric",
        "fighter",
        "knight",
        "illusionist",
        "paladin",
        "magic_user",
        "thief"],
    "levelCap":[7,8,10,10,6,8,8,6],
    "abilities":"<b>Bloodline:</b> <p id='draconicBloodline'></p><br><b>Breath Weapon:</b><br><b>Usage:</b>Breath Weapon can be used once per day.<p id='breathWeapon'></p><br><b>Draconic Resistance:</b> Gain +2 bonus to saving throws against the damage type associated with breath weapon.<br><b>Dragon-Affecting Magic:</b> Affected by magic that specifically targets dragons.",
    "languages":"Alignment, Common, Dragon",
    "LD":1,
    "SD":1,
    "FT":1,
};

function dragonbornNamer(){
    let given = ['Garek',
        'Sarek',
        'Keevan',
        'Severn',
        'Vorok',
        'Soloch',
        'Rasug',
        'Zephyr',
        'Boreas',
        'Notus',
        'Craefik',
        'Skree',
        'Eurus',
        'Vutlurnus',
        'Cairn',
        'Lisk',
        'Talot',
        'Crypt',
        'Scorn',
        'Slag'];
    let pre = ['Gold',
        'Grim',
        'Fire',
        'Sting',
        'Whip',
        'Burn',
        'Storm',
        'Thunder',
        'Parch',
        'Horde',
        'Bitter',
        'Hate',
        'Wrath',
        'Curse',
        'Dream',
        'Night',
        'Grim',
        'Silver',
        'Bronze',
        'Fel'];
    let suf = ['wing',
        'scale',
        'claw',
        'wyrm',
        'flame',
        'breath',
        'fang',
        'drake',
        'wyvern',
        'viper',
        'hydra',
        'keeper',
        'tongue',
        'grasp',
        'heart',
        'death',
        'beast',
        'blaze',
        'wing',
        'howl'];
    document.getElementById("name").value =  `${given[dice(1,20)-1]} ${pre[dice(1,20)-1]}${suf[dice(1,20)-1]}`;
}

function bloodlineGen(){
    let bloodRoll = randBetween(10);
    if (bloodRoll==1||bloodRoll==2){
        document.getElementById("draconicBloodline").innerHTML = "Black scales."
        document.getElementById("breathWeapon").innerHTML = "<b>Acid Breath Attack</b> in a line 5 ft. wide, 30 ft. long."
    } else if (bloodRoll==3||bloodRoll==4){
        document.getElementById("draconicBloodline").innerHTML = "Blue scales."
        document.getElementById("breathWeapon").innerHTML = "<b>Lightning Breath Attack</b> in a line 5 ft. wide, 30 ft. long."
    } else if (bloodRoll==5||bloodRoll==6){
        document.getElementById("draconicBloodline").innerHTML = "Green scales."
        document.getElementById("breathWeapon").innerHTML = "<b>Poison Breath Attack</b> in a cloud 10 ft. wide, 15 ft. long."
    } else if (bloodRoll==7||bloodRoll==8){
        document.getElementById("draconicBloodline").innerHTML = "Red scales."
        document.getElementById("breathWeapon").innerHTML = "<b>Fire Breath Attack</b> in a cone 15 ft. wide at far end, 20 ft. long."
    } else if (bloodRoll==9||bloodRoll==10){
        document.getElementById("draconicBloodline").innerHTML = "White scales."
        document.getElementById("breathWeapon").innerHTML = "<b>Cold Breath Attack</b> in a cone 15 ft. wide at far end, 20 ft. long."
    }
};

const human = {
    "classes":[
        "acolyte",
        "acrobat",
        "assassin",
        "barbarian",
        "bard",
        "beast_master",
        "cleric",
        "druid",
        "fighter",
        "illusionist",
        "kineticist",
        "knight",
        "mage",
        "magic_user",
        "paladin",
        "ranger",
        "thief"
    ],
    "levelCap":[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
    "abilities":"",
    "languages":"Alignment, Common",
    "LD":1,
    "SD":1,
    "FT":1,
};

function humanNamer(){
    let given = ['Maple',
        'Scrounger',
        'Quid',
        'Vander',
        'Alto',
        'Maisie',
        'Ransom',
        'Geld',
        'Oakmont',
        'Polly',
        'Ziegfried',
        'Samuel',
        'Wigum',
        'Ponder',
        'Faber',
        'Laslow',
        'Tilda',
        'Calliope',
        'Agamemnon',
        'Tweed'];
    let surname = ['Beans',
        'Ballister',
        'Oddlump',
        'Simms',
        'Weems',
        'Beer',
        'Vine',
        'Money',
        'Refrain',
        'Gale',
        'Escher',
        'Vaunt',
        'Smote',
        'Stubbs',
        'Lint',
        'Thread',
        'Button',
        'Prawn',
        'Coats',
        'Wills'];
    document.getElementById("name").value =  `${given[dice(1,20)-1]} ${surname[dice(1,20)-1]}`;
}

const drow = {
    "classes":[
        "acrobat",
        "assassin",
        "cleric",
        "fighter",
        "knight",
        "magic_user",
        "ranger",
        "thief"
    ],
    "levelCap":[10,10,11,7,9,9,9,11],
    "abilities":"Immunity to Ghoul Paralysis<br> Infravision (60 ft)<br><b>Innate Magic:</b> At 2nd level, can cast <i>darkness</i> once per day. At level 4, <i>detect magic</i> once per day.<br> <b>Light Sensitivity:</b> When in bright light, suffer -2 to attack rolls and -1 to AC.",
    "languages":"Alignment, Common, Deepcommon, Elvish, Gnomish",
    "SD":2,
    "LD":2,
    "FT":1,
};

function drowNamer(){
    let syl1 = ["Bak",
        "Tra",
        "Bot",
        "Car",
        "Bi",
        "Bok",
        "An",
        "Bar",
        "Pith",
        "Su",
        "Dis",
        "Ture",
        "Na",
        "Dri",
        "Sn",
        "Sel",
        "Ver",
        "Nie",
        "No",
        "Ya"];
    let syl2 = ["nar",
        "mun",
        "ul",
        "nis",
        "tru",
        "mor",
        "til",
        "ko",
        "ei",
        "suj",
        "cal",
        "lar",
        "zz",
        "fi",
        "kk",
        "ra",
        "no",
        "ts",
        "tw",
        "da",];
    let syl3 = ["fen",
        "far",
        "rod",
        "trife",
        "m",
        "dun",
        "ix",
        "las",
        "niw",
        "tsirhc",
        "vi",
        "ri",
        "rat",
        "t",
        "id",
        "ch",
        "n",
        "nie",
        "en",
        "raf"];
    document.getElementById("name").value = `${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}${syl3[dice(1,20)-1]}`;
}

const duergar = {
    "classes":[
        "assassin",
        "cleric",
        "fighter",
        "thief"
    ],
    "levelCap":[9,8,10,9],
    "abilities":"<b>Combat:</b> Can only use small or normal-sized weapons. Cannot use longbows or two-handed swords.<br><b>Infravision:</b> 60 ft.<br><b>Light Sensitivity:</b> When in bright light, suffer -2 to attack rolls and -1 to AC.<br><b>Resilience:</b> bonus to Paralysis, Poison, Spells, Magic Wands, Rods, and Staves, depending on CON score (<b>7-10:</b>+2,<b>11-14:</b>+3,<b>15-17:</b>+4,<b>18:</b>+5<br><b>Stealth</b>3-in-6 chance of moving silently <i>underground</i>.",
    "languages":"Alignment, Common, Deepcommon, Dwarvish, Gnomish, Goblin, Kobold",
    "CT":2,
    "FT":2,
    "LD":2,
    "SD":1,
};

function duergarNamer(){
    let male = ['Souse',
        'Sop',
        'Muggy',
        'Soak',
        'Welter',
        'Dowse',
        'Moist',
        'Swelter',
        'Dank',
        'Muck',
        'Slog',
        'Steep',
        'Torrid',
        'Mildew',
        'Murk',
        'Sod',
        'Sap',
        'Drench',
        'Sluice',
        'Dunk'];
    let female = ['Wilt',
        'Wither',
        'Fade',
        'Wizen',
        'Wane',
        'Shrivel',
        'Blanch',
        'Blench',
        'Sag',
        'Lag',
        'Droop',
        'Lax',
        'Fault',
        'Fizzle',
        'Dud',
        'Flop',
        'Lack',
        'Drouth',
        'Dearth',
        'Meagre'];
    let either = male.concat(female);
    let clan = ['Weak-in-the-Leg',
        'Judge-by-Cover',
        'Grain-of-Salt',
        'Leapt-without-Look',
        'Shoulderchip',
        'Chip-off-Block',
        'Fry-Bigger-Fish',
        'Want-some-More',
        'Trollfeeder',
        'Take-from-Within',
        'Missed-the-Boat',
        'Two-in-the-Bush',
        'Insult-is-Injury',
        'Skin-of-the-Teeth',
        'Count-before-Hatch',
        'Missed-by-Mile',
        'Bark-up-Tree',
        'Spit-on-Fish',
        'Spit-in-Wind',
        'One-Egg-Basket'];
    document.getElementById("name").value = `${either[dice(1,40)-1]} ${clan[dice(1,20)-1]}`;
}

const dwarf = {
    "classes":[
        "assassin",
        "cleric",
        "fighter",
        "thief"
    ],
    "levelCap":[9,8,10,9],
    "abilities":"<b>Combat:</b> Can only use small or normal-sized weapons. Cannot use longbows or two-handed swords.<br><b>Infravision</b> 60ft.<br><b>Resilience:</b> bonus to Paralysis, Poison, Spells, Magic Wands, Rods, and Staves, depending on CON score (<b>7-10:</b>+2,<b>11-14:</b>+3,<b>15-17:</b>+4,<b>18:</b>+5",
    "languages":"Alignment, Common, Dwarfish, Gnomish, Goblin, Kobold",
    "CT":2,
    "FT":2,
    "LD":2,
    "SD":1
};

function dwarfNamer(){
    let male = ['Grum',
        'Thrain',
        'Flint',
        'Chert',
        'Gypsum',
        'Clay',
        'Loam',
        'Onyx',
        'Chalk',
        'Pick',
        'Gabbro',
        'Mandril',
        'Tuff',
        'Wedge',
        'Wick',
        'Jasper',
        'Coal',
        'Grist',
        'Hornfels',
        'Schist'];
    let female = ['Shale',
        'Garnet',
        'Peridot',
        'Pumice',
        'Slate',
        'Skarn',
        'Salt',
        'Agate',
        'Slate',
        'Anite',
        'Citrine',
        'Beryl',
        'Amethyst',
        'Opal',
        'Bismuth',
        'Pearl',
        'Emerald',
        'Jade',
        'Lapis',
        'Lazuli'];
    let either = male.concat(female);
    let clan = ['Meadquaffer',
        'Rich-in-the-Bank',
       'Nail-on-the-Head',
        'Cup-floweth-Over',
        'Strong-of-Breath',
        'Good-so-Far',
        'Want-for-Nothing',
        'Against-the-Odds',
        'Silver-is-Good',
        'Gold-is-Great',
        'Platinum-is-Best',
        'Wealth-is-Health',
        'Bite-the-Bolt',
        'Extra-mile',
        'Calm-before-Storm',
        'Gain-from-Pain',
        'Arm-and-a-Leg',
        'Cut-the-Rug',
        'Better-than-Never',
        'Long-story-Short'];
    document.getElementById("name").value =  `${either[dice(1,40)-1]} ${clan[dice(1,20)-1]}`;
}

const elf = {
    "classes":[
        "acrobat",
        "assassin",
        "cleric",
        "druid",
        "fighter",
        "knight",
        "magic_user",
        "ranger",
        "thief"
    ],
    "levelCap":[10,10,7,8,7,11,11,11,10],
    "abilities":"<b>Immunity to Ghoul Paralysis</b><br><b>Infravision:</b> (60 ft).",
    "SD":2,
    "LD":2,
    "FT":1
}

function elfNamer(){
    let syl1 = ["Ae",
        "Aer",
        "Ag",
        "Ar",
        "An",
        "As",
        "Bar",
        "Be",
        "Ber",
        "Bor",
        "Bro",
        "Ce",
        "Cu",
        "Da",
        "Dae",
        "De",
        "Ech",
        "Err",
        "Fae",
        "Gil",];
    let syl2 = ["g",
        "an",
        "ren",
        "thel",
        "ar",
        "ag",
        "nun",
        "loth",
        "veg",
        "ved",
        "thal",
        "dag",
        "fals",
        "elth",
        "eth",
        "am",
        "leb",
        "leph",
        "ir",
        "ru"];
    let syl3 = ["los",
        "nor",
        "dir",
        "dil",
        "nel",
        "waen",
        "ui",
        "hel",
        "il",
        "en",
        "oth",
        "ur",
        "urth",
        "orn",
        "lach",
        "ost",
        "arn",
        "idan",
        "ion",
        "fin"];
    document.getElementById("name").value = `${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}${syl3[dice(1,20)-1]}`;
}

const gargantua = {
    "classes":[
        "assassin",
        "barbarian",
        "cleric",
        "fighter",
        "thief"
    ],
    "levelCap":[6,8,8,10,6],
    "abilities":"<b>Combat:</b> Armour must be tailored to fit. Two-handed melee weapons may be wielded with one hand.<br><b>Open Doors:</b> Treated as though they were the next highest STR category for determining whether they can open a door.<br><b>Resilience:</b> bonus to Paralysis, Poison, Spells, Magic Wands, Rods, and Staves, depending on CON score (<b>7-10:</b>+2,<b>11-14:</b>+3,<b>15-17:</b>+4,<b>18:</b>+5<br><b>Rock Throwing:</b> d6 damage.",
    "languages":"Alignment, Common",
    "LD":1,
    "SD":1,
    "FT":1,  
};

function gargantuaNamer(){
    let syl1 = ['Fe',
        'Fi',
        'Fo',
        'Fu',
        'Le',
        'Li',
        'Lo',
        'Lu',
        'Be',
        'Bi',
        'Bo',
        'Bu',
        'De',
        'Di',
        'Do',
        'Du',
        'Me',
        'Mi',
        'Mo',
        'Mu'];
    let syl2 = ['ge',
        'gi',
        'go',
        'gu',
        'ne',
        'ni',
        'no',
        'nu',
        'he',
        'hi',
        'ho',
        'hu',
        're',
        'ri',
        'ro',
        'ru',
        'se',
        'si',
        'so',
        'su'];
    let syl3 = ['ef',
        'if',
        'of',
        'uf',
        'el',
        'il',
        'ol',
        'ul',
        'eb',
        'ib',
        'ob',
        'ub',
        'ed',
        'id',
        'od',
        'ud',
        'em',
        'im',
        'om',
        'um'];
    document.getElementById("name").value = `${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}${syl3[dice(1,20)-1]}`;
}

const gnome = {
    "classes":[
        "assassin",
        "cleric",
        "fighter",
        "illusionist",
        "thief"
    ],
    "levelCap":[6,7,6,7,8],
    "abilities":"<b>Combat:</b>Armour must be tailored for gnomes. Cannot use large weapons (long bows, two-handed swords, etc.)<br><b>Defensive Bonus: </b>+2 to AC when attacked by large opponents.<br><b>Infravision:</b> 90 ft.<br><b>Resilience:</b> bonus to Paralysis, Poison, Spells, Magic Wands, Rods, and Staves, depending on CON score (<b>7-10:</b>+2,<b>11-14:</b>+3,<b>15-17:</b>+4,<b>18:</b>+5<br><b>Speak with Burrowing Mammals</b>",
    "languages":"Alignment, Common, Dwarvish, Gnomish, Kobold, the secret language of burrowing mammals",
    "LD":2,
    "SD":1,
    "FT":1,
    "CT":2,
};

function gnomeNamer(){
    let syl1 = ['Ae',
        'Aer',
        'Ag',
        'Ar',
        'An',
        'As',
        'Bar',
        'Be',
        'Ber',
        'Bor',
        'Bro',
        'Ce',
        'Cu',
        'Da',
        'Dae',
        'De',
        'Ech',
        'Err',
        'Fae',
        'Gil'];
    let syl2 = ['los',
        'nor',
        'dir',
        'dil',
        'nel',
        'waen',
        'ui',
        'hel',
        'il',
        'en',
        'oth',
        'ur',
        'urth',
        'orn',
        'lach',
        'ost',
        'arn',
        'idan',
        'ion',
        'fin'];
    let syl3 = ['a',
        'a\'e',
        'a\'i',
        'a\'o',
        'a\'u',
        'i',
        'i\'a',
        'i\'e',
        'i\'o',
        'i\'u',
        'o',
        'o\'a',
        'o\'e',
        'o\'i',
        'o\'u',
        'u',
        'u\'a',
        'u\'e',
        'u\'i',
        'u\'o'];
    document.getElementById("name").value =  `${syl3[dice(1,20)-1]} ${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}`;
}

const goblin = {
    "classes":[
        "acrobat",
        "assassin",
        "cleric",
        "fighter",
        "magic_user",
        "thief"
    ],
    "levelCap":[7,8,6,8,6,8],
    "abilities":"<b>Combat:</b>Armour must be tailored for gnomes. Cannot use large weapons (long bows, two-handed swords, etc.)<br><b>Defensive Bonus:</b> +2 to AC when attacked by large opponents.<br><b>Infravision</b> 60 ft.<br><b>Resilience:</b> bonus to Paralysis, Poison, Spells, Magic Wands, Rods, and Staves, depending on CON score (<b>7-10:</b>+2,<b>11-14:</b>+3,<b>15-17:</b>+4,<b>18:</b>+5<br><b>Wolf Affinity:</b> Can speak to wolves and gain +1 to reaction when encountering them. On a 9+, a wolf will consent to being ridden as a mount by a goblin.",
    "langauges":"Alignement, Common, Goblin, the language of wolves",
    "LD":1,
    "SD":1,
    "FT":1,
    "CT":2
};

function goblinNamer(){
    let pre = ['Yak',
        'Goat',
        'Man',
        'Orc',
        'Head',
        'Gut',
        'Knee',
        'Elbow',
        'Hip',
        'Nose',
        'Elf',
        'Dwarf',
        'Gnome',
        'Dragon',
        'Eye',
        'Ear',
        'Cow',
        'Horse',
        'Dog',
        'Cat'];
    let suf = ['slapper',
        'beater',
        'kicker',
        'smacker',
        'dragger',
        'monger',
        'thief',
        'stabber',
        'ripper',
        'shanker',
        'biter',
        'baiter',
        'cooker',
        'eater',
        'slaker',
        'slurper',
        'puker',
        'splitter',
        'snatcher',
        'scheister'];
    document.getElementById("name").value =  `${pre[dice(1,20)-1]}${suf[dice(1,20)-1]}`;
}

const half_elf = {
    "classes":[
        "acrobat",
        "assassin",
        "bard",
        "cleric",
        "druid",
        "fighter",
        "knight",
        "magic_user",
        "paladin",
        "ranger",
        "thief"
    ],
    "levelCap":[12,11,12,5,12,8,12,8,12,8,12],
    "abilities":"<b>Infravision:</b> 60 ft.",
    "languages":"Alignement, Common, Elvish",
    "LD":1,
    "SD":2,
    "FT":1,
};

function half_elfNamer(){
    let syl1 = ["Ae",
        "Aer",
        "Ag",
        "Ar",
        "An",
        "As",
        "Bar",
        "Be",
        "Ber",
        "Bor",
        "Bro",
        "Ce",
        "Cu",
        "Da",
        "Dae",
        "De",
        "Ech",
        "Err",
        "Fae",
        "Gil",];
    let syl2 = ["g",
        "an",
        "ren",
        "thel",
        "ar",
        "ag",
        "nun",
        "loth",
        "veg",
        "ved",
        "thal",
        "dag",
        "fals",
        "elth",
        "eth",
        "am",
        "leb",
        "leph",
        "ir",
        "ru"];
    let syl3 = ["los",
        "nor",
        "dir",
        "dil",
        "nel",
        "waen",
        "ui",
        "hel",
        "il",
        "en",
        "oth",
        "ur",
        "urth",
        "orn",
        "lach",
        "ost",
        "arn",
        "idan",
        "ion",
        "fin"];
    let humanSurname = ["Smith",
        "Farrier",
        "Cooper",
        "Fletcher",
        "Carpenter",
        "Archer",
        "Miller",
        "Mason",
        "Potter",
        "Barber",
        "Cartwright",
        "Parker",
        "Piper",
        "Shepherd",
        "Carter",
        "Archer",
        "Fisher",
        "Cook",
        "Clark",
        "Sawyer",];
    document.getElementById("name").value = `${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}${syl3[dice(1,20)-1]} ${humanSurname[dice(1,20)-1]}`;
}

const halfling = {
    "classes":[
        "druid",
        "fighter",
        "thief"
    ],
    "levelCap":[6,6,8],
    "abilities":"<b>Combat:</b>Armour must be tailored for gnomes. Cannot use large weapons (long bows, two-handed swords, etc.)<br><b>Defensive Bonus: </b>+2 to AC when attacked by large opponents.<br><b>Missile attack bonus:</b> +1 to ranged attack rolls.<br><b>Resilience:</b> bonus to Paralysis, Poison, Spells, Magic Wands, Rods, and Staves, depending on CON score (<b>7-10:</b>+2,<b>11-14:</b>+3,<b>15-17:</b>+4,<b>18:</b>+5<br>",
    "languages":"Alignment, Common, Halfling",
    "LD":2,
    "SD":1,
    "FT":1,
};

function halflingNamer() {
    let syl1 = ['Ne',
        'Wa',
        'Pi',
        'Me',
        'Ro',
        'Mo',
        'Mi',
        'Da',
        'Odo',
        'Fi',
        'Gi',
        'Ga',
        'Go',
        'Gro',
        'Alba',
        'Edda',
        'Na',
        'Ni',
        'No',
        'Ha'];
    let syl2 = ['lbo',
        'do',
        'ppi',
        'ria',
        'sie',
        'rio',
        'rlo',
        'ldo',
        'lda',
        'dli',
        'fro',
        'bi',
        'da',
        'do',
        'mae',
        'nni',
        'bbi',
        'bbo',
        'ggo',
        'ggi'];
    let pre = ['High',
        'Low',
        'Glad',
        'Cheer',
        'Fat',
        'Slumber',
        'Free',
        'Wiles',
        'Easy',
        'Rhyme',
        'Murmur',
        'Tumble',
        'Honey',
        'Sweet',
        'Top',
        'Fond',
        'Merry',
        'Warm',
        'Wide',
        'Shady'];
    let suf = ['hill',
        'dale',
        'end',
        'water',
        'field',
        'down',
        'foot',
        'wood',
        'rest',
        'brush',
        'moor',
        'leaf',
        'weald',
        'wold',
        'heath',
        'fen',
        'belt',
        'barn',
        'mill',
        'road'];
    document.getElementById("name").value = `${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]} ${pre[dice(1,20)-1]}${suf[dice(1,20)-1]}`;


}

const half_orc = {
    "classes":[
        "acrobat",
        "assassin",
        "cleric",
        "fighter",
        "thief"
    ],
    "levelCap":[8,8,4,10,8],
    "abilities":"<b>Infravision:</b> 60 ft.",
    "languages":"Alignment, Common, Orcish",
    "LD":1,
    "SD":1,
    "FT":1,
};

function orcNamer(){
    let epithets = ['brute',
        'rogue',
        'bliter',
        'odd',
        'worthless',
        'rancid',
        'vagabond',
        'scum',
        'bandit',
        'scorned',
        'diseased',
        'rake',
        'freak',
        'scalawag',
        'foul',
        'ugly',
        'disreputable',
        'outsider',
        'unwanted',
        'scoundrel'];
    let syl1 = ['Ang',
        'Ao',
        'Ar',
        'Ba',
        'Be',
        'Blo',
        'Bla',
        'Bra',
        'Ca',
        'Ce',
        'Co',
        'Cu',
        'Da',
        'De',
        'Do',
        'Fa',
        'Fe',
        'Fo',
        'Ga',
        'Ge'];
    let syl2 = ['har',
        'gh',
        'd',
        'ian',
        'v',
        'l',
        'rh',
        'len',
        'nd',
        'deued',
        'deuw',
        'nw',
        'rn',
        'dl',
        'lim',
        'rg',
        'ch',
        'fan',
        'ron',
        'van'];
    let syl3 = ['ad',
        'odh',
        'hod',
        'awn',
        'od',
        'yr',
        'os',
        'us',
        'or',
        'ig',
        'd',
        'at',
        'edd',
        'en',
        'all',
        'och',
        'an',
        'on',
        'ar',
        'em'];

    document.getElementById("name").value =  `${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}${syl3[dice(1,20)-1]} the ${epithets[dice(1,20)-1]}`;
}

const hephaestan = {
    "classes":[
        "acrobat",
        "assassin",
        "cleric",
        "fighter",
        "illusionist",
        "magic_user",
        "thief"
    ],
    "levelCap":[10,10,7,7,11,11,10],
    "abilities":"<b>Neuropressure:</b> after a successful melee attack roll against an unaware opponent (up to 4+1 HD), may appy pressure to nerves at the back of a creatures neck, rendering them unconcious for 4d4 rounds. Usable a number or times equal to level.",
    "languages":"Alignment, Common, Hephaestan",
    "LD":2,
    "SD":1,
    "FT":1,
}

function hephaestanNamer(){
    let syl1 = ['Sp',
        'Sar',
        'T\'P',
        'T\'Sh',
        'T\'V',
        'T\'Pr',
        'Ch',
        'Del',
        'P\'T',
        'Pol',
        'Tav',
        'Tol',
        'Tos',
        'Val',
        'V\'K',
        'V\'L',
        'T\'P',
        'Nir',
        'Syr',
        'Maj'];
    let syl2 = ['oc',
        'ek',
        'ol',
        'iv',
        'ok',
        'in',
        'ar',
        'ath',
        'ik',
        'et',
        'ak',
        'el',
        'is',
        'inn',
        'yll',
        'al',
        'ot',
        'os',
        'an',
        'eel'];
    document.getElementById("name").value = `${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}`;
}

const mutoid = {
    "classes":[
        "assassin",
        "cleric",
        "fighter",
        "illusionist",
        "thief"
    ],
    "levelCap":[5,6,7,6,9],
    "abilities":"<b>Mutations</b><br><p id='mutations'><p>",
    "mutations":[
        "<b>Beast ears:</b> 3-in-6 chance to Hear Noises",
        "<b>Beast eyes: Infravision</b> 60 ft.",
        "<b>Clawed hand:</b> unarmed attack for 1d6 damage.",
        "<b>Gills:</b> Breathe underwater",
        "<b>Pincer:</b> Unarmed attack for 1d3 damage. The pincer locks onto the victim, causing 1d3 automatic damage per round (Save vs. Paralysis to escape)",
        "<b>Scales:</b> +2 to AC",
        "<b>Spring legs:</b> Jump 30 ft. forward and gain +1 to attack. If wielding an impaling weapon (e.g., spear), this counts as a charge and inflicts double damage on a successfuly hit.",
        "<b>Sticky tongue:</b> Grab an object 15 ft. away and pull it to the mouth. Can be used as melee attack: bite inflicts 1d3 damage."
    ],
    "languages":"Alignment, Common",
    "LD":1,
    "SD":1,
    "FT":1,
};

function mutoidNamer(){
    let pre = ['Snolly',
        'Pill',
        'Lick',
        'Ninny',
        'Mump',
        'Milk',
        'Hobble',
        'Petti',
        'Moon',
        'Saltim',
        'Smell',
        'Twee',
        'Pusill',
        'Dag',
        'Dead',
        'Flake',
        'Fruit',
        'Lard',
        'Loud',
        'Meat'];
    let suf = ['goster',
        'ock',
        'spittle',
        'hammer',
        'simus',
        'sop',
        'dehoy',
        'fogger',
        'calf',
        'banco',
        'feast',
        'craven',
        'tuse',
        'wood',
        'beat',
        'head',
        'cake',
        'mouth',
        'louse',
        'kook'];
    document.getElementById("name").value =  `${pre[dice(1,20)-1]} ${suf[dice(1,20)-1]}`;
}

function mutationGen(){
    let mutRoll = randBetween(8)-1;
    document.getElementById("mutations").innerHTML = mutoid.mutations[mutRoll];
}

const mycelian = {
    "classes":[
        "assassin",
        "cleric",
        "druid",
        "fighter",
        "illusionist",
        "thief"
    ],
    "levelCap":[4,5,5,6,4,4],
    "abilities":"<b>Fungal Spores:</b> From 3rd level, may emit a spray of spores once per day, targeting a living person (of up to 4+1 HD) within 20 ft. The target must Save vs. Poison or become completely passive for 1 round per level of the mycelian.<br><b>Infravision:</b> 60 ft.<br><b>Light sensitivity:</b> -2 penalty to attarck rolls and -1 penalty to AC.<br><b>Rest and Sustenance:</b> Do not require food or sleep. They do require 8 hours each day spent in contact with moist earth. <b>Missing the rejuvenative period:</b> lose 1 HP per day until able to spend 8 hours in contact with moist earth.<br><b>Telepathic Communication:</b> Do not speak. Communicate entirely telepathically with any sentient creature within 120 ft. that can be percieved. Able to converse in any language the mycelian knows.",
    "languages":"Alignment, Common, Deepcommon",
    "LD":1,
    "SD":1,
    "FT":1,
};

function mycelianNamer(){
    let syl1 = ['gleam',
        'drunk',
        'tart',
        'tearful',
        'rain',
        'grub',
        'mad',
        'grey',
        'little',
        'cut',
        'slow',
        'short',
        'milk',
        'billow',
        'sass',
        'fugue',
        'rich',
        'bitter',
        'thin',
        'trite'];
    let syl2 = ['morel',
        'button',
        'fulva',
        'cep',
        'cap',
        'ring',
        'lete',
        'ssette',
        'tooth',
        'miter',
        'let',
        'trich',
        'horn',
        'stem',
        'funnel',
        'wit',
        'cort',
        'relle',
        'gill',
        'wax'];
    document.getElementById("name").value =  `${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}`
}

const phase_elf = {
    "classes":[
        "acrobat",
        "assassin",
        "fighter",
        "illusionist",
        "knight",
        "magic_user",
        "ranger",
        "thief"
    ],
    "levelCap":[10,10,7,11,10,11,10,10],
    "abilities":"<b>Immunity to Ghouse Paralysis</b><br><b>Infravision</b> 60 ft.<br><hr class='solid'><b> Dual Persona</b> When creating a character, the player <i>must choose two classes</i>, one per <i>phase</i>.<br><b>Phasing:</b> Each morning (only once per day), the PC may choose to swtich their other phase.<br><b>THAC0, saves, and Class Abilities:</b> Use the values for current phase's class.<br><b>Hit Points:</b> roll the HD for both classes, divide result by 2. Fractions are tracked and may add up to a whole number later on.<br><b>XP:</b> Track XP seperately for each phase.<br><b>Eye colour:</b> In one phase, eyes are pure white. In the other, they are pure black.<br><b>Personalities and Alignment</b> May be different between phases.",
    //"abilityModifiers":"-1 CON,+1 DEX",
    //"requirements":"Minimum INT 9",
    "languages":"Alignment, Common, Elvish, Doppelganger, Dragon, Pixie",
    "LD":2,
    "SD":2,
    "FT":1,
};

function phaseElfNamer(){
    let syl1 = ["ae",
        "aer",
        "ag",
        "ar",
        "an",
        "as",
        "bar",
        "be",
        "ber",
        "bor",
        "bro",
        "ce",
        "cu",
        "da",
        "dae",
        "de",
        "ech",
        "err",
        "fae",
        "gil",];
    let syl2 = ["G",
        "an",
        "ren",
        "thel",
        "ar",
        "ag",
        "nun",
        "loth",
        "veg",
        "ved",
        "thal",
        "dag",
        "fals",
        "elth",
        "eth",
        "em",
        "leb",
        "leph",
        "ir",
        "ru"];
    let syl3 = ["los",
        "nor",
        "dir",
        "dil",
        "nel",
        "waen",
        "ui",
        "hel",
        "il",
        "en",
        "oth",
        "ur",
        "urth",
        "orn",
        "lach",
        "ost",
        "arn",
        "idan",
        "ion",
        "fin"];
    let name = `${syl2[dice(1,20)-1]}${syl3[dice(1,20)-1]}${syl1[dice(1,20)-1]}`;
    let phaseName = name.split('').reverse().join('');
    document.getElementById("name").value = `${name} || ${phaseName}`;
}

const svirfneblin = {
    "classes":[
        "assassin",
        "cleric",
        "fighter",
        "illusionist",
        "thief"
    ],
    "levelCap":[8,7,6,7,8],
    "abilities":"<b>Blend into Stone:</b> 2-in-6 in well-lit conditions, 4-in-6 chance in gloomy ones.<br><b>Combat:</b>Armour must be tailored for gnomes. Cannot use large weapons (long bows, two-handed swords, etc.)<br><b>Defensive Bonus</b>+2 to AC when attacked by large opponents.<br><br><b>Infravision</b> 90 ft.<br><b>Light Sensitivity:</b> When in bright light, suffer -2 to attack rolls and -1 to AC.<br><b>Illusion Resistance:</b> +2 to all saving throws vs. Illusions<br><b>Speak with Earth Elementals</b>",
    "languages":"Alignment, Common, Deepcommon, Gnomish, Dwarvish, Kobold, the language of Earth Elementals",
    "LD":2,
    "SD":1,
    "FT":1,
    "CT":2,
};

function svirfneblinNamer(){
    let syl1 = ["Bak",
        "Tra",
        "Bot",
        "Car",
        "Bi",
        "Bok",
        "An",
        "Bar",
        "Pith",
        "Su",
        "Dis",
        "Ture",
        "Na",
        "Dri",
        "Sn",
        "Sel",
        "Ver",
        "Nie",
        "No",
        "Ya"];
    let syl2 = ["fen",
        "far",
        "rod",
        "trife",
        "m",
        "dun",
        "ix",
        "las",
        "niw",
        "tsirhc",
        "vi",
        "ri",
        "rat",
        "t",
        "id",
        "ch",
        "n",
        "nie",
        "en",
        "raf"];
    let syl3 = ['a',
        'a\'e',
        'a\'i',
        'a\'o',
        'a\'u',
        'i',
        'i\'a',
        'i\'e',
        'i\'o',
        'i\'u',
        'o',
        'o\'a',
        'o\'e',
        'o\'i',
        'o\'u',
        'u',
        'u\'a',
        'u\'e',
        'u\'i',
        'u\'o'];
    document.getElementById("name").value =  `${syl3[dice(1,20)-1]} ${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}`;
}

const tiefling = {
    "classes":[
        "acrobat",
        "assassin",
        "bard",
        "fighter",
        "illusionist",
        "magic_user",
        "ranger",
        "thief"
    ],
    "levelCap":[10,10,6,8,10,10,6,10],
    "abilities":"<p id='fiendishGifts'></p><b>Combat</b> Can use leather and chainmail, shields, and all weapons.<br><b>Holy water vulnerability</b><br><b>Infravision</b> 60 ft.",
    "appearance":[
        "3 or 6 digits on each hand.",
        "Black or red eyes, no whites/pupils.",
        "Fangs or needle-like teeth.",
        "Furry or leathered skin.",
        "Forked tongue.",
        "Goat-like hooves.",
        "Long, thin tail.",
        "Scaly or ridged skin.",
        "Skinted red, green, or blue.",
        "Small horns on forehead/temples."
    ],
    "gifts":[
        "Cast <i>darkness</i> once per day.",
        "Cast <i>detect invisible</i> oncer per day.",
        "Cast <i>detect magic</i> once per day.",
        "Cast <i>magic missile</i> once per day.",
        "Cast <i>mirror image</i> once per day.",
        "Cast <i>ventriloquism</i> once per day.",
        "Cold resistance (half damage).",
        "Fire resistance (half damage).",
        "+2 bonus to Save vs. Paralysis.",
        "+2 bonus to Save vs. Poison."
    ],
    "languages":"Alignement, Common",
    "LD":1,
    "SD":1,
    "FT":1,
};

function genGifts() {
    let appRoll = tiefling.appearance[randBetween(10)-1];
    let giftRoll = tiefling.gifts[randBetween(10)-1];
    document.getElementById("fiendishGifts").innerHTML = `<b>Fiendish Appearance</b> ${appRoll}<br><b>Fiendish Gifts:</b> ${giftRoll}`;
};

function tieflingNamer(){
    let syl1 = ['A',
        'Ba',
        'Be',
        'Be\'e',
        'Cai',
        'Ca',
        'Che',
        'Da',
        'De',
        'E',
        'I',
        'O',
        'U',
        'Ga\'a',
        'Ha',
        'Incu',
        'Li',
        'Lu',
        'Ma',
        'Mu'];
    let syl2 = ['m',
        'bad',
        'brax',
        'z',
        'byz',
        'chl',
        'shm',
        'g',
        'gar',
        'bor',
        'loc',
        'rob',
        'les',
        'hab',
        'met',
        'bn',
        'l',
        'tan',
        'shed',
        'sut'];
    let syl3 = ['on',
        'as',
        'ou',
        'a',
        'ept',
        'uzu',
        'or',
        'er',
        'el',
        'ai',
        'eus',
        'ak',
        'im',
        'osh',
        'um',
        'os',
        'ap',
        'in',
        'ori',
        'us'];
    document.getElementById("name").value = `${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}${syl3[dice(1,20)-1]}`;
}

const wood_elf = {
    "classes":[
        "acrobat",
        "assassin",
        "druid",
        "fighter",
        "magic_user",
        "ranger",
        "thief"
    ],
    "levelCap":[10,8,10,7,7,11,10],
    "abilities":"<b>Immunity to Ghoul Paralysis</b><br><b>Infravision:</b> 60 ft.<br><b>Missile Attack Bonus</b> +1 to ranged attacks.",
    //"abilityModifiers": "-1 CHA, +1 WIS",
    "languages":"Alignment, Common, Elvish, Bugbear, Dryad, Gnoll",
    "LD":2,
    "SD":2,
    "FT":1,
};

function woodElfNamer(){
    let syl1 = ["Ae",
        "aer",
        "ag",
        "ar",
        "an",
        "as",
        "bar",
        "be",
        "ber",
        "bor",
        "bro",
        "ce",
        "cu",
        "da",
        "dae",
        "de",
        "ech",
        "err",
        "fae",
        "gil",];
    let syl2 = ["g",
        "an",
        "ren",
        "thel",
        "ar",
        "ag",
        "nun",
        "loth",
        "veg",
        "ved",
        "thal",
        "dag",
        "fals",
        "elth",
        "eth",
        "am",
        "leb",
        "leph",
        "ir",
        "ru"];
    let syl3 = ["los",
        "Nor",
        "Dir",
        "Dil",
        "Nel",
        "Waen",
        "Ui",
        "Hel",
        "Il",
        "En",
        "Oth",
        "Ur",
        "Urth",
        "Orn",
        "Lach",
        "Ost",
        "Arn",
        "Idan",
        "Ion",
        "Fin"];
    document.getElementById("name").value = `${syl3[dice(1,20)-1]}${syl1[dice(1,20)-1]}${syl2[dice(1,20)-1]}`;
}

//SECTION #: OSE Quick Equipment Table Arrays
let weaponTable = [
    "Batle Axe (1d8) Qualities: Melee, Slow, Two-handed",
    "Crossbow (1d6) Qualities: Missile (240 ft), Reload, Slow, Two-handed Ammo: 20 bolts",
    "Hand Axe (1d6) Qualities:",
    "Mace (1d6) Qualities: Blunt, Melee",
    "Pole Arm (1d10) Qualities: Brace, Melee, Slow, Two-handed",
    "Short bow (1d6) Qualities: Missile (150 ft), Two-handed, Ammo: 20 arrows",
    "Short Sword (1d6) Qualities: Melee",
    "Silver Dagger (1d4) Qualities: Melee, Missile (30 ft)",
    "Sling (1d4) Qualities: Blunt, Missile (160 ft), Ammo: 20 stones",
    "Spear (1d6) Qualities: Brace, Melee, Missile (60 ft)",
    "Sword (1d8) Qualities: Melee",
    "War hammer (1d6) Qualities: Blunt, Melee"
];
let acrobatWeapons = [
    "Pole arm (1d10) Qualities: Brace, Melee, Slow, Two-handed",
    "Short bow< (1d6) Qualities: Missile (150 ft), Two-handed, Ammo: 20 arrows",
    "Spear (1d6) Qualities: Brace, Melee, Missile (60 ft.)",
    "Staff 1d4 Qualities: Blunt, Melee, Slow, Two-handed"
];
let bardWeapons = [
    "Crossbow (1d6) Qualities: Missile (240 ft), Reload, Slow, Two-handed, Ammo: 20 bolts",
    "Short Sword (1d6) Qualities: Melee",
    "Sling (1d4) Qualities: Blunt, Missile (160 ft.), Ammo: 20 stones",
    "Sword (1d8) Qualities: Melee"
];
let clericWeapons = [
    "Mace (1d6) Qualities: Blunt, Melee",
    "Sling (1d4) Qualities: Blunt, Missile (160 ft), Ammo: 20 stones",
    "Staff 1d4 Qualities: Blunt, Melee, Slow, Two-handed",
    "War Hammer (1d6) Qualities: Blunt, Melee"
];
let druidWeapons = [
    "Club (1d3) Qualities: Blunt, Melee",
    "Dagger (1d4) Qualities: Melee, Missile (30 ft)",
    "Sling (1d4) Qualities: Blunt, Missile (160 ft), Ammo: 20 stones",
    "Staff 1d4 Qualities: Blunt, Melee, Slow, Two-handed"
];
let knightWeapons = [
    "Lance 1d6 Qualities: Charge, Melee",
    "Short Sword (1d6) Qualities: Melee",
    "Sword (1d8) Qualities: Melee",
    "War hammer (1d6) Qualities: Blunt, Melee"
];
let adventuringGear = [
    "Crowbar",
    "Hammer(small) + 12 Iron Spikes",
    "Holy Water",
    "Lantern + 3 flasks of oil",
    "Mirror (hand-sized, steel)",
    "Pole (10 ft., wood)",
    "Rope (50 ft.)",
    "Rope (50 ft.) + grappling hook",
    "Sack (large)",
    "Sack (small)",
    "Stakes (3) + mallet",
    "Wolfsbane (1 bunch)"
];

let formerOccupation = [
    "Animal Trainer",
    "Armourer",
    "Baker",
    "Blacksmith",
    "Bookbinder",
    "Bowyer/fletcher",
    "Brewer",
    "Butcher",
    "Carpenter",
    "Chandler",
    "Cooper",
    "Coppersmith",
    "Farmer",
    "Fisher",
    "Furrier",
    "Glassblower",
    "Huntsman",
    "Lapidary/jeweler",
    "Lorimer",
    "Mapmaker",
    "Mason",
    "Miner",
    "Potter",
    "Roper",
    "Seafarer",
    "Shipwright",
    "Tailor",
    "Tanner",
    "Thatcher/roofer",
    "Woodcutter",
    "Vintner"
];

//SECTION #: OSE character class JSON objects
const acolyte = {
    "abilities":"",
    "hitDice":4,
    
}

const acrobat = {
    "abilities":"<b>Acrobat Skills:</b><br><b>Climb sheer surfaces (CS):</b> Check for each 100 ft. climbed. On a failure, suffer falling damage.<br><b>Falling (FA):</b> Suffer no damage from the first 10 ft. of a fall. Damage from falling a greater height is reduced by the listed percentage (rounding down).<br><b>Hide in shadows (HS)</b><br><b>Move silently (MS)",
    "hitDice":4,
    "maxLevel":14,
    "attackBonus":[0,0,0,0,2,2,2,2,5,5,5,5,7,7],
}

const assassin = {
    "abilities":"<b>Assassination (AS):</b> If attacking from behind, gain +4 to hit. On success, the victim must Save. vs. Death, with a penalty dependent on assassin's level. If the fails saves, the target dies instantly. Otherwise, attack does normal damage.<br><b>Climb Sheer Surfaces (CS)</b> Check for each 100 ft. climbed. On a failure, suffer falling damage.<br><b>Hear Noise (HN)</b><br><b>Hide in Shadows:</b> go unseen, while remaining motionless.<br><b>Move Silently (MS):</b> attempt to sneak by someone unnoticed.<b>Disguise</b><br> <b>Chance of Detection:</b> Everyone the assassin meets has a 2% chance of seein through disguise. The roll repeats every day.<b>Posing as another class, race or sex:</b> Increases chance by 2% per change.<br><b>Hirelings:</b> Assassins of 1st-3rd level may not hire retainers, mercenaries, or specialists. At lvls. 4+, may hire lower-level assassins. 8+, may hire thieves. From 12+ may hire any type of character.<br><b>Poison:</b> Victims suffer -2 penalty to Save vs. Poison.<br><b>Reaching Level 12:</b> May take over existing guild of assassins or thieves by killing old guild master. If successful, gain 7d4 guild members.",
    "hitDice":4,
    "maxLevel":14,
    "attackBonus":[0,0,0,0,2,2,2,2,5,5,5,5,7,7],
};

const barbarian = {
    "abilities":"<b>Literacy</> At 1st level, cannot read or write, regardless of INT score.<br><b>Agile Fighting</b> At 4level , gain +1 AC bonus. At lvl. 6, gain +2 AC bonus. At 8th, +3. At 10th, +4.<br><b>Barbarian</b><br><b>Climb Sheer Surfaces (CS):</b> Check for each 100 ft. climbed. On a failure, suffer falling damage.<br><b>Hide in Undergrowth (HD):</b> Go unseen, but must remain motionless.<br><b>Move Silently</b>May attempt to sneak.<br><b>Cure Poison:</b> Can gather herbs to concoct antidotes to natural poisons. Takes one turn per character to be cured. Each patient may make a second Save vs. Poison to end the effects.<br><b>Fear of Magic:</b> Mistrustful of magic and will refuse to knowingly use or come under the influence of spells or magic items. Will accept divine aid from tribal relgion.<br><b>Foraging and Hunting:</b> 2-in-6 chance of successful foraging. 5-in-6 chance of hunting.<br><b>Strike Invulnerable Monsters:</b> 4th level or higher is able to hit monsters that can only be harmed by magic.<br><b>After 8th Level</b> May call upon their native people to form a great horde 250 1st level warriors per level above 7th.",
};

const bard = {
    "abilities":"<b>Anti-Charm:</b> While the bard plays music, allies within 30 ft. are immune to song-based magical effects. Allies already under such magic may make another saving throw with a +4 bonus.<br><b>Combat:</b> Cannot use plate mail or shields. No two-handed melee weapons.<br><b>Divine Magic</b><br><b>Deity Disfavor</b> Must be faithful to alignment and religions, lest they incur penalties.<br><b>Spell Casting:</b> Lvl. 2+, may pray to receive spells. May use scrolls of any spells on their spell list (p129). May use any items that only druids may use.<br><b>Enchantment</b><br>Bards may fascinate subjects within 30' feet with their music. This does not work in combat!<br><b>Number of Subjects:</b> Up to 2HD of creatures per level.<br><b>Types of Subjects</b> Lvl. 1+, the bard fascinates people. At Lvl. 4+, animals. At Lvl. 7+, monsters.<br><b>Effect</b><br> target must Save vs. Spells or be fascinated as follows:<br><b>Rapt:</b> all attention on the bard's performance.<br><b>Follow:</b> fascinated subjects will follow the bard.<br><b>Interruptions:</b> fascination ends immediately.<br><b>Charming Fascinated Subjects</b><br>If a bard's performance goes on uninterrupted for one Turn, fascinated subjects mau be placed under a deeper charm (Save vs. Spells with a +2 bonus or be charmed for 1 Turn per level of bard):<br><b>Friendship:</b> subjects regard bard as friend and ally.<br><b>Commands</b>If they share a language, subjects will obey the bard's commands.<br><b>Alignment</b> Commands that contradict alignment may be ignored.<b>Suicidal Commands:</b> never obeyed.<br><b>Languages:</b> bards learn a new language at Lvls. 4,6,8,10,12,14. Even the secret language of Druids.<br><b>Lore:</b> Lvl. 2+, bard has 2-in-6 chance of knowing lore pertaining to monsters, magic items, or heroes.<br><b>After Reaching 11th Level</b> May establish a mamor. 2d6 apprentice 1st lvl. bards will come to study.",
}

const beast_master = {
    "abilities":"<b>Animal Companions</b><br><b>Establishing a Connection:</b> The beast master must approach a single animal in a peaceful manner. The referee makes a reaction roll. If the result is 8 or greater, the animal becomes a companion.<br><b>Limitations</b><br><b>Types of Animals:</b> Giant or magical animals may be companions at the referee's discretion.<br><b>Maximum Companions:</b> Once companion per level. The combined total of Hit Dice of companions may not exceed the character's level.<br>Companion Behavior:</b> Follows beast master everywhere. Always obeys. Will fight to the death. Never checks morale.<hr><b>Clairvoyance:</b>Lvls 5+, can see through the eyes of their animal companions. This requires deep concentration.<br><b>Combat:</b> Beast masters can use all types of weapons and can use leather, chain mail, and shields.<br><b>Identify Tracks</b> of wild animals.<br><b>Reaction Modifier</b> gain +1 modifier to reactions from animals (in addtion to CHA mod.)<hr><b>Speak with Animals</b><br>Animals understand the basic meaning of your words.<br><b>Lvls 2+ :</b> beast master can understand animal speech.<br><b>Lvls 4+ :</b> can communicate telepathically with animals within sight.<hr><b>After Reaching 9th Level:</b> May make a stronghould in wilderness. Animals within five miles will become friends. They may warn of intruders, carry messages and news, and so on. In exchange for this friendship, the beast master must protect the animals from harm."
}

const cleric = {
    "abilities":"<b>Combat:</b> May use all types of armour. May only use blunt weapons.<br><b>Divine Magic</b><br><b>Holy Symbol:</b> must carry a holy sybol.<br><b>Deity Disfavor</b> Must be faithful to alignment and religions, lest they incur penalties.<br><b>Magical Research:</b> May spend time and money to create new spells or other magical effecs. At level 9, may create magical items.<br><b>Spell Casting:</b> Lvl. 2+, may pray to receive spells. May use scrolls of any spells on their spell list (p129). May use any items that only divine spell may use.<br><b>Turning the Undead</b><br>May repel undead monsters. Roll 2d6 and the Referee will compare the result to the Turning the Undead Table.<br><b>Successful Turning:</b> if the turning is successful, roll 2d6 again to determine number of HD affected (turned or destroyed.)<br><b>Minimum Effect:</b> at least one undead monster will always be affected by a successful turning.<br><b>Mixed Groups:</b> if undead group has mixed HD values, those with the lowest HD are affected first.<br><b>After Reaching 9th Level:</b> Cleric may establish a stronghold (at half the normal price if cleric is in good standing with their god). Once established, will attract followers: 5d6 x 10 fighters (lvls. 1-2). These troops are utterly devoted to cleric and never check morale." 
}

const druid = {
    "abilities":"<b>Alignment:</b> Must be neutral.<br><b>Charm Immunity:</b> Druids of lvl. 7+ are immune to charms of fairies and Sylvan creatures.<br><b>Combat:</b> No metal armour or metal shields (wooden allowed). May use clubs, daggers, slings, spears, and staves.<br><b>Divine Magic</b><br><b>Holy Symbol:</b> must carry a holy symbol, a sprig of mistletoe.<br><b>Deity Disfavor</b> Must be faithful to alignment and religions, lest they incur penalties.<br><b>Magical Research:</b> May spend time and money to create new spells or other magical effecs. At level 9, may create magical items.<b>Spell Casting:</b> May recieve spells from nature. May use scrolls of any spells on their spell list (p129). May use magi scrolls of spells on their spell list. They may also use items that only divine spell casters can use. Druids may not use magical books or tomes.<br><b>Energy Resistance</b>Druids gain a +2 bonus to saving throws against electricity and fire.<br><b>Identification:</b> can identify plants and animals and can discern pure water.<br><b>Languages:</b> Speak a secret tongue known only to druids. At each level above 2nd, learn a new Sylvan language (dryads, pixies, green dragons, etc.).<br><b>Brace Without Trace</b> Lvls 3+, pass through natural environments without leaving a trace. Also can move through overgrown areas at normal speed.",
    "languages": [
        "druid",
        "pixie",
        "green dragon",
        "dryad",
        "treant",
        "centaur",
        "Will-o-the-wisp",
        "cockatrice",
        "leprechaun",
        "elf",
        "gullygug",
        "gnoll",
        "cat",
        "dog",
        "hawk",
        "wolf",
        "spider",
        "lizard",
        "toad",
        "unicorn",
        "wyvern"
    ]
}

const fighter = {
    "abilities":"<b>Combat:</b> Fighters can use all types of weapons and armour.<br><b>Stronghold:</b> If they have the funds, a fighter may build a castle or stronghold to control the surrounding lands.<br><b>After reaching 9th Level:</b> Figher may be granted a title, such as Baron or Baroness. The land under heir control is known as a Barony.",
    "hitDice": 8,
    "THAC0":[
        "",       
    ],
};

const illusionist = {
    "abilities":"<b>Arcane Magic</b><br><b>Uses arcane magic.<br><b>Magical Research:</b> May spend money and time on magical research. At level 9, they can also create magic items. Researched spells must be within the scope of the illusionist's level (as determine by referee).<br><b>Spellcasting:</b> Carry a spellbook containing arcane spells, increasing with level.<br><b>Using magic items:</b> can use scrolls of any spell on the Illusionist spell list. They may also use items reserved for arcane spellcasts (eg., magic wands).<br><b>Combat:</b> can only use daggers and are unable to use shields or wear any kind of armour.<br><b>After Reaching 11th Level:</b> May build a stronghold or tower. 1d6 apprentices of level 1-3 arrive to study with the illusionist.",
    "spells":[
        "",
        "",
        "",
        ""
    ]
}

const knight = {
    "abilities":"<b>Knighthood:</b> Knights of 1st and 2nd level are known as squires and not considered true knights. At level 3, they may be knighted by a liege and allowed to bear a coat of arms.<br><b>Alignment:</b> must have same alignment as their liege.<br><b>Chivalric Code:</b> Death over dishonour, service of the knight's liege, defence to the death of any in the knight's charge, glory in single combat, honouring of superiors, respect of equals, demanding obedience from inferiors, scorning the ignoble.<br><b>Gain no XP from actions contradicting the code.<br><b>Dishonour:</b> if a knight is dishonored, they lose their knighthood, becoming a Fighter of equivalent level. Knighthood could be regained through a quest.<br><b>Combat:</b> May use all melee weapons, but may not use missile weapons. May only use metal armour.<br><b>Single Combat:<b> A knight must attack the most powerful or worth foe in single combat.<br><b>Flying Mounts:</b> At levels 5+, may train to take flying monsters as mounts. This takes one month. The mount can only have HD equivalent or less than the knight's level.<br><b>Horsemanship</b><br><b>Assessing Steeds:<b> allows the knight to tell if a horse has low, average, or high HP.<br><b>Urging Great Speed:</b> Lvls. 5+, a knight can increase their steed's movement rate by 30 ft(10 ft"
}

const mage = {
    "abilities":""
}

const magic_user = {
    "abilities":"<b>Arcane Magic</b><br>See <b><i>Magic, p122</i></b> for full details on arcane magic.<br><b>Magic Research:</b> may spend money and time on magical research. This allows them to add new spells to their spell book and work on other effects. Lvls. 9+, the may create magic items.<br><b>Spell Casting:</b> spell casts may have memorize a number of spells as inidicated by their level from their book.<br><b>Using Magic Items:</b> May use magic scrolls of spells on their list. They can also used items for acrance magic users (eg., wands).<br><b>Combat:</b> Magic-users can only use daggers and staves and are unable to use shields or wear any kind of armour.<br><b>After Reachig 11th Level:</b> May build a stronghold. 1d6 apprentices (lvls 1-3) will arrive to study under magic-user."
};

const necromancer = {
    
}

const paladin = {
    "abilities":"<b>Alignment:<b> A paladin must be lawful. If the character’s alignment ever changes (for any reason), they lose all class abilities and become a fighter of the same level.<br><b>Combat</b> See Magic, p122 for full details on divine magic.<br><b>Holy symbol:</b> A paladin must carry a holy symbol (see the equipment list).<br><b>Deity disfavour:</b> Paladins must be faithful to the tenets of their alignment and religion. Paladins who fall from favour with their deity may incur penalties.<br><b>Spell casting:</b> From 9th level, a paladin may pray to receive spells. The list of spells available to paladins is found on p128 (paladins have the same spell selection as clerics).<br><b>Holy Resistance:</b> immune to all disease.<br><b>Laying on Hands:</b>Once per day, a paladin can heal 2 hit points per level by laying their hands on wounded characters. Additionally, a paladin of 5th level or higher may cure disease once per week by laying on hands.<br><b>Turning the Undead</b><br>Paladins of lvls. 3+, may repel undead monsters. To turn, roll 2d6 against the HD of the type of monsters targeted.<br><b>Successful Turning:<b> Roll 2d6 again to determine number of HD affected.<br><b>Mixed Group</b> If targeting a mixed group, the monsters with the lowest HDs are affected first.<br><b>After Reaching 9th Level:<b> With permission of their holy order, may found a stronghold and be granted a title such as Baron or Baroness. The land under their control is a Barony.<br><b>Vow of Humility:</b> May only keep one suit of magical armour, one magical shield, and one magical melee weapon. They must also donate 10% of all income to a Lawful religious institution.<br><b>Warhorse:</b> At Lvls 4+, the paladin may summon a holy charger (AC 5[14], 5+5 HD, MV 180(60)). If it dies, a new one cannot be summoned for 10 years."
}

const ranger = {
    "abilities":"<b>Alignment: </b>As protectors, rangers may only be lawful or neutral. If a ranger ever changes alignment to chaotic, they lose all special class abilities and become a fighter of the same level. <b>Awareness:</b> Rangers are only surprised on a 1-in-6.<br><b>Combat: </b> Can use all types of weapons, and can use leather, chainmail, and shields. Cannot use plate.<br><b>Divine Magic</b><br><b>Spell casting: From 8th level, due to a deep connection with nature, a ranger gains the ability to cast spells.<br><b>Limited Possessions:</b> Only keep the wealth and possessions that can be kept on their person. Excess must be donated to worthy causes (not other PCs!).<br><b>Pursuit:</b> When a ranger purusues an enemy, their chance of evasion is reduced 10%.<br><b>Stealth:</b>In the wilderness, a ranger has a 3-in-6 chance of hiding and a 3-in-6 chance of moving silently.<br><b>Tracking</b><br>Rangers can identify and follow tracks. Chance of sucess is modified by:<br><b>Soft/hard ground:</b> +20%/-50%<br><b>Size of group being tracked:</b> +2% per creature beyond first.<br><b>Other Track Mingle:</b> -50%<br><b>Age of tracks:</b> -5% per 12 hours.<br><b>Rainfall:</b> -25% per hour.<br><b>Efforts made to hide tracks:</b> -25%<br><b>After Reaching 10th Level:</b>2d12 individuals will join the ranger as followers. They may include humands, demihumans, or all manner of other creatures."
}

const thief = {
    "abilities":"<b>Back-stab:</b> When attacking an unaware opponent from behind, gain +4 bonus to hit and double damage.<br><b>Combat:</b> Cannot wear metal armour. Cannot use shields. But can use any weapon.<br><b>Read Languages:</b> At levels 4+, has an 80% chance to read non-magical text in any language. On a failure, the thief may not attempt to translate the same text until they have gained a level.<br><b>Scroll Use:</b> At level 10+, can cast arcane spells from scrolls. 10% of failure, creating an unexpected and deleterious effect.<br><b>Thief Skills</b><br><b>Climb Sheer Surfaces (CS):</b> check for every 100 ft. climbed.<br><b>Find or remove treasure traps (TR):</b> Roll to find trap, roll to disarm trap. May be attempted once per trap.<br><b>Hear noise (HN)</b><br><b>Hide in Shadows (HS):</b> staying motionless, may go unseen in shadows.<br><b>Move Silently (MS)</b><br><b>Open Locks (OL):</b> requires Thieve's Tools.Try this once per lock. On failure, may not try this lock until gainging a level.<br><b>Pick Pockets (PP):</b> There is a 5% penalty for every level the target has above 5th. There is always a 1% chance of failure. A roll two-times higher than what is required for success is a noticed theft.<br><b>After Rearching 9th Level:</b> May establish a thief den, attracting 2d6 1st level thieves.",
}

//SECTION #: Saving Throw JSON Objects
const st_acroAssBardThief = {
    "death":[13,12,10,8],
    "wands":[14,13,11,9],
    "para":[13,11,9,7],
    "breath":[16,14,12,10],
    "spells":[15,13,10,8]
}
const st_barbarian = {
    "death":[10,8,6,4,3],
    "wands":[13,11,9,7,5],
    "para":[12,10,8,6,4],
    "breath":[15,13,10,8,5],
    "spells":[16,13,10,7,5]
}

const st_clericDruidAcolyte = {
    "death":[11,9,6,3],
    "wands":[12,10,7,5],
    "para":[14,12,9,7],
    "breath":[16,14,11,8],
    "spells":[15,12,9,7]
}

const st_fighterKnightRanger = {
    "death":[12,10,8,6,4],
    "wands":[13,11,9,7,5],
    "para":[14,12,10,8,6],
    "breath":[15,13,10,8,5],
    "spells":[16,14,12,10,8]
}

const st_magic_user = {
    "death":[13,11,8],
    "wands":[14,12,9],
    "para":[13,11,8],
    "breath":[16,14,11],
    "spells":[15,12,8]
}

const st_paladin = {
    "death":[10,8,6,4,2],
    "wands":[11,9,7,5,3],
    "para":[12,10,8,6,4],
    "breath":[13,11,8,6,3],
    "spells":[14,12,10,8,6]
}

const st_beast_master = {
    "death":[11,9,7,5],
    "wands":[12,10,8,6],
    "para":[12,10,8,6],
    "breath":[15,13,11,9],
    "spells":[16,14,12,10]
}

const st_kineticist = {
    "death":[13,12,10,8],
    "wands":[14,13,11,9],
    "para":[13,11,9,7],
    "breath":[16,14,12,10],
    "spells":[15,13,10,8]
}

const st_mage = {
    "death":[12,10,7],
    "wands":[13,11,8],
    "para":[12,10,7],
    "breath":[15,13,10],
    "spells":[14,11,7]
}

//SECTION #: global variables
let globalAttributeClassRestrictions = [];

let globalKinClassRestrictions = [];

let globalTotalClassRestrictions = new Array();

let globalAvailableClasses = [];

let globalCONmod;

let stepNumber = 0;

let globalEquipped = [];

let globalPacked = [];

let globalKin = "";

let globalClass = "";

let globalLevel = "";

let globalName;

let globalGear = [];

let globalSTR;

let globalINT;

let globalWIS;

let globalDEX;

let globalCON;

let globalCHA;


//SECTION #: frequently called upon generic functions
function pushArrYElementsToArrX(x,y){
    let arr1 = x;
    let arr2 = y;
    for (i=0;i<arr2.length;i++){
        arr1.push(arr2[i]);
    }
}

function allClassRestrictor(){
    let gACR = globalAttributeClassRestrictions;
    let gKCR = globalKinClassRestrictions;
    let gTCR = globalTotalClassRestrictions;
    let gAC = globalAvailableClasses;
    pushArrYElementsToArrX(gTCR,gACR);
    pushArrYElementsToArrX(gTCR,gKCR);
    for (i=0;i<gTCR.length;i++){
        document.getElementById(gTCR[i]).disabled = true;
        document.getElementById("label_"+gTCR[i]).style.textDecoration = "line-through";
    }
    globalKinClassRestrictions = [];
    globalTotalClassRestrictions = [];
    gAC = arrayContrast(allClasses,gTCR);
    for (i=0;i<gAC.length;i++){
        document.getElementById(gAC[i]).disabled = false;
        document.getElementById(`label_${gAC[i]}`).style.textDecoration = "none";
    }
}

//compares array X to array Y and returns
//array of items that WERE NOT in array Y
function arrayContrast(x, y) {
    const difference = [];
    for (let i = 0; i < x.length; i++) {
        if (y.indexOf(x[i]) === -1) {
            difference.push(x[i]);
        }
    }
    return difference;
}

//simulates dice rolls where n=number of dice and s=dice sides
function dice(n,s) {
    let rollTotal = 0;
    for (i=0;i<n;i++){
        roll = randBetween(s);
        rollTotal += roll;
    }
    return rollTotal;
};

//generates a random number between 1 and x
function randBetween(x){
    return Math.floor(Math.random() * x)+1;
};

function saveName(){
    let name = document.getElementById("name").value;
    globalName = name;
    document.getElementById("savedName").innerHTML = name;
    document.getElementById("name").hidden=true;
    document.getElementById("saveNameButton").hidden=true;
    document.getElementById("savedName").hidden = false;
}

function saveLevel(){
    let level = globalLevel;
    document.getElementById("level").hidden = true;
    document.getElementById("levelLabel").hidden = true;
    document.getElementById("savedLevel").innerHTML = `Level: ${level}`;
    document.getElementById("savedLevel").hidden = false;
}

function saveEquipped(){
    document.getElementById("equipped").hidden = true;
    document.getElementById("savedEquipped").hidden = false;
    document.getElementById("packed").hidden = true;
    document.getElementById("savedPacked").hidden = false;
    document.getElementById("saveEquipButton").hidden = true;
    for (i=0;i<9;i++){
        document.getElementById("e_invSlot_"+i).innerHTML = document.getElementById("txt_e_invSlot_"+i).value;
    }
    for (n=0;n<19;n++){
        document.getElementById("p_invSlot_"+n).innerHTML = document.getElementById("txt_p_invSlot_"+n).value;
    }
}

function printDiv(divId) {
    saveName();
    saveLevel();
    saveEquipped()
    let divContents = document.getElementById(divId).innerHTML;
    let printWindow = window.open('', '', 'height=1056px,width=816px');
    printWindow.document.write(`<html><head><title>${globalName} level ${globalLevel} ${globalKin} ${globalClass}</title>
        <style>
            body{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important;}
            div {font-size:10px;}
            h1 {font-size:14px;}
            h2 {font-size:12px;}
            p {font-size:10px;}
            td {font-size:10px;}
            tr:nth-child(even){background-color:rgb(238, 238, 238);}
            #abilitiesContainer{max-width:350px;float:left;padding:5px;}
            #acAndTHAC0{width:136px;float:right;clear:float;}
            #filler{width:78px;height:100px;float:left}
            #attributeTable {width:100%; text-align:center;font-size:12px;}
            #charClass{width:136px;float:left;}
            #inventoryContainer{padding:5px;}
            #savedName {text-transform: capitalize;font-weight:bold;}
            #oneInSixes {font-size:12px;}
            #saveScores {width:100%;}
            #sheetHead {width:350px; border-right-width:1px;}
            /*#statContainer {min-height:1056px;min-width:816px;}*/
            #upperContainer {width:350px;height:1056px;border-bottom-right:solid;float:left;}
            .saveTitles {font-size: 10px; font-style: italic; text-align: center;}
            .saveValues {font-size: 10px; text-align: center;}
            .tableFooter {font-size: 10px;}
            .titleDiv {width:350px;block-size:12px;float:left;}
            .attScore {text-align:center;}
            .savedInventoryTable {
                width:100%;
            }
            .invSlot{width:85%;}
        </style></head><body>`);
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

//SECTION #: form listeners
//listens for a kindred to be chosen to change class options
window.onload = function kinListener() {
    const form = document.querySelector('form');
    const radioButtons = document.querySelectorAll('input[name="kindredSelection"]');
    form.addEventListener("click",() => {
        let selectedKin;
        document.getElementById("classContainer").hidden = false;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedKin = radioButton.id;
                globalKinClassRestrictions = [];
                globalTotalClassRestrictions = [];
                kinClassRestrictor(selectedKin);
                allClassRestrictor();
                globalKin = selectedKin;
                document.getElementById("kinName").innerHTML = `Kindred: ${document.getElementById(selectedKin).value}`;
                document.getElementById("classAbilities").innerHTML = "";
                document.getElementById("hp").innerHTML = "Hit Points:";
                document.getElementById("0").selected = true;
                document.getElementById("level").hidden = true;
                //uncheck class option if the kin option is changed
                const form2 = document.querySelector('#classForm');
                const radioButtons2 = document.querySelectorAll('input[name="classSelection"]');
                for (const radioButton2 of radioButtons2) {
                    if (radioButton2.checked) {
                        radioButton2.checked = false;
                    }
                }
                kinAttributeModifiers(globalKin);
                classListener();
                break;
            }
        }
    })
};

function classListener() {
    const form2 = document.querySelector('#classForm');
    const radioButtons = document.querySelectorAll('input[name="classSelection"]');
    let selectedLevel = levelListener();
    form2.addEventListener("click",() => {
        let selectedClass;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                levelCapper("null","null");
                globalEquipped = [];
                globalPacked = [];
                globalGear = [];
                document.getElementById("vsDeath").innerHTML = "";
                document.getElementById("vsWands").innerHTML = "";
                document.getElementById("vsPara").innerHTML = "";
                document.getElementById("vsBreath").innerHTML = "";
                document.getElementById("vsSpells").innerHTML = "";
                document.getElementById("hp").innerHTML = "Hit Points:";
                document.getElementById("0").selected = true;
                document.getElementById("level").hidden = false;
                selectedClass = radioButton.id;
                globalClass = selectedClass;
                levelCapper(globalClass,globalKin);
                document.getElementById("className").innerHTML = `Class: ${document.getElementById(selectedClass).value}`;
                console.log(`selectedLevel is ${selectedLevel} and is a ${typeof(selectedLevel)}`);
                quickArmour(selectedClass);
                quickWeapons(selectedClass);
                document.getElementById("classAbilities").innerHTML = classFeatures(selectedClass);
                quickGear(selectedClass);
                loadEquipped();
                loadPacked();
                loadOccupation();
                break;
            }
        }
    })
};

function loadOccupation(){
    document.getElementById("formerOccupation").innerHTML = formerOccupation[randBetween(formerOccupation.length)];
}

function loadEquipped(){
    for (i=0;i<globalEquipped.length;i++){
        console.log(`globalEquipped is ${globalEquipped[i]}`);
        document.getElementById("txt_e_invSlot_"+i).value = `${globalEquipped[i]}`;
    }
}
function loadPacked(){
    console.log("globalGear is " + globalGear + " and it is this long: " + globalGear.length);
    let rowCount;
    let itemCount = 0;
    let itemSlot;
    let slotsDisabled = 0;
    for(i=0;i<19;i++){
        itemSlot = document.getElementById("txt_p_invSlot_"+i);
        if (itemSlot.disabled){
            slotsDisabled++
        }
    }
    for (rowCount=slotsDisabled;rowCount<globalGear.length+slotsDisabled;rowCount++){
        itemSlot = document.getElementById("txt_p_invSlot_"+rowCount);
                itemSlot.value = `${globalGear[itemCount]}`;
                itemCount++;
    }
}

function levelListener(){
    const selectElement = document.querySelector('#level');
    let initialValue = document.querySelector('#level').value;
    console.log(initialValue);

    selectElement.addEventListener('change', (event) => {
        //document.getElementById("hp").innerHTML = "";
        // Get the selected value
        const selectedValue = event.target.value;

        // Do something with the selected value
        console.log('Selected value:', selectedValue);
        initialValue = selectedValue;
        savingThrowAllocator(globalClass,parseInt(initialValue));
        let hd = hitDice(globalClass,initialValue,globalCONmod);
        document.getElementById("printButton").disabled = false;
        console.log(`globalClass is ${globalClass}`);
        console.log(hd);
        globalLevel = initialValue;
        //spellLoader(globalClass,globalLevel);
    });
    return parseInt(initialValue);
}

function levelCapper(cls,kin){
    let allCls;
    let pos;
    let lvlCap;
    if (kin=="null"){
        for (i=0;i<14;i++){
            document.getElementById(i).hidden = true;
        }
        return;
    }
    if (kin=="dragonborn"){
        allCls = dragonborn.classes;
        lvlCap = dragonborn.levelCap;
    } else if (kin=="drow"){
        allCls = drow.classes;
        lvlCap = drow.levelCap;
    } else if (kin=="duergar"){
        allCls = duergar.classes;
        lvlCap = duergar.levelCap;
    } else if (kin=="dwarf"){
        allCls = dwarf.classes;
        lvlCap = dwarf.levelCap;
    } else if (kin=="elf"){
        allCls = elf.classes;
        lvlCap = phase_elf.levelCap;
    } else if (kin=="half_elf"){
        allCls = half_elf.classes;
        lvlCap = phase_elf.levelCap;
    } else if (kin=="half_orc"){
        allCls = half_orc.classes;
        lvlCap = half_orc.levelCap;
    } else if (kin=="halfling"){
        allCls = halfling.classes;
        lvlCap = halfling.levelCap;
    } else if (kin=="hephaestan"){
        allCls = hephaestan.classes;
        lvlCap = hephaestan.levelCap;
    } else if (kin=="gargantua"){
        allCls = gargantua.classes;
        lvlCap = gargantua.levelCap;
    } else if (kin=="goblin"){
        allCls = goblin.classes;
        lvlCap = goblin.levelCap;
    } else if (kin=="mutoid"){
        allCls = mutoid.classes;
        lvlCap = mutoid.levelCap;
    } else if (kin=="mycelian"){
        allCls = mycelian.classes;
        lvlCap = mycelian.levelCap;
    } else if (kin=="gnome"){
        allCls = gnome.classes;
        lvlCap = gnome.levelCap;
    } else if (kin=="svirfneblin"){
        allCls = svirfneblin.classes;
        lvlCap = svirfneblin.levelCap;
    } else if (kin=="tiefling"){
        allCls = tiefling.classes;
        lvlCap = tiefling.levelCap;
    } else if (kin=="phase_elf"){
        allCls = phase_elf.classes;
        lvlCap = phase_elf.levelCap;
    } else if (kin=="wood_elf"){
        allCls = wood_elf.classes;
        lvlCap = wood_elf.levelCap;
    } else {
        allCls = human.classes;
        lvlCap = human.levelCap;
    }
    pos = allCls.indexOf(cls); 
    cap = lvlCap[pos];
    console.log(`pos is ${pos}; cap is ${cap}`);
    for (i=0;i<=parseInt(cap);i++){
        //let op = i+1;
        document.getElementById(`${i}`).hidden = false;
    }
}

//SECTION #: Character features and equipment functions
//assigns abilities depending on class
function classFeatures(x){
    if (x=="acolyte"){
        return acolyte.abilities;
    } else if (x=="assassin"){
        return assassin.abilities;
    } else if (x=="acrobat"){
        return acrobat.abilities;
    } else if (x=="barbarian"){
        return barbarian.abilities;
    } else if (x=="beast_master"){
        return beast_master.abilities;
    } else if (x=="bard"){
        return bard.abilities;
    } else if (x=="cleric"){
        return cleric.abilities;
    } else if (x=="druid"){
        return druid.abilities;
    } else if (x=="fighter"){
        return fighter.abilities;
    } else if (x=="illusionist"){
        return illusionist.abilities;
    } else if (x=="kineticist"){
        return kineticist.abilities;
    } else if (x=="knight"){
        return knight.abilities;
    } else if (x=="mage"){
        return mage.abilities;
    } else if (x=="magic_user"){
        return magic_user.abilities;
    } else if (x=="necromancer"){
        return necromancer.abilities;
    } else if (x=="paladin"){
        return paladin.abilities;
    } else if (x=="ranger"){
        return ranger.abilities;
    } else if (x=="thief"){
        return thief.abilities;
    }
}

//randomly assigns armour character class
function quickArmour(x){
    let classChoice = x;
    let armourTable = ["Leather Armour: AC 7[12] | Wt.: 200 coins",
        "Leather Armour AC 7[12] | Wt.: 200 coins, Shield: AC+1 Wt.: 100 coins",
        "Chainmail Armour: AC 5[14] Wt.: 400 coins",
        "Chainmail Armour: AC 5[14] Wt.: 400 coins, Shield AC+1 Wt.: 100 coins",
        "Plate Mail Armour: AC 3[16] Wt. 500 coins",
        "Plate Mail Armour AC 3[16] Wt.: 500 coins, Shield AC+1 Wt. 100 coins"];
    if (classChoice == "acrobat"||classChoice=="assassin"||classChoice=="druid"||classChoice=="gnome"||classChoice=="thief"){
        globalEquipped.push(armourTable[0]);
        //return `<b>Armour:</b> ${armourTable[0]}`;
    } else if (classChoice=="illusionist"||classChoice=="magic_user"){
        globalEquipped.push(`Cloth AC 9[10]`);
        //return "<b>Armour:</b> Cloth <b>AC</b> 9[10]"
    } else if (classChoice=="barbarian"||classChoice=="half_orc"||classChoice=="ranger") {
        globalEquipped.push(armourTable[dice(1,4)-1]);
        //return `<b>Armour:</b> ${armourTable[dice(1,4)-1]}`;
    } else if (classChoice=="bard"){
        let bardArmour = ["Leather Armour: AC 7[12] Wt.: 200 coins","Chainmail Armour AC: 5[14] Wt.: 400 coins"];
        globalEquipped.push(bardArmour[randBetween(2)-1]);
        //return bardArmour[randBetween(2)-1];
    } else {
        globalEquipped.push(armourTable[dice(1,6)-1]);
        //return armourTable[dice(1,6)-1];
    }
};

//randomly assigns starting equipment
function quickWeapons(x){
    let roll1 = dice(1,4)-1;
    let roll2 = dice(1,4)-1;
    if (x=="acrobat"){
        while (roll1 == roll2){
            roll1 = dice(1,4)-1;
            roll2 = dice(1,4)-1;
        }
        globalEquipped.push(acrobatWeapons[roll1],acrobatWeapons[roll2]);
    } else if (x=="bard"){
        while (roll1 == roll2){
            roll1 = dice(1,4)-1;
            roll2 = dice(1,4)-1;
        }
        globalEquipped.push(bardWeapons[roll1],bardWeapons[roll2]);
    } else if (x=="cleric"){
        while (roll1 == roll2){
            roll1 = dice(1,4)-1;
            roll2 = dice(1,4)-1;
        }
        globalEquipped.push(clericWeapons[roll1],clericWeapons[roll2]);
    } else if (x=="druid"){
        while (roll1 == roll2){
            roll1 = dice(1,4)-1;
            roll2 = dice(1,4)-1;
        }
        globalEquipped.push(druidWeapons[roll1],druidWeapons[roll2]);
    } else if (x=="knight"){
        while (roll1 == roll2){
            roll1 = dice(1,4)-1;
            roll2 = dice(1,4)-1;
        }
        globalEquipped.push(knightWeapons[roll1],knightWeapons[roll2]);
    } else {
        while (roll1 == roll2){
            roll1 = dice(1,12)-1;
            roll2 = dice(1,12)-1;
        }
        globalEquipped.push(weaponTable[roll1],weaponTable[roll2]);
    }
};
//randomly assigns adventuring gear
function quickGear(x){
    let roll1 = dice(1,12)-1;
    let roll2 = dice(1,12)-1;
    if (x=="cleric"||x=="paladin"){
        globalGear.push("Holy Symbol");
    } else if (x=="druid"){
        globalGear.push("Sprig of Mistletoe");
    } else if (x=="thief"){
        globalGear.push("Thieves Tools");
    }
    while (roll1 == roll2){
        roll1 = dice(1,12)-1;
        roll2 = dice(1,12)-1;
    }
    globalGear.push(adventuringGear[roll1],adventuringGear[roll2],"Backpack","Tinder box",`${dice(1,6)} torches`, `${dice(1,6)} iron rations`,`${dice(3,6)} gold`);
}
//SECTION #: Randomly generates attribute scores and determines modifiers and bonuses
function attScores() {
    const radioButtons = document.querySelectorAll('input[name="kindredSelection"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioButton.checked = false;
        } else if (radioButton.disabled){
            radioButton.disabled = false;
        }
    }
    const radioButtons2 = document.querySelectorAll('input[name="classSelection"]');
    for (const radioButton2 of radioButtons2) {
        if (radioButton2.checked) {
            radioButton2.checked = false;
        }
    }
    for (i=0;i<availableKin.length;i++){
        document.getElementById('label_'+availableKin[i]).style.textDecoration = "none";
    }
    globalSTR =dice(3,6);
    globalINT = dice(3,6);
    globalWIS = dice(3,6);
    globalDEX = dice(3,6);
    globalCON = dice(3,6);
    globalCHA = dice(3,6);
    const str = globalSTR;
    const int = globalINT;
    const wis = globalWIS;
    const dex = globalDEX;
    const con = globalCON;
    const cha = globalCHA;
    document.getElementById("STR").innerHTML = str;
    document.getElementById("INT").innerHTML = int;
    document.getElementById("WIS").innerHTML = wis;
    document.getElementById("DEX").innerHTML = dex;
    document.getElementById("CON").innerHTML = con;
    document.getElementById("CHA").innerHTML = cha;
    //let attRes = attkinClassRestrictor(str,int,wis,dex,con,cha);
    document.getElementById("kinContainer").hidden = false;
    document.getElementById("attributeButton").hidden = true;
    document.getElementById("resetButton").hidden = false;
    kinRestrictor(str,int,wis,dex,con,cha);
    //kinRestrictor(str,int,wis,dex,con,cha);
    console.log(`GLOBALS: STR: ${globalSTR}, INT: ${globalINT}, WIS: ${globalWIS}, DEX: ${globalDEX}, CON: ${globalCON}, CHA: ${globalCHA}`);
}

function kinAttributeModifiers(kin){
    let modifiedSTR = globalSTR;
    let modifiedINT = globalINT;
    let modifiedWIS = globalWIS;
    let modifiedDEX = globalDEX;
    let modifiedCON = globalCON;
    let modifiedCHA = globalCHA;
    //reductions
    //str reductions
    if (kin == "goblin"||kin == "hephaestan"||kin == "halfling"){
        modifiedSTR = globalSTR - 1;
    }
    //int reduction
    if (kin == "gargantua"){
        modifiedINT = globalINT - 1;
    }
    //wis reduction
    if (kin == "tiefling"){
        modifiedWIS = globalWIS - 1;
    }
    //dex reuctions
    if (kin == "mycelian"){
        modifiedDEX = globalDEX - 1;
    }
    //con reductions
    if (kin == "phase_elf"||kin == "drow"||kin == "elf"){
        modifiedCON = globalCON - 1;
    }
    //cha reductions
    if (kin == "wood_elf"||kin == "duergar"||kin == "dwarf"){
        modifiedCHA = globalCHA - 1;
    }
    //orc CHA reduction
    if (kin == "half_orc"){
        modifiedCHA = globalCHA - 2;
    }
    //improvements
    //str improve
    if (kin == "gargantua"||kin == "half_orc") {
        modifiedSTR = globalSTR + 1;
    }
    //int improve
    //wis improve
    if (kin == "mycelian"){
        modifiedWIS = globalWIS + 1;
    }
    //DEX improve
    if (kin == "goblin"||kin == "tiefling"||kin == "phase_elf"||kin == "drow"||kin == "elf"||kin == "halfling"){
        modifiedDEX = globalDEX + 1;
    }
    //con improve
    if (kin == "dwarf"||kin == "duergar"||kin == "half_orc"){
        modifiedCON = globalCON + 1;
    }
    //CHA improve
    if (kin == "hephaestan"){
        modifiedCHA = globalCHA + 1;
    }
    strMod(modifiedSTR);
    intMod(modifiedINT);
    wisMod(modifiedWIS);
    dexMod(modifiedDEX);
    conMod(modifiedCON);
    chaMod(modifiedCHA); 
    console.log(`MODIFIED: STR: ${modifiedSTR}, INT: ${modifiedINT}, WIS: ${modifiedWIS}, DEX: ${modifiedDEX}, CON: ${modifiedCON}, CHA: ${modifiedCHA}`);
    document.getElementById("STR").innerHTML = modifiedSTR;
    document.getElementById("INT").innerHTML = modifiedINT;
    document.getElementById("WIS").innerHTML = modifiedWIS;
    document.getElementById("DEX").innerHTML = modifiedDEX;
    document.getElementById("CON").innerHTML = modifiedCON;
    document.getElementById("CHA").innerHTML = modifiedCHA;
    attDescriptor(modifiedSTR,modifiedINT,modifiedWIS,modifiedDEX,modifiedCON,modifiedCHA);
    let attRes = attkinClassRestrictor(modifiedSTR,modifiedINT,modifiedWIS,modifiedDEX,modifiedCON,modifiedCHA);
    return attRes;
}

function attDescriptor(str,int,wis,dex,con,cha){
    let strDesc=["Limp", "Shaky", "Wimpy", "Scrawny", "Stringy", "Pliable", "Pudgy", "Soft", "Toned", "Lean", "Burly", "Sinewy", "Muscular", "Massive", "Towering", "Gigantic"];
    let intDesc=["Vacant", "Dim-witted", "Naive", "Fool-hearty", "Gullible", "Distracted", "Slow but sure", "Reasonable", "Logical", "Perceptive", "Shrewd", "Clever", "Erudite", "Sharp-witted", "Brilliant", "Ingenious"];
    let wisDesc=["Delusional", "Foolish", "Thick-skulled", "Irrational", "Impulsive", "Unwise", "Weak-willed", "Intuitive", "Prudent", "Inspired", "Intuitive", "Insightful", "Philosophical", "Prescient", "Sagely", "Enlightened"];
    let dexDesc=["Glacial",
        "Sluggish",
        "Ungainly",
        "Awkward",
        "Graceless",
        "Plodding",
        "Ponderous",
        "Competent",
        "Capable",
        "Balanced",
        "Alert",
        "Swift",
        "Nimble",
        "Graceful",
        "Poised",
        "Uncanny reflexes"
        ];
    let conDesc=["Debilitated",
        "Emaciated",
        "Sickly",
        "Fragile",
        "Lethargic",
        "Worn",
        "Haggard",
        "Healthy",
        "Lively",
        "Robust",
        "Resilient",
        "Hale",
        "Vital",
        "Vigorous",
        "Stead-fast",
        "Indefatigable", 
        ];
    let chaDesc=["Vile",
        "Brutish",
        "Rude",
        "Irritating",
        "Depressing",
        "Unappealing",
        "Forgettable",
        "Pleasant",
        "Agreeable",
        "Charming",
        "Charismatic",
        "Compelling",
        "Fascinating",
        "Inspiring",
        "Authoritative",
        "Hypnotic",
        ];
    document.getElementById("attDescription").innerHTML = `<em>${strDesc[str-3]}, ${dexDesc[dex-3]}, ${conDesc[con-3]},<br>${intDesc[int-3]}, ${wisDesc[wis-3]}, ${chaDesc[cha-3]}</em>`;
}

//resets all modified innerHTML elements to blank
function resetFunction() {
    document.getElementById("abilities").innerHTML = "";
    document.getElementById("classAbilities").innerHTML = "";
    document.getElementById("literacy").innerHTML = "";
    document.getElementById("knownLanguages").innerHTML = "";
    document.getElementById("bonusLanguages").innerHTML = "";
    document.getElementById("attributeButton").hidden = false;
    document.getElementById("resetButton").hidden = true;
    document.getElementById("kinContainer").hidden = true;
    document.getElementById("classContainer").hidden = true;
    for (i=0;i<19;i++){
        document.getElementById("txt_p_invSlot_"+i).value = "";        
    }
    for (i=0;i<9;i++){
        document.getElementById("txt_e_invSlot_"+i).value = "";
    }
    for (i=0;i<6;i++){
        document.getElementById("txt_p_invSlot_"+i).disabled = true;
    }
    document.getElementById("txt_p_invSlot_0").value = "STR 18+";
    document.getElementById("txt_p_invSlot_1").value = "STR 16+";
    document.getElementById("txt_p_invSlot_2").value = "STR 13+";
    document.getElementById("txt_p_invSlot_3").value = "STR 9+";
    document.getElementById("txt_p_invSlot_4").value = "STR 6+";
    document.getElementById("txt_p_invSlot_5").value = "STR 4+";
}

//random extra languages a PC may learn at higher INT scores
const extraLanguages = [
    "Bugbear",
    "Doppelganger",
    "Dragon",
    "Dwarvish",
    "Elvish",
    "Gargoyle",
    "Gnoll",
    "Gnomish",
    "Goblin",
    "Halfling",
    "Harpy",
    "Hobgoblin",
    "Kobold",
    "Lizard man",
    "Medusa",
    "Minotaur",
    "Ogre",
    "Orcish",
    "Pixie",
    "Unusual human dialect"
];

//assigns STR modifer and chance of Opening Stuck Door
function strMod(x){
    let mod;
    let od = 1;
    if (x==3) {
        mod = -3;
    } else if (x==4||x==5){
        mod = -2;
    } else if (x >= 6 && x <= 8){
        mod = -1;
    } else if (x >=9 && x <=12){
        mod = 0;
        od = 2;
    } else if (x >= 13 && x <=15) {
        mod = 1;
        od = 3;
    } else if (x==16||x==17) {
        mod = 2;
        od = 4;
    } else {
        mod = 3;
        od = 5;
    }
    if (x>=4){
        document.getElementById("txt_p_invSlot_5").disabled = false;
    }
    if (x>=6) {
        document.getElementById("txt_p_invSlot_4").disabled = false;
    }
    if (x>=9) {
        document.getElementById("txt_p_invSlot_3").disabled = false;
    }
    if (x>=13) {
        document.getElementById("txt_p_invSlot_2").disabled = false;
    }
    if (x>=16) {
        document.getElementById("txt_p_invSlot_1").disabled = false;
    }
    if (x>=18) {
        document.getElementById("txt_p_invSlot_0").disabled = false;
    }
    document.getElementById("STRmod").innerHTML = mod;
    document.getElementById("STRmod2").innerHTML = mod;
    document.getElementById("OD").innerHTML = od;
}

//assigns WIS modifier
function wisMod(x){
    let mod;
    if (x==3) {
        mod = -3;
    } else if (x==4||x==5){
        mod = -2;
    } else if (x >= 6 && x <= 8){
        mod = -1;
    } else if (x >=9 && x <=12){
        mod = 0;
    } else if (x >= 13 && x <=15) {
        mod = 1;
    } else if (x==16||x==17) {
        mod = 2;
    } else {
        mod = 3;
    }
    document.getElementById("WISmod").innerHTML = mod;
}

//determines literacy and number of extra languages PC may know
function intMod(x){
    let lang="";
    let lit ="";
    let roll1;
    let roll2;
    let roll3;
    if (x==3) {
        lang = "(broken speech)";
        lit = "Illiterate";
    } else if (x==4||x==5){
        lit = "Illiterate";
    } else if (x >= 6 && x <= 8){
        lit = "Basic Literacy";
    } else if (x >=9 && x <=12){
        lit = "Literate";
    } else if (x >= 13 && x <=15) {
        lit = "Literate";
        roll1 = dice(1,20-1);
        lang = `<b>Bonus Languages:</b> ${extraLanguages[roll1]}`;
    } else if (x==16||x==17) {
        lit = "Literate";
        roll1 = dice(1,20-1);
        roll2 = dice(1,20-1);
        lang =`<b>Bonus Languages:</b> ${extraLanguages[roll1]}, ${extraLanguages[roll2]}`;
    } else {
        lit = "Literate";
        roll1 = dice(1,20-1);
        roll2 = dice(1,20-1);
        roll3 = dice(1,20-1);
        lang = `<b>Bonus Languages:</b> ${extraLanguages[roll1]}, ${extraLanguages[roll2]}, ${extraLanguages[roll3]}`;
    }
    document.getElementById("literacy").innerHTML = `<b>Literacy:</b> ${lit}`;
    document.getElementById("bonusLanguages").innerHTML = `${lang}`;
}

//assigns AC dexterity bonus, missile attack bonus, and initiative bonus
function dexMod(x){
    let acBonus;
    let misBonus;
    let initBonus;
    if (x==3) {
        acBonus = -3;
        misBonus = -3;
        initBonus = -2;
    } else if (x==4||x==5){
        acBonus = -2;
        misBonus = -2;
        initBonus = -1;
    } else if (x >= 6 && x <= 8){
        acBonus = -1;
        misBonus = -1;
        initBonus = -1;
    } else if (x >=9 && x <=12){
        acBonus = 0;
        misBonus = 0;
        initBonus = 0;
    } else if (x >= 13 && x <=15) {
        acBonus = 1;
        misBonus = 1;
        initBonus = 1;
    } else if (x==16||x==17) {
        acBonus = 2;
        misBonus = 2;
        initBonus = 1;
    } else {
        acBonus = 3;
        misBonus = 3;
        initBonus = 21;
    }
    document.getElementById("acBonus").innerHTML = `${acBonus}`;
    document.getElementById("initBonus").innerHTML = `${initBonus}`;
    document.getElementById("misBonus").innerHTML = `${misBonus}`;
}

//assigns constitution modifier for HP rolls
function conMod(x){
    let mod;
    if (x==3) {
        mod = -3;
    } else if (x==4||x==5){
        mod = -2;
    } else if (x >= 6 && x <= 8){
        mod = -1;
    } else if (x >=9 && x <=12){
        mod = 0;
    } else if (x >= 13 && x <=15) {
        mod = 1;
    } else if (x==16||x==17) {
        mod = 2;
    } else {
        mod = 3;
    }
    document.getElementById("CONmod").innerHTML = `<b>CON modifier:</b> ${mod}`;
    globalCONmod = mod;
}

//determines reaction roll CHA modifiers, max number of retainers, and their loyalty rating
function chaMod(x){
    let react;
    let retMax;
    let retLoyal;
    if (x==3) {
        react = -2;
        retMax = 1;
        retLoyal = 4;
    } else if (x==4||x==5){
        react = -1;
        retMax = 2;
        retLoyal = 5;
    } else if (x >= 6 && x <= 8){
        react = -1;
        retMax = 3;
        retLoyal = 6;
    } else if (x >=9 && x <=12){
        react = 0;
        retMax = 4;
        retLoyal = 7;
    } else if (x >= 13 && x <=15) {
        react = 1;
        retMax = 5;
        retLoyal = 8;
    } else if (x==16||x==17) {
        react = 1;
        retMax = 5;
        retLoyal = 9;
    } else {
        react = 2;
        retMax = 7;
        retLoyal = 10;
    }
    document.getElementById("CHAmod").innerHTML = `${react}`;
    document.getElementById("retMax").innerHTML = `<b>Maximum Number of Retainers:</b> ${retMax}`;
    document.getElementById("retLoyal").innerHTML = `<b>Retainer Loyalty:</b> ${retLoyal}`;
}

//resticts kindred options by Attribute Score results. WIS doesn't seem to be a gate.
function kinRestrictor(str,int,wis,dex,con,cha){
    let kinRestrictionsByCON = ["duergar","dwarf","gnome","half_elf","halfling","svirfneblin","dragonborn","mycelian","gargantua"];
    let kinRestrictionsByINT = ["drow","duergar","elf","gnome","phase_elf","wood_elf","dragonborn","tiefling"];
    let kinRestrictionsByDEX = ["halfling","wood_elf"];
    let kinRestrictionsByCHA = ["half_elf"];
    let kinRestrictionsBySTR = ["gargantua"];
    if (int < 9) {
        for (i=0;i<kinRestrictionsByINT.length; i++) {
            document.getElementById(kinRestrictionsByINT[i]).disabled = true;
            document.getElementById('label_'+kinRestrictionsByINT[i]).style.textDecoration = "line-through";
        }
    }
    if (con < 9) {
        for (i=0;i<kinRestrictionsByCON.length; i++) {
            document.getElementById(kinRestrictionsByCON[i]).disabled = true;
            document.getElementById('label_'+kinRestrictionsByCON[i]).style.textDecoration = "line-through";
        }
    }
    if (dex < 9){
        for (i=0;i<kinRestrictionsByDEX.length; i++) {
            document.getElementById(kinRestrictionsByDEX[i]).disabled = true;
            document.getElementById('label_'+kinRestrictionsByDEX[i]).style.textDecoration = "line-through";
        }
    }
    if (cha < 9) {
        for (i=0;i<kinRestrictionsByCHA.length; i++) {
            document.getElementById(kinRestrictionsByCHA).disabled = true;
            document.getElementById('label_'+kinRestrictionsByCHA[i]).style.textDecoration = "line-through";
        }
    }
    if (str < 9) {
        for (i=0;i<kinRestrictionsBySTR.length; i++) {
            document.getElementById(kinRestrictionsBySTR).disabled = true;
            document.getElementById('label_'+kinRestrictionsBySTR[i]).style.textDecoration = "line-through";
        }
    }
}
//adds class restrictions based on Attribute Scores
function attkinClassRestrictor(str,int,wis,dex,con,cha){
    if (int < 9){
        globalAttributeClassRestrictions.push("bard","illusionist");
    }
    if (wis < 9){
        globalAttributeClassRestrictions.push("ranger");
    }
    if (dex < 9){
        globalAttributeClassRestrictions.push("barbarian","bard","knight");
    }
    if (con < 9){
        globalAttributeClassRestrictions.push("knight","ranger");
    }
    if (cha < 9){
        globalAttributeClassRestrictions.push("paladin");
    }
}

function gargOdMod(){
    let od = document.getElementById("OD").innerHTML;
    if (od == 1){
        od = 2;
    }else if (od == 2) {
        od = 3;
    } else if (od == 3) {
        od = 4;
    } else if (od == 4) {
        od = 5;
    }
    document.getElementById("OD").innerHTML = od;
}

//restrict class options based on kindred selection
//writes kindred abilities to "abilities" HTML element
function kinClassRestrictor(x){
    let allowed = [];
    let restricted =[];
    let available = allClasses;
    document.getElementById("OD").hidden = false;
    document.getElementById("gOD").hidden = true;
    document.getElementById("CTRow").hidden = true;
    if (x=="dragonborn") {
        allowed = dragonborn.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = dragonborn.abilities;
        bloodlineGen();
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${dragonborn.languages}`;
        document.getElementById("LD").innerHTML = dragonborn.LD;
        document.getElementById("SD").innerHTML = dragonborn.SD;
        document.getElementById("FT").innerHTML = dragonborn.FT;
        dragonbornNamer();
    } else if (x=="drow") {
        allowed = drow.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = drow.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${drow.languages}`;
        document.getElementById("LD").innerHTML = drow.LD;
        document.getElementById("SD").innerHTML = drow.SD;
        document.getElementById("FT").innerHTML = drow.FT;
        drowNamer();
    } else if (x=="duergar") {
        allowed = duergar.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = duergar.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${duergar.languages}`;
        document.getElementById("LD").innerHTML = duergar.LD;
        document.getElementById("SD").innerHTML = duergar.SD;
        document.getElementById("CTRow").hidden = false;
        document.getElementById("FT").innerHTML = duergar.FT;
        duergarNamer();
    } else if (x=="dwarf") {
        allowed = dwarf.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = dwarf.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${dwarf.languages}`;
        document.getElementById("LD").innerHTML = dwarf.LD;
        document.getElementById("SD").innerHTML = dwarf.SD;
        document.getElementById("CTRow").hidden = false;
        document.getElementById("FT").innerHTML = dwarf.FT;
        dwarfNamer();
    } else if (x=="elf") {
        allowed = elf.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = elf.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${elf.languages}`;
        document.getElementById("LD").innerHTML = elf.LD;
        document.getElementById("SD").innerHTML = elf.SD;
        document.getElementById("FT").innerHTML = elf.FT;
        elfNamer();
    } else if (x=="gargantua") {
        let odMod = document.getElementById("OD").innerHTML;
        odMod = (parseInt(odMod))+1;
        document.getElementById("gOD").innerHTML = odMod;
        document.getElementById("gOD").hidden = false;
        document.getElementById("OD").hidden = true;
        allowed = gargantua.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = gargantua.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${gargantua.languages};`
        //gargOdMod();
        document.getElementById("LD").innerHTML = gargantua.LD;
        document.getElementById("SD").innerHTML = gargantua.SD;
        document.getElementById("FT").innerHTML = gargantua.FT;
        gargantuaNamer();
    } else if (x=="gnome") {
        allowed = gnome.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = gnome.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${gnome.languages}`;
        document.getElementById("LD").innerHTML = gnome.LD;
        document.getElementById("SD").innerHTML = gnome.SD;
        document.getElementById("CTRow").hidden = false;
        document.getElementById("FT").innerHTML = gnome.FT;
        gnomeNamer();
    }  else if (x=="goblin") {
        allowed = goblin.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = goblin.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${dragonborn.languages}`;
        document.getElementById("LD").innerHTML = goblin.LD;
        document.getElementById("SD").innerHTML = goblin.SD;
        document.getElementById("CTRow").hidden = false;
        document.getElementById("FT").innerHTML = goblin.FT;
        goblinNamer();
    } else if (x=="halfling") {
        allowed = halfling.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = halfling.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${halfling.languages}`;
        document.getElementById("LD").innerHTML = halfling.LD;
        document.getElementById("SD").innerHTML = halfling.SD;
        document.getElementById("FT").innerHTML = halfling.FT;
        halflingNamer();
    } else if (x=="half_elf") {
        allowed = half_elf.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = half_elf.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${half_elf.languages}`;
        document.getElementById("LD").innerHTML = half_elf.LD;
        document.getElementById("SD").innerHTML = half_elf.SD;
        document.getElementById("FT").innerHTML = half_elf.FT;
        half_elfNamer();   
    } else if (x=="half_orc") {
        allowed = half_orc.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = half_orc.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${half_orc.languages}`;
        document.getElementById("LD").innerHTML = half_orc.LD;
        document.getElementById("SD").innerHTML = half_orc.SD;
        document.getElementById("FT").innerHTML = half_orc.FT;
        orcNamer();
    } else if (x=="hephaestan") {
        allowed = hephaestan.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = hephaestan.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${hephaestan.languages}`;
        document.getElementById("LD").innerHTML = hephaestan.LD;
        document.getElementById("SD").innerHTML = hephaestan.SD;
        document.getElementById("FT").innerHTML = hephaestan.FT;
        hephaestanNamer();
    } else if (x=="human") {
        allowed = human.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = human.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${human.languages}`;
        document.getElementById("LD").innerHTML = human.LD;
        document.getElementById("SD").innerHTML = human.SD;
        document.getElementById("FT").innerHTML = human.FT;
        humanNamer();
    } else if (x=="mutoid") {
        allowed = mutoid.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = mutoid.abilities;
        mutationGen();
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${mutoid.languages}`;
        document.getElementById("LD").innerHTML = mutoid.LD;
        document.getElementById("SD").innerHTML = mutoid.SD;
        document.getElementById("FT").innerHTML = mutoid.FT;
        mutoidNamer();
    } else if (x=="mycelian") {
        allowed = mycelian.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = mycelian.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${mycelian.languages}`;
        document.getElementById("LD").innerHTML = mycelian.LD;
        document.getElementById("SD").innerHTML = mycelian.SD;
        document.getElementById("FT").innerHTML = mycelian.FT;
        mycelianNamer();
    } else if (x=="phase_elf") {
        allowed = phase_elf.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = phase_elf.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${phase_elf.languages}`;
        document.getElementById("LD").innerHTML = phase_elf.LD;
        document.getElementById("SD").innerHTML = phase_elf.SD;
        document.getElementById("FT").innerHTML = phase_elf.FT;
        phaseElfNamer();
    } else if (x=="svirfneblin") {
        allowed = svirfneblin.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = svirfneblin.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${svirfneblin.languages}`;
        document.getElementById("LD").innerHTML = svirfneblin.LD;
        document.getElementById("SD").innerHTML = svirfneblin.SD;
        document.getElementById("CTRow").hidden = false;
        document.getElementById("FT").innerHTML = svirfneblin.FT;
        svirfneblinNamer();
    } else if (x=="tiefling") {
        allowed = tiefling.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = tiefling.abilities;
        genGifts();
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${tiefling.languages}`;
        document.getElementById("LD").innerHTML = tiefling.LD;
        document.getElementById("SD").innerHTML = tiefling.SD;
        document.getElementById("FT").innerHTML = tiefling.FT;
        tieflingNamer();
    } else if (x=="wood_elf") {
        allowed = wood_elf.classes;
        restricted = arrayContrast(available,allowed);
        pushArrYElementsToArrX(globalKinClassRestrictions,restricted);
        document.getElementById("abilities").innerHTML = wood_elf.abilities;
        document.getElementById("knownLanguages").innerHTML = `<b>Languages Known:</b> ${wood_elf.languages}`;
        document.getElementById("LD").innerHTML = wood_elf.LD;
        document.getElementById("SD").innerHTML = wood_elf.SD;
        document.getElementById("FT").innerHTML = wood_elf.FT;
        woodElfNamer();
    }
};

function savingThrowAllocator(cls,lvl){
    console.log(`lvl in savingThrowAllocator is ${lvl} and is a ${lvl}`);
    let death;
    let wands;
    let para;
    let breath;
    let spells;
    let ab;
    if (cls=="acrobat"||cls=="assassin"||cls=="bard"||cls=="thief") {
        if (lvl<=4){
            i=0;
            ab=0;
        } else if (lvl >= 5 && lvl <= 8){
            i=1;
            ab=2;
        } else if (lvl >= 9 && lvl <= 12){
            i=2;
            ab=5;
        } else if (lvl == 13||lvl <= 14){
            i=3;
            ab=7;
        }
        death = st_acroAssBardThief.death[i];
        wands = st_acroAssBardThief.wands[i];
        para = st_acroAssBardThief.para[i];
        breath = st_acroAssBardThief.breath[i];
        spells = st_acroAssBardThief.spells[i];
    } else  if (cls=="barbarian") {
        if (lvl<=3){
            i=0;
            ab=0;
        } else if (lvl >= 4 && lvl <= 6) {
            i=1;
            ab=2;
        } else if (lvl >= 7 && lvl <= 9) {
            i=2;
            ab=5;
        }  else if (lvl >= 10 && lvl <= 12) {
            i=3;
            ab=7;
        } else if (lvl >= 13 && lvl <= 14) {
            i=4;
            ab=9;
        }
        death = st_barbarian.death[i];
        wands = st_barbarian.wands[i];
        para = st_barbarian.para[i];
        breath = st_barbarian.breath[i];
        spells = st_barbarian.spells[i];
    } else if (cls=="cleric"||cls=="druid"||cls=="acolyte"){
        if (lvl<=4){
            i=0;
            ab=0;
        } else if (lvl >= 5 && lvl <= 8) {
            i=1;
            ab=2;
        } else if (lvl >= 9 && lvl <= 12) {
            i=2;
            ab=5;
        }  else if (lvl >= 13 && lvl <= 14) {
            i=3;
            ab=7;
        }
        death = st_clericDruidAcolyte.death[i];
        wands = st_clericDruidAcolyte.wands[i];
        para = st_clericDruidAcolyte.para[i];
        breath = st_clericDruidAcolyte.breath[i];
        spells = st_clericDruidAcolyte.spells[i];
    } else if (cls=="fighter"||cls=="knight"||cls=="ranger"){
        if (lvl<=3){
            i=0;
            ab=0;
        } else if (lvl >= 4 && lvl <= 6) {
            i=1;
            ab=2;
        } else if (lvl >= 7 && lvl <= 9) {
            i=2;
            ab=5
        }  else if (lvl >= 10 && lvl <= 12) {
            i=3;
            ab=7;
        } else if (lvl >= 13 && lvl <= 14){
            i=4;
            ab=9;
        }
        death = st_fighterKnightRanger.death[i];
        wands = st_fighterKnightRanger.wands[i];
        para = st_fighterKnightRanger.para[i];
        breath = st_fighterKnightRanger.breath[i];
        spells = st_fighterKnightRanger.spells[i];
    } else if (cls=="magic_user"||cls=="illusionist"){
        if (lvl<=5){
            i=0;
            ab=0
        } else if (lvl >= 6 && lvl <= 10) {
            i=1;
            ab=2;
        } else if (lvl >= 11 && lvl <= 14) {
            i=2;
            ab=5;
        }
        death = st_magic_user.death[i];
        wands = st_magic_user.wands[i];
        para = st_magic_user.para[i];
        breath = st_magic_user.breath[i];
        spells = st_magic_user.spells[i];
    } else if (cls=="paladin"){
        if (lvl<=3){
            i=0;
            ab=0;
        } else if (lvl >= 4 && lvl <= 6) {
            i=1;
            ab=2;
        } else if (lvl >= 7 && lvl <= 9) {
            i=2;
            ab=5;
        }  else if (lvl >= 10 && lvl <= 12) {
            i=3;
            ab=7;
        } else if (lvl >= 13 && lvl <= 14){
            i=4;
            ab=9;
        }
        death = st_paladin.death[i];
        wands = st_paladin.wands[i];
        para = st_paladin.para[i];
        breath = st_paladin.breath[i];
        spells = st_paladin.spells[i];
    } else if (cls=="beast_master"){
        if (lvl<=4){
            i=0;
            ab=0;
        } else if (lvl >= 5 && lvl <= 8) {
            i=1;
            ab=2;
        } else if (lvl >= 9 && lvl <= 12) {
            i=2;
            ab=5;
        }  else if (lvl >= 13 && lvl <= 14) {
            i=3;
            ab=7;
        }
        death = st_beast_master.death[i];
        wands = st_beast_master.wands[i];
        para = st_beast_master.para[i];
        breath = st_beast_master.breath[i];
        spells = st_beast_master.spells[i];
    } else if (cls=="kineticist"){
        if (lvl<=4){
            i=0;
            ab=2;
        } else if (lvl >= 5 && lvl <= 8) {
            i=1;
            ab=5;
        } else if (lvl >= 9 && lvl <= 12) {
            i=2;
            ab=7;
        }  else if (lvl >= 13 && lvl <= 14) {
            i=3;
            ab=9;
        }
        death = st_kineticist.death[i];
        wands = st_kineticist.wands[i];
        para = st_kineticist.para[i];
        breath = st_kineticist.breath[i];
        spells = st_kineticist.spells[i];
    } else if (cls=="mage"){
        if (lvl<=5){
            i=0;
            ab=0;
        } else if (lvl >= 6 && lvl <= 10) {
            i=1;
            ab=2;
        }  else if (lvl >= 11 && lvl <= 14) {
            i=2;
            ab=5;
        }
        death = st_mage.death[i];
        wands = st_mage.wands[i];
        para = st_mage.para[i];
        breath = st_mage.breath[i];
        spells = st_mage.spells[i];
    }
    document.getElementById("vsDeath").innerHTML=death;
    document.getElementById("vsWands").innerHTML=wands;
    document.getElementById("vsBreath").innerHTML=breath;
    document.getElementById("vsPara").innerHTML=para;
    document.getElementById("vsSpells").innerHTML=spells;
    document.getElementById("attackBonus").innerHTML = ab;


}

//c = class, l = level, s = sides of hit die
function hitDice(cls,lvl,con){
    if (cls=="acrobat"||cls=="assassin"||cls=="illusionist"||cls=="magic_user"||cls=="thief"){
        document.getElementById("hp").innerHTML = `${dice(lvl,4)+con}`;
    } else if (cls=="bard"||cls=="cleric"||cls=="druid"||cls=="kineticist"||cls=="acolyte"||cls=="best_master"){
        document.getElementById("hp").innerHTML = `${dice(lvl,6)+con}`;  
    } else if (cls=="barbarian"||cls=="fighter"||cls=="knight"||cls=="paladin"||cls=="ranger"){
        document.getElementById("hp").innerHTML = `${dice(lvl,8)+con}`;
    }
}

let magic_user_spells = {
    "first" : ["Charm Person","Detect Magic","Floating Disc","Hold Portal","Light (Darkness)","Magic Missile","Protection from Evil","Read Languages","Read Magic","Shield","Sleep","Ventriloquism"],
    "second" : ["Continual Light","Detect Evil","Detect Invisible","ESP","Invisibility","Knock","Levitate","Locate Object","Mirror Image","Phantasmal Force","Web","Wizard Lock"],
    "third" : ["Clairvoyance","Dispel Magic","Fire Ball","Fly","Haste","Hold Person","Infravision","Invisibility (10 ft radius)","Lightning Bolt","Protection from Evil (10 ft. Radius)","Protection from Normal Missiles", "Water Breathing"],
    "fourth" : ["Charm Monster","Confusion","Dimension Door","Growth of Plants","Hallucinatory Terrain","Massmorph","Polymorph Others","Polymorph Self","Remove Curse (Curse)","Wall of Fire","Wall of Ice","Wizard Eye"],
    "fifth" : ["Animate Dead","Cloudkill","Conjure Elemental","Contact Higher Plane","Feeblemind","Hold Monster","Magic Jar","Pass-Wall","Telekinesis","Teleport","Transmute Rock to Mud","Wall of Stone"],
    "sixth" : ["Anti-Magic Shell","Control Weather","Death Spell","Disintegrate","Geas (Remove Geas)","Invisible Stalker","Lower Water","Move Earth","Part Water","Projected Image","Reincarnation","Stone to Flesh (Flesh to Stone)"]
}

let illusionist_spells = {
    "first" : ["Auditory Illusion","Chromatic Orb","Colour Spray","Dancing Lights","Detect Illusion","Glamour","Hypnotism","Light (Darkness)","Phantasmal Force","Read Magic","Spook","Wall of Fog"],
    "second" : ["Blindness/Deafness","Blue","Detect Magic","False Aura","Fascinate","Hypnotic Pattern","Improved Phantasmal Force","Invisibility","Magic Mouth","Mirror Image","Quasimorph","Whispering Wind"],
    "third" : ["Blacklight","Dispel Illusion","Fear","Hallucinatory Terrain","Invisibility (10 ft Radius)","Nondetection","Paralysation","Phantom Steed","Rope Trick","Spectral Force","Suggestion","Wraithform"],
    "fourth" : ["Confusion","Dispel Magic","Emotion","Illusory Stamina","Improved Invisibility","Massmorph","Minor Creation","Phantasmal Killer","Rainbow Pattern","Shadow Monsters","Solid Fog","Veil of Abandonment"],
    "fifth" : ["Chaos","Demi-shadow Monsters","Illusion","Looking Glass","Major Creation","Maze of Mirrors","Projected Image","Seeming","Shadowcast","Shadowy Transformation","Time Flow","Visitation"],
    "sixth" : ["Acid Fog","Dream Quest","Impersonation","Manifest Dream","Mass Suggestion","Mislead","Permanent Illusion","Shades","Through the Looking Glass","Triggered Illusion","True Seeing","Vision"]
}

let cleric_spells = {
    "first" : ["Cure (cause) Light Wounds","Detect Magic","Light (Darkness)","Protection from Evil","Purify Food and Water","Remove Fear (Cause Fear)","Resist Cold"],
    "second" : ["Bless (Blight)","Find Traps","Hold Person","Know Alignment","Resist Fire","Silence (15 ft radius)","Snake Charm","Speak with Animals"],
    "third" : ["Continual Light","Curse Disease","Growth of Animal","Locate Object","Remove Curse (Curse)","Striking"],
    "fourth" : ["Create Water","Cure (cause) Serious Wounds","Neutralize Poison","Protection from Evil (10 ft radius)","Speak with Plants","Sticks to Snakes"],
    "fifth" : ["Commune","Create Food","Dispel Evil","Insect Plague","Quest (Remove Quest)","Raise Dead (Finger of Death)"],
}

let druid_spells = {
    "first" : ["Animal Friendship","Detect Danger","Entangle","Faerie Fire","Invisibility to Animals","Locate Plant or Animal","Predict Weather","Speak with Animals"],
    "second" : ["Barkskin","Create Water","Cure (cause) Light Wounds","Heat Metal","Obscuring Mist","Produce Flame","Slow Poison","Warp Wood"],
    "third" : ["Call Lightning","Growth of Nature","Hold Animal","Protection from Poison","Tree Shape","Water Breathing (Air Breathing)"],
    "fourth" : ["Cure Serious Wounds","Dispel Magic","Protection from Fire and Lightning","Speak with Animals","Summon Animals","Temperature Control"],
    "fifth" : ["Commune with Nature","Control Weather","Pass Plant","Protection from Plants and Animals","Transmute Rock to Mud (Mud to Rock)", "Wall of Thorns"],
}

let necromancer_spells = {
    "first" : [],
    "second" : [],
    "third" : [],
    "fourth" : [],
    "fifth" : [],
    "sixth" : []
}

function spellLoader(cls,lvl) {
    let splsContainer = document.getElementById("spellsContainer");
    let levelOne = document.getElementById("1stLevelSpells");
    let levelTwo = document.getElementById("2ndLevelSpells");
    let levelThree = document.getElementById("3rdLevelSpells");
    let levelFour = document.getElementById("4thLevelSpells");
    let levelFive = document.getElementById("5thLevelSpells");
    let levelSix = document.getElementById("6thLevelSpells");
    if (cls == "bard") {
        splsContainer.hidden = false;
        if (lvl == 1) {
            spls.innerHTML = `Bards gain first spell at Level 2`;
        } else if (lvl == 2){
        }
    } else if (cls == "cleric"){        
        splsContainer.hidden = false;
        if (lvl ==  1){
            levelOne.hidden = false;
            levelOne.innerHTML = `Clerics gain first spell at Level 2`;
        } if (lvl >= 2){
            levelOne.hidden = false;
            levelOne.innerHTML = `<b>1st Level Spells:</b> ${cleric_spells.first[randBetween(cleric_spells.first.length)-1]}`;
        } if (lvl >= 3){ 
            levelOne.innerHTML += `, ${cleric_spells.first[randBetween(cleric_spells.first.length)-1]}`;
        } if (lvl >= 4){
            levelTwo.hidden = false;
            levelTwo.innerHTML = `<b>2nd Level Spells:</b> ${cleric_spells.second[randBetween(cleric_spells.second.length)-1]}`;
        } if (lvl >= 5){
            levelTwo.innerHTML += `, ${cleric_spells.second[randBetween(cleric_spells.second.length)-1]}`;
        } if (lvl >= 6){
            levelThree.hidden = false;
            levelFour.hidden = false;
            levelThree.innerHTML = `<b>3rd Level Spells:</b> ${cleric_spells.third[randBetween(cleric_spells.third.length)-1]}`;
            levelFour.innerHTML = `<b>4th Level Spells:</b> ${cleric_spells.fourth[randBetween(cleric_spells.fourth.length)-1]}`;
        } if (lvl >= 7){
            levelFive.hidden = false;
            levelThree.innerHTML += `, ${cleric_spells.third[randBetween(cleric_spells.third.length)-1]}`;
            levelFive.innerHTML = `<b>5th Level Spells:</b> ${cleric_spells.fifth[randBetween(cleric_spells.fifth.length)-1]}`;
        } if (lvl >= 8){
            levelOne.innerHTML += `, ${cleric_spells.first[randBetween(cleric_spells.first.length)-1]}`;
            levelTwo.innerHTML += `, ${cleric_spells.second[randBetween(cleric_spells.second.length)-1]}`;
            levelFour.innerHTML += `, ${cleric_spells.fourth[randBetween(cleric_spells.fourth.length)-1]}`;
        } if (lvl >= 9){
            levelThree += `, ${cleric_spells.third[randBetween(cleric_spells.third.length)-1]}`;
            levelFive += `, ${cleric_spells.fifth[randBetween(cleric_spells.fifth.length)-1]}`;
        } if (lvl >= 10){
            levelOne.innerHTML += `, ${cleric_spells.first[randBetween(cleric_spells.first.length)-1]}`;
            levelTwo.innerHTML += `, ${cleric_spells.second[randBetween(cleric_spells.second.length)-1]}`;
            levelFour.innerHTML += `, ${cleric_spells.fourth[randBetween(cleric_spells.fourth.length)-1]}`;
        } if (lvl >= 11){
            levelThree += `, ${cleric_spells.third[randBetween(cleric_spells.third.length)-1]}`;
            levelFive += `, ${cleric_spells.fifth[randBetween(cleric_spells.fifth.length)-1]}`;
        } if (lvl >=12){
            levelOne.innerHTML += `, ${cleric_spells.first[randBetween(cleric_spells.first.length)-1]}`;
            levelTwo.innerHTML += `, ${cleric_spells.second[randBetween(cleric_spells.second.length)-1]}`;
            levelFour.innerHTML += `, ${cleric_spells.fourth[randBetween(cleric_spells.fourth.length)-1]}`;
        } if (lvl >=13){
            levelThree += `, ${cleric_spells.third[randBetween(cleric_spells.third.length)-1]}`;
            levelFive += `, ${cleric_spells.fifth[randBetween(cleric_spells.fifth.length)-1]}`;
        } if (lvl >=14){
            levelOne += `, ${cleric_spells.first[randBetween(cleric_spells.first.length)-1]}`;
            levelFour.innerHTML += `, ${cleric_spells.fourth[randBetween(cleric_spells.fourth.length)-1]}`;
        }
    } else if (cls == druid) {
        splsContainer.hidden = false;
        if (lvl == 1){
            spls.innerHTML = `${druid_spells.first[randBetween(druid_spells.first.length)-1]}`;
        }
    } else if (cls == illusionist){
        splsContainer.hidden = false;
        if (lvl == 1) {
            spls.innerHTML = `${illusionist_spells.first[randBetween(illusionist_spells.first.length)-1]}`
        }
    } else if (cls == magic_user){
        splsContainer.hidden = false;
        if (lvl == 1){
            spls.innerHTML = `${magic_user_spells[randBetween(magic_user_spells.length)-1]}`
        }
    } else if (cls == paladin){
        splsContainer.hidden = false;
        if (lvl == 1){
            spls.innerHTML = `Paladins gain first spell at Level 2`;
        }
    } else if (cls == ranger){
        splsContainer.hidden = false;
        if (lvl > 8){
            spls.innerHTML = `Rangers gain first spell at Level 8`;
        }
    } else {
        splsContainer.hidden = true;
        spls.innerHTML = "";
    }
}
