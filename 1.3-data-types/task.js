"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let morgageDetails = {
        percent,
        contribution,
        amount
    }

    for (let prop in morgageDetails) {
        if (Number.isNaN(parseInt(morgageDetails[prop]))) {
            return `Параметр ${prop} содержит неправильное значение ${morgageDetails[prop]}`;
        }
    }

    let S = amount - contribution;
    let currentDate = new Date();
    let n = (date.getFullYear() - currentDate.getFullYear()) * 12 - (currentDate.getMonth() - date.getMonth());
    let P = percent / 100 / 12;
    let paymentPerMonth = S * (P + P / (Math.pow(1 + P, n) - 1));
    let totalAmount = (paymentPerMonth * n).toFixed(2);
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    //let username;
    if (name == null || name == '' || name == undefined) {
        name = 'Аноним';
    }

    return `Привет, мир! Меня зовут ${name}.`;
}