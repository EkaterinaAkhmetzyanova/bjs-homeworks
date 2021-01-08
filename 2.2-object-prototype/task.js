"use strict"
//Задача 1
String.prototype.isPalindrome = function isPalindrome() {
    const str = this;
    const string = this.toLowerCase().replace(/\s+/g, '').split('');
    const originalString = string.join('');
    const reversedString = string.reverse().join('');
    return originalString === reversedString;
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
    const average = marksSum / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    const now = Date.now();
    const parsedBirthday = new Date(birthday).getTime();
    const dateOfBirth = +parsedBirthday;
    const diff = now - dateOfBirth;
    const age = diff / (24 * 60 * 60 * 1000 * 365.25);
    return (age >= 18);
}