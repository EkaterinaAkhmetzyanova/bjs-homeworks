"use strict";


function getResult(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let x = [];
    if (discriminant === 0) {
        x = [-b / 2 * a];
    } else if (discriminant > 0) {
        x = [(-b + Math.sqrt(discriminant)) / 2 * a, (-b - Math.sqrt(discriminant)) / 2 * a];
    }
    return x;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("введено более 5 оценок");
        marks = marks.slice(0, 5);
    }
    let marksSum = 0;
    for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
    }
    return marksSum / marks.length;
}


function askDrink(name, dateOfBirthday) {
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
}