const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

let getNames = () => weapons.map(weapon => weapon.name);

let getCountReliableWeapons = (durability) => weapons.filter(weapon => weapon.durability > durability).length;

let hasReliableWeapons = (durLimit) => weapons.some(weapon => weapon.durability > durLimit);

let getReliableWeaponsNames = (durLimit) => weapons
    .filter(weapon => weapon.durability > durLimit)
    .map(weapon => weapon.name);

let getTotalDamage = () => weapons.map(weapon => weapon.attack).reduce((a, b) => (a + b));


function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {

    }
}

function sum(...args) {
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((a, b) => (a + b));
}

let compareArrays = (arr1, arr2) => arr1.join(``) === arr2.join(``);

function memorize(fn, limit) {
    let memory = [];
    return (...args) => {
        const tempObj = {};
        let foundInMemory = memory.find(item => compareArrays(item.args, [...args]));
        if (typeof foundInMemory != "undefined") return foundInMemory.result;

        tempObj.args = [...args];
        tempObj.result = fn(...args);
        memory.push(tempObj);
        if (memory.length > limit) memory.shift();
        return tempObj.result;
    }
}