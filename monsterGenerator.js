
var addOns = [
    GetNumber(0, 100) + GetAdjective() + "come out of its" + GetBodyPart() + ".",
    "Its" + GetPosition() + GetBodyPart() + "is" + GetAdjective(),
    "Its" + GetBodyPart() + "secretes a " + GetAdjective() + "liquid.",
    "It lies in a" + GetAdjective() + GetEnvironment() + ".",
];

//----------------------------------------------------------
function ButtonPressed() 
{
    document.getElementById("monsterText").innerHTML = GetTemplate();
}
function CreatedMonster() 
{
}

function GetTemplate() {
    var startTemplates = [
        `A ${GetAnimal()}-like creature with ${GetNumber(0, 100)} ${GetBodyPart()}.`,
        `A ${GetAdjective()}monster living in${GetEnvironment()}.`,
        `A ${GetAdjective()}monster with a${GetAnimal()}${GetBodyPart()}and a${GetAnimal()}${GetBodyPart()}`, 
    ];
    var selectedTemplate = startTemplates[0];

    return selectedTemplate;
}
function GetAnimal() {
    var animals = [" cat " ," cow "," dog "," fox "," hippopotamus "," human "," pig "," swan "," tiger "," wolf ",];
    var selectedAnimal = animals[Rand(0, animals.length)];

    return selectedAnimal;
}
function GetAdjective() {
    var adjectives = [" awsome " ," cute "," damaged "," flawed "," humongous "," purple "," swollen "," tired "," wounded ",];
    var selectedAdj = adjectives[Rand(0, adjectives.length)];

    return selectedAdj; 
}
function GetBodyPart() {
    var bodyparts = [" arms " ," body "," butt "," feet ", " hands ", " head ", " leg ", " neck ", " shoulder ", " tail ", " waist "];
    var selectedBodyPart = bodyparts[Rand(0, bodyparts.length)];

    return selectedBodyPart;
}
function GetEnvironment() {
    var environment = [" cat " ," cow "," dog "," fox "," hippopotamus "," human "," pig "," swan "," tiger "," wolf ",];
    var selectedEnvironment = environment[Rand(0, environment.length)];

    return selectedEnvironment;
}
function GetNumber(min, max) {
    var selectedNum = Rand(min, max);

    return selectedNum;
}
function GetPosition() {
    var positions = [" left " ," right "," first "," top "," bottom "," main "];
    var selectedPositions = positions[Rand(0, positions.length)];

    return selectedPositions;
}

//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function Rand(min, max) {
    randInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randInt - 1;
}
