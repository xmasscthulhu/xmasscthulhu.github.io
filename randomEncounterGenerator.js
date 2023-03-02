function timeOfDay() {
    let checkBox = document.getElementById("timeCheck");
    let day = document.getElementById("dayEncounter");
    let night = document.getElementById("nightEncounter");
    if (checkBox.checked == true) {
        day.style.display = "block";
        night.style.display = "none";
        //document.getElementById("mainDiv").style.backgroundColor = "rgb(185, 231, 188)";
    } else {
        night.style.display = "block";
        day.style.display = "none";
        //document.getElementById("mainDiv").style.backgroundColor = "rgb(59, 0, 168)";
        //document.getElementsByTagName("input").style.color = "red";
    }
}

function dayRoadEnc() {
    d8 = randomInteger(8,1);
    console.log(d8);
    if (d8 === 1) {
        return 'animal';
    } else if (d8 === 2 || d8 === 3){
        return 'human';
    } else if (d8 === 4) {
        return 'monster';
    } else if (d8 === 5 || d8 === 6) {
        return 'sentient';
    } else {
        return 'regional';
    }
}

function dayWildEnc() {
    d8 = randomInteger(8,1);
    console.log(d8);
    if (d8 === 1) {
        return 'animal';
    } else if (d8 === 2){
        return 'human';
    } else if (d8 === 3) {
        return 'monster';
    } else if (d8 === 4) {
        return 'sentient';
    } else {
        return 'regional';
    }
}

function nightFireEnc() {
    d8 = randomInteger(8,1);
    console.log(d8);
    if (d8 === 1 || d8 === 2) {
        return 'human';
    } else if (d8 === 3 || d8 === 4){
        return 'monster';
    } else if (d8 === 5 || d8 === 6) {
        return 'sentient';
    } else {
        return 'regional';
    }
}

function nightNoFireEnc() {
    d8 = randomInteger(8,1);
    console.log(d8);
    if (d8 === 1 || d8 === 2) {
        return 'animal';
    } else if (d8 === 3 || d8 === 4 || d8 === 5){
        return 'monster';
    } else {
        return 'regional';
    }
}

function reactionRoller() {
    let d6x2 = randomArrayItem(5,0) + randomArrayItem(5,0);
    if (d6x2 <= 2) {
        return `hostile`;
    } else if (d6x2 >= 3 && d6x2 <= 5) {
        return `unfriendly`;
    } else if (d6x2 >= 6 && d6x2 <= 8) {
        return `neutral`;
    } else if (d6x2 >=9 && d6x2 <=11) {
        return `indifferent`;
    } else if (d6x2 >= 12) {
        return `friendly`;
    }
}

function regionSwapper() {
    let d20 = randomArrayItem(19,0);
    let region = document.getElementById("region").value;
    console.log("encounter is in " + region);
    if (region === 'Aldweald') {
        return `<strong>${aldwealdEncounter[d20]}</strong>`;
    } else if (region === 'Dwelmfurgh') {
        return `<strong>${dwelmfurghEncounter[d20]}</strong>`;
    } else if (region === 'Fever Marsh') {
        return `<strong>${feverMarshEncounter[d20]}</strong>`;
    } else if (region === "Hag's Addle") {
        return `<strong>${hagsAddleEncounter[d20]}</strong>`;
    } else if (region === 'High Wold') {
        return `<strong>${highWoldEncounter[d20]}</strong>`;
    } else if (region === 'Mulchgrove') {
        return `<strong>${mulchgroveEncounter[d20]}</strong>`;
    } else if (region === 'Nagwood') {
        return `<strong>${nagwoodEncounter[d20]}</strong>`;
    } else if (region === 'Northern Scratch') {
        return `<strong>${northernScratchEncounter[d20]}</strong>`;
    } else if (region === 'Table Downs') {
        return `<strong>${tablesDownsEncounter[d20]}</strong>`;
    } else if (region === 'Tithelands') {
        return `<strong>${tithelandsEncounter[d20]}</strong>`;
    } else if (region === 'Valley of Wise Beasts') {
        return `<strong>${wiseBeastEncounters[d20]}</strong>`;
    }
}

function primaryEncounter(x) {
    let time = x;
    let d20 = randomArrayItem(19,0);
    let encType = "";
    if (x === 'dayroad') {
        encType = dayRoadEnc();
    } else if (x === 'daywild'){
        encType = dayWildEnc()
    } else if (x === 'nightfire'){
        encType = nightFireEnc();
    } else if (x === 'nightnofire'){
        encType = nightNoFireEnc();
    } else if (x === 'aquatic') {
        encType = 'aquatic';
    }
    let behavior = '';
    let encounter = '';
    if (encType === 'animal') {
        encounter = `${reactionRoller()} <strong>${animalEncounter[d20]}</strong>`;
    } else if (encType === 'human') {
        encounter = `<strong>${humanEncounter[d20]}</strong>`;
        behavior = primaryBehavior(time);
    } else if (encType === 'monster') {
        encounter = `<strong>${monsterEncounter[d20]}</strong>`;
        behavior = primaryBehavior(time);
    } else if (encType === 'sentient') {
        encounter = `<strong>${sentientEncounter[d20]}</strong>`;
        behavior = primaryBehavior(time);
    } else if (encType === 'regional') {
        encounter = regionSwapper();
        behavior = primaryBehavior(time);
    } else if (encType === 'aquatic') {
        encounter = `${reactionRoller()} <strong>${aquaticEncounters[d20]}</strong>`;
    }
    return encounter + " " + behavior;
}

function primaryBehavior(time){
    d20 = randomArrayItem(19,0);
    secEnc = ''
    console.log("behavior roll is " + d20);
    let behavior = activity[d20];
    if (d20 >= 15) {
        secEnc = secondaryEncounter(time);
        return behavior + secEnc;
    } else {
        return behavior;
    }
}

function secondaryEncounter(time) {
    let secondEnc = primaryEncounter(time);
    return secondEnc;
}

//for grabbing random items in arrays
function randomArrayItem(max,min) {
    return Math.floor(Math.random() * (max-min))+min;
}

//for generating random numbers in general
function randomInteger(max,min) {
    return Math.floor(Math.random() * (max-min+1))+min;
}

function encounterGenerator(x) {
    let primary = primaryEncounter(x);
    document.getElementById("encounterText").innerHTML = primary
    document.getElementById("encounterDiv").style.display = "block";
}