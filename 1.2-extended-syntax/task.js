"use strict";


function getResult(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let x;
    if (discriminant === 0) {
        x = [-b / 2 * a];
    } else if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / 2 * a;
        let x2 = (-b - Math.sqrt(discriminant)) / 2 * a;
        x = [x1, x2];
    } else {
        x = [];
    }
    return x;
}

function getAverageMark(marks) {
    let averageMark;
    if (marks.length === 0) {
        averageMark = 0;
    } else {
        let marksSum = 0;
        let targetMarksNum = 5;
        if (marks.length > targetMarksNum) {
            console.log("введено более 5 оценок");
            let newMarksArr = marks.splice(0, 5);
            for (let i = 0; i < marks.length; i++) {
                marksSum += newMarksArr[i];
            }
        } else {
            for (let i = 0; i < marks.length; i++) {
                marksSum += marks[i];
            }
        }
        averageMark = marksSum / marks.length;
    }
    return averageMark;
}


function askDrink(name, dateOfBirthday) {
    let currentDate = new Date();
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let currentYear = currentDate.getFullYear();
    let age = currentYear - yearOfBirthday;
    let result;

    currentDate.setFullYear(yearOfBirthday);
    switch (true) {
        case age >= 18:
            result = `Не желаете ли олд-фэшн, ${name}?`;
            break;
        case age < 18:
            result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}