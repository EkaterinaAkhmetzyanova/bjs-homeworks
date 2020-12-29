"use strict"
//Задача 1
function isPalindrome(string) {
    this.string = string.toLowerCase().replace(/\s+/g, '').split('');
    let originalString = this.string.join('');
    let reversedString = this.string.reverse().join('');
    if (originalString !== reversedString) {
        return false;
    } else {
        return true;
    }
}

String.prototype.isPalindrome = function() {
    return this.string;
}

//Задача 2
function getAverageMark(marks) {
    let marksSum = 0;
    if (marks.length === 0) {
        return 0;
    }
    for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
    }
    let average = marksSum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = Date.now();
    let birthdayDate = new Date(birthday);
    birthday = +birthdayDate;
    let diff = now - birthday;
    let age = diff / (24 * 60 * 60 * 1000 * 365.25);
    return (age >= 18);
}