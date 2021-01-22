"use strict";

//Задача 1
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(durability) {
    const reliableWeaponsNum = weapons.filter(weapon => weapon.durability > durability);
    return reliableWeaponsNum.length;
}

function hasReliableWeapons(durability) {
    return weapons.some(weapon => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
    return weapons.filter(weapon => weapon.durability > durability).map(weapon => weapon.name);
}

function getTotalDamage() {
    return weapons.map(weapon => weapon.attack).reduce((sum, item) => { return sum + item }, 0);
}

// function getValuestCountToSumValues(numArr, sum) {
//     let totalSum = numArr.reduce((sum, item) => { return sum + item }, 0);
//     if (totalSum <= sum) {
//         return numArr.length;
//     } else {
//     return 
//     }
// }

//Задача 2
function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return (arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]));
}

function memorize(fn, limit) {
    const memory = [];
    return function(...args) {
        const search = memory.find(item => { return compareArrays(item.args, args) });
        if (search) {
            return search.result;
        } else {
            const result = fn(...args);
            if (memory.length > limit) {
                memory.shift();
            }
            memory.push({ args, result });
            return result;
        }
    }
}