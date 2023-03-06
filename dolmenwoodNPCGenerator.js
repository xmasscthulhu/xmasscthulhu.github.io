//returns a random number between max and min with both max and min included
function dieRoller (max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//input number of dice and highest value of die-type (e.g. 3d6 would be num = 3, hiVal = 6)
function dice (num, hiVal) {
    let roll = 0;
    for (i = 0; i < num; i++) {
        roll += dieRoller (hiVal,1);
    }
    return roll;
}

function arrayItemGrabber(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//LOADERS

//combines given names and surnames for nameLoader
function givenPlusSurname (given, surname) {
    let rndGiven = given[arrayItemGrabber(given.length,0)];
    let rndSur = surname[arrayItemGrabber(surname.length,0)];
    return rndGiven + " " + rndSur;
}

function nameLoader(npcClass){
    let cls = npcClass;
    let rndElfName = arrayItemGrabber(npcNames.elf_names.length,0);
    let rndMossDwarfName = arrayItemGrabber(npcNames.mossDwarf_name.length,0);
    let name = "";
    if (cls === friar || cls === hunter || cls === knight || cls === minstrel) {
        name = givenPlusSurname(npcNames.human_givenName,npcNames.human_surname)
    } else if (cls === elf) {
        name = npcNames.elf_names[rndElfName];
    } else if (cls === goatfolk) {
        name = givenPlusSurname(npcNames.goatfolk_givenName,npcNames.goatfolk_surname);
    } else if (cls === mossDwarf) {
        name = npcNames.mossDwarf_name[rndMossDwarfName];
    } else if (cls === grimalkin) {
        name = givenPlusSurname(npcNames.grimalkin_givenName,npcNames.grimalkin_surname)
    } else if (cls === woodgrue) {
        name = givenPlusSurname(npcNames.woodgrue_givenNames,npcNames.woodgrue_surnames);
    }
    return name;
}

function abilityScoreLoader() {
    return `<strong>STR</strong> ${dice(3,6)} <strong>INT</strong> ${dice(3,6)} <strong>WIS</strong> ${dice(3,6)} <br> <strong>DEX</strong> ${dice(3,6)} <strong>CON</strong> ${dice(3,6)} <strong>CHA</strong> ${dice(3,6)}`;
}

function traitLoader() {

}

function armourLoader(cls) {
    let armMax = cls.armor.length;
    let armRnd = dieRoller (armMax-1,0);
    let armour = cls.armor[armRnd];
    return armour;
}

function mundaneItems() {
    d4 = dice (1,4);
    mndItems = randomItems[dieRoller(randomItems.length-1,0)];
    for (i = 0; i < d4; i++) {
        mndItems += ", " + randomItems[dieRoller(randomItems.length-1,0)];
    }
    return mndItems;
}

function commaSperator(array) {
    arr = array.length;
    if (arr < 1) {
        return "";
    } else if (arr >= 1) {
        return ", ";
    }
}

function magicItemLoader(npcLevel) {
    let lvl = npcLevel
    let d20 = 0;
    let items = "";
    let mundane = mundaneItems();
    //let itemA = "";
    //let itemA = dieRoller(magicItems.magicItemsI.length-1,0);
    let itemB = dieRoller(magicItems.magicItemsII.length-1,0);
    let itemC = dieRoller(magicItems.magicItemsIII.length-1,0);
    let itemD = dieRoller(magicItems.magicItemsIV.length-1,0);

    for (let i = 0; i < lvl; i++) {
        d20 = dieRoller(20,1);
        if (d20 === 20) {
            items += _.shuffle(magicItems.magicItemsI).slice(0,1)
        }
    }
    for (let i = 0; i < lvl; i++) {
        d20 = dieRoller(20,1);
        if (d20 === 20) {
            items += commaSperator(items) + _.shuffle(magicItems.magicItemsII).slice(0,1);
        }
    }
    for (let i = 0; i < lvl; i++) {
        d20 = dieRoller(20,1);
        if (d20 === 20) {
            items += commaSperator(items) + _.shuffle(magicItems.magicItemsIII).slice(0,1);
        }
    }
    for (let i = 0; i < lvl; i++) {
        d20 = dieRoller(20,1);
        if (d20 === 20) {
            items += commaSperator(items) + _.shuffle(magicItems.magicItemsIV).slice(0,1);
        }
    }
    if (items.length === 0) {
        return `<strong>Mundane Items:</strong> <em>${mundane}</em>`;
    } else {
        return `<strong>Magic Items:</strong> <em>${items}</em> <br> <strong>Mundane Items:</strong> <em>${mundane}</em>`;
    }
}


function hornLoader (cls,lvl) {
    if (cls === goatfolk) {
        if (lvl <= 3) {
            return ", or horns (1d4)";
        } else if (lvl >= 4 && lvl <= 6) {
            return ", or horns (1d6)";
        } else if (lvl >= 7 && lvl <= 9) {
            return ", or horns (1d8)";
        } else {
            return ", or horns (1d10)";
        }
    } else {
        return "";
    }
}

function weaponLoader(cls,lvl) {
    let wpnMax = cls.weapons.length;
    let wpnRnd = cls.weapons[dieRoller(wpnMax-1,0)]
    let isWpnMgc = magicWeaponChecker(lvl);
    let mgcWpn = "";
    let wpn = ""
    let horns = hornLoader(cls,lvl);
    if (isWpnMgc === true) {
        mgcWpn = magicWeaponLoader(cls);
        return mgcWpn + horns;
    } else {
        wpn = wpnRnd;
        console.log(wpn);
        return wpn + horns;
    }
}

//magic weapon loaders
//if magic item is sword, this defines its type
function magicSwordTypifier() {
    let x = dieRoller(6,1);
    if (x > 5) {
        return "Two-handed Sword (1d10)";
    } else if (x > 2 && x < 6) {
        return "Sword (1d8)";
    } else {
        return "Short Sword (1d6)";
    }
}

function magicWeaponLoader(npcClass) {
    let cls = npcClass;
    let mgcMeleeRnd = dieRoller(49,32);
    let mgcWpnRndFriar = dieRoller(58,58); //randomly selects from "friar-safe" weapons
    let mgcSwdRnd = dieRoller(31,0);
    let mgcWpnRnd = dieRoller(magicWeaponTables.length,33);
    let mgcWpn = magicWeaponTables[mgcWpnRnd];
    let swordType = magicSwordTypifier();
    let isItASword = magicSwordChecker();
    if (cls === friar) {
        mgcWpn = magicWeaponTables[mgcWpnRndFriar];
        console.log(mgcWpn);
    } else if (cls === knight) {
        if (isItASword === false) {
            mgcWpn = magicWeaponTables[mgcMeleeRnd];
            console.log(mgcWpn);
        } else {
            mgcWpn = swordType + magicWeaponTables[mgcSwdRnd];
            console.log(mgcWpn);
        }
    } else {
        if (isItASword === false) {
            mgcWpn = magicWeaponTables[mgcWpnRnd];
            console.log(mgcWpn);
        } else {
            mgcWpn = swordType + magicWeaponTables[mgcSwdRnd];
            console.log(mgcWpn);
        }
    }
    return mgcWpn;
}

function hitPointLoader(npcClass, npcLevel) {
    let cls = npcClass;
    let lvl = npcLevel;
    console.log("cls is " + cls);
    console.log("lvl is " + lvl);
    let hp = 0;
    let hd = lvl+1;
    let i = 0;
    if (cls === friar){
        while (i <= lvl) {
            hp += dieRoller(4,1);
            console.log(hp)
            i++;
        }
    } if (cls === hunter || cls === knight) {
        while (i <= lvl) {
            hp += dieRoller(8,1);
            i++;
        } 
    } else {
        while (i <= lvl) {
            hp += dieRoller(6,1);
            i++;
        }
    }
    console.log("HP " + hp);
    return hp;
}

function spellLoader(npcClass,npcLevel) {
    let cls = npcClass;
    let lvl = npcLevel;
    let spellsKnown = "";
    let glamours = glamourList;
    let glamoursKnown = "";
    let knacks = mossDwarf.knacks;
    let knackKnown = "";
    if (cls === friar) {
        switch (lvl) {
            case 0 : //npc lvl 1
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                break;
            case 1 : //npc lvl 2
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                break;
            case 2 : //npc lvl 3
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                break;
            case 3 : //npc lvl 4
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                break;
            case 4 : //npc lvl 5
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[3][dieRoller(cls.spells[3].length-1,0)];
                break;
            case 5 : //npc lvl 6
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[3][dieRoller(cls.spells[3].length-1,0)];
                spellsKnown += ", " + cls.spells[3][dieRoller(cls.spells[4].length-1,0)];
                break;
            case 6 : //npc lvl 7
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[3][dieRoller(cls.spells[3].length-1,0)];
                spellsKnown += ", " + cls.spells[3][dieRoller(cls.spells[3].length-1,0)];
                spellsKnown += ", " + cls.spells[4][dieRoller(cls.spells[4].length-1,0)];
                break;
            case 7 : //npc lvl 8
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[3][dieRoller(cls.spells[3].length-1,0)];
                spellsKnown += ", " + cls.spells[3][dieRoller(cls.spells[3].length-1,0)];
                spellsKnown += ", " + cls.spells[4][dieRoller(cls.spells[4].length-1,0)];
                spellsKnown += ", " + cls.spells[4][dieRoller(cls.spells[4].length-1,0)];
                break;
            case 8 : //npc lvl 9
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[3][dieRoller(cls.spells[3].length-1,0)];
                spellsKnown += ", " + cls.spells[3][dieRoller(cls.spells[3].length-1,0)];
                spellsKnown += ", " + cls.spells[3][dieRoller(cls.spells[3].length-1,0)];
                spellsKnown += ", " + cls.spells[4][dieRoller(cls.spells[4].length-1,0)];
                spellsKnown += ", " + cls.spells[4][dieRoller(cls.spells[4].length-1,0)];
        }
        return `<strong>Spells:</strong> <em>${spellsKnown}</em>`;
    } else if (cls === elf) {
        switch (lvl) {
            case 0 : //lvl 1
                glamoursKnown = _.shuffle(glamours).slice(0,1);
                break;
            case 1 : //lvl 2
                glamoursKnown = _.shuffle(glamours).slice(0,2);
                break;
            case 2 : case 3 ://lvl 3 and 4
                glamoursKnown = _.shuffle(glamours).slice(0,3);
                break;
            case 4 : //lvl 5
                glamoursKnown = _.shuffle(glamours).slice(0,4);
                break;
            case 5 : //lvl 6
                glamoursKnown = _.shuffle(glamours).slice(0,5);
                break;
            case 6 : case 7 : //lvl 7 and 8
                glamoursKnown = _.shuffle(glamours).slice(0,6);
                break;
            case 8 : //lvl 9
                glamoursKnown = _.shuffle(glamours).slice(0,7);
                break;
            case 9 : //lvl 10
                glamoursKnown = _.shuffle(glamours).slice(0,8);
                break;
        }
        return `<strong>Glamours:</strong><em>${glamoursKnown}</em>`;
    } else if (cls === grimalkin) {
        switch (lvl) {
            case 0 : //lvl 1
                glamoursKnown = _.shuffle(glamours).slice(0,1);
                break;
            case 1 : //lvl 2
                glamoursKnown = _.shuffle(glamours).slice(0,2);
                break;
            case 2 : case 3 : //lvl 3 and 4
                glamoursKnown = _.shuffle(glamours).slice(0,3);
                break;
            case 4 : //lvl 5
                glamoursKnown = _.shuffle(glamours).slice(0,4);
                break;               
            case 5 : //lvl 6
                glamoursKnown = _.shuffle(glamours).slice(0,5);
                break;
            case 6 : case 7 : //lvl 7 and 8
                glamoursKnown = _.shuffle(glamours).slice(0,6);
                break;
            case 8 : case 9 : //lvl 9 and 10
                glamoursKnown = _.shuffle(glamours).slice(0,7);
                break;
        } return `<strong>Glamours:</strong><em>${glamoursKnown}</em>`; 
    } else if (cls === mossDwarf) {
        knackKnown += knacks[dieRoller(6,1)-1];
        return `<strong>Knack:</strong> <em>${knackKnown}</em>`;
    } else if (cls === goatfolk) {
        switch (lvl) {
            case 0 : case 1 : case 2 :
                spellsKnown = "";
                break;
            case 3 :
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                break;
            case 4 :
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                break;
            case 5 : 
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                break;
            case 6 : 
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                break;
            case 7 :
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                break;
            case 8 :
                spellsKnown = cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[0][dieRoller(cls.spells[0].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[1][dieRoller(cls.spells[1].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                spellsKnown += ", " + cls.spells[2][dieRoller(cls.spells[2].length-1,0)];
                break;
        } return `<strong>Spells:</strong> <em>${spellsKnown}</em>`;
    } else {
        return "";
    }
}

//loads saves and thac0 based on level and character class
function statsLoader(npcClass, npcLevel) {
    let cls = npcClass;
    let lvl = npcLevel+1;
    let thac0 = "";
    let saves = "";
    if (cls === elf) {
        if (lvl <= 3) {
            saves = "D12 W13 P13 B15 S12";
            thac0 = "19 [0]";
        } else if (lvl >= 4 || lvl <= 7) {
            saves = " D10 W11 P11 B13 S10";
            thac0 = " 17 [+2]";
        } else if (lvl >= 9) {
            saves = "D8 W9 P9 B10 S8";
            thac0 = "14 [+5]";
        }
    } else if (cls === friar){
        if (lvl <= 4) {
                saves = 'D11 W12 P14 B16 S15';
                thac0 = '19 [0]';
        } else if (lvl >= 5 || lvl <= 8) {
                saves = 'D9 W10 P12 B14 S12';
                thac0 = '17 [+2]';
        } else if (lvl >=9) {
                saves = 'D6 W7 P9 B11 S9';
                thac0 = '14 [+5]';
        }
    } else if (cls === goatfolk || cls === hunter || cls === knight) {
        if (lvl <= 3) {
            saves = "D12 W13 P14 B15 S16";
            thac0 = "19[0]";
        } else if (lvl >= 4 || lvl <= 6){
            saves = "D10 W11 P12 B13 S14";
            thac0 = "17 [+2]";
        } else if (lvl >= 7){
            saves = "D8 W9 P10 B10 S12";
            thac0 = "14 [+5]";
        }
    } else if (cls === grimalkin) {
        if (lvl <= 4) {
            saves = "D11 W12 P14 B16 S15";
            thac0 = "19 [0]";
        } else if (lvl >= 5 || lvl <= 8) {
            saves = "D9 W10 P12 B14 S12";
            thac0 = "17 [+2]";
        } else if (lvl > 9) {
            saves = "D7 W8 P10 B12 S10";
            thac0 = "14 [+5]";
        }
    } else if (cls === minstrel) {
        if (lvl <= 4) {
            saves = "D13 W14 P13 B16 S15";
            thac0 = "19 [0]";
        } else if (lvl >= 5 || lvl <= 8) {
            saves = "D12 W13 P11 B14 S13";
            thac0 = "17 [+2]";   
        } else if (lvl >= 9) {
            saves = "D10 W11 P9 B12 S10";
            thac0 = "14 [+5]";
        }
    } else if (cls === mossDwarf) {
        if (lvl <= 3) {
            saves = "D8 W9 P10 B13 S12";
            thac0 = "19 [0]";
        } else if (lvl >= 4 || lvl <= 6) {
            saves = "D6 W7 P8 B10 S10";
            thac0 = "17 [+2]";
        } else if (lvl >= 7) {
            saves = "D4 W5 P6 B7 S8";
            thac0 = "14 [+5]";            
        }
    } 
    console.log("THAC0 " + thac0 + " Saves " + saves);
    return [thac0, saves];
}

function traitLoader() {
    let rndPers1 = _.shuffle(npcDesc.personality).slice(0,1);
    let rndPers2 = _.shuffle(npcDesc.personality).slice(0,1);
    let rndDesc = _.shuffle(npcDesc.description).slice(0,1);
    return `${rndPers1}, ${rndPers2}, ${rndDesc}`
}

//checkers
//checks if NPC has a magic weapon
function magicWeaponChecker(lvl) {
    let d20 = 0;
    let isWpnMgc = 0;
    for (let i = 0; i < lvl; i++) {
        d20 = dieRoller(20,1);
        isWpnMgc = Boolean(d20 == 20);
        if (d20 === 20) { break }
    }
    return isWpnMgc;
}

//checks if magic weapon is a sword
function magicSwordChecker() {
    let x = dieRoller(5,1);
    if (x < 5) {
        return true;
    } else {
        return false;
    }
}

function speedChecker(armor) {
    let light = armor.includes("Leather");
    let unarmored = armor.includes("Cloth");
    if (light === true) {
        return "90 (30)";
    } else if (unarmored === true) {
        return "120 (40)";
    } else {
        return "60 (20)";
    }
}

function submission() {
    document.getElementById("npcPartyText").style.display = "block";
    let x = document.getElementById('classChoice');
    let y = document.getElementById('levelChoice');
    let classValue = JSON.parse(x.value);
    let classObj = eval(classValue.class);
    let classTitle = classValue.class;
    console.log(classValue.class);
    let levelValue = parseInt(y.value)-1;
    npcGenerator(classObj,levelValue,classTitle);
}

function npcGenerator(npcClass,npcLevel,npcTitle) {
    let cls = npcClass;
    let lvl = npcLevel;
    let title = npcTitle;
    let name = nameLoader(cls);
    let traits = traitLoader();
    let ac = armourLoader(cls);
    let mv = speedChecker(ac);
    let hp = hitPointLoader(cls,lvl);
    let wpn = weaponLoader(cls,lvl);
    let stats = statsLoader(cls,lvl);
    let items = magicItemLoader(lvl);
    let spls = spellLoader(cls,lvl);
    let ability = abilityScoreLoader();
    document.getElementById("npcStatBlock").innerHTML += `${name}<br><em>${traits}</em><br><strong>Level ${lvl+1} ${title}</strong> <br>
    ${ability} <br> <strong>AC</strong> ${ac} <strong>HP</strong> ${hp} <strong>Att</strong> 1 x ${wpn}
    <strong>THAC0</strong> ${stats[0]} <strong>MV</strong> ${mv} <strong>SV</strong> ${stats[1]} ${spls} ${items} <br>
    <br>`;
}

function partyLevel() {
    d12 = dice(1,12);
    if (d12 <= 3) {
        return 1;
    } else if (d12 === 4 || d12 === 5) {
        return 2;
    } else if (d12 === 6 || d12 === 7) {
        return 3;
    } else if (d12 === 8) {
        return 4;
    } else if (d12 === 9) {
        return 5;
    }else if (d12 === 10) {
        return 6;
    } else if (d12 === 11) {
        return 7;
    }else if (d12 === 12) {
        return 8;
    }
}

function partyGenerator() {
    document.getElementById("npcPartyText").style.display = "block";
    let partySize = dieRoller(4,1)+4;
    console.log("party size is " + partySize);
    let levelValue = 5;
    let classOptions = document.getElementById('classChoice')
    let classValue = JSON.parse(classOptions[dieRoller(8,0)].value);
    let classObj = eval(classValue.class);
    let classTitle = classValue.class;
    for (let i = 0; i < partySize; i++) {
        levelValue = partyLevel();
        classOptions = document.getElementById('classChoice')
        classValue = JSON.parse(classOptions[dieRoller(8,0)].value);
        classObj = eval(classValue.class);
        classTitle = classValue.class;
        npcGenerator(classObj,levelValue,classTitle);
   }
}

function copyToClipboard(){
    let copyText = document.getElementById("npcStatBlock").innerText;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}