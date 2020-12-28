    "use strict";

    //Задача 1
    function getSolutions(a, b, c) {
        let D = Math.pow(b, 2) - 4 * a * c;
        if (D < 0) {
            return { D: D, roots: [] };
        } else if (D === 0) {
            let x1 = -b / (2 * a);
            return { D: D, roots: [x1] };
        } else if (D > 0) {
            let x1 = (-b + Math.sqrt(D)) / (2 * a);
            let x2 = (-b - Math.sqrt(D)) / (2 * a);
            return { D: D, roots: [x1, x2] };
        }
    }

    function showSolutionsMessage(a, b, c) {
        let result = getSolutions(a, b, c);
        console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
        console.log(`Значение дискриминанта: ${result.D}`);
        if (result.D < 0) {
            console.log("Уравнение не имеет вещественных корней");
        } else if (result.D === 0) {
            console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
        } else if (result.D > 0) {
            console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
        }
    }

    showSolutionsMessage(1, 2, 3);
    showSolutionsMessage(7, 20, -3);
    showSolutionsMessage(2, 4, 2);

    //Задача 2
    function getAverageScore(data) {
        let disciplinesNum = 0;
        let totalMarksSum = 0;
        for (let discipline in data) {
            let marks = data[discipline];
            let averageMark = getAverageMark(marks);
            data[discipline] = averageMark;
            totalMarksSum += averageMark;
            disciplinesNum++;
        }
        data.average = (disciplinesNum == 0) ? 0 : totalMarksSum / disciplinesNum;
        return data;
    }

    function getAverageMark(marks) {
        let marksSum = 0;
        if (marks.length === 0) {
            return 0;
        }
        for (let i = 0; i < marks.length; i++) {
            marksSum += marks[i];
        }
        return marksSum / marks.length;
    }

    console.log(getAverageScore({
        algebra: [2, 4, 5, 2, 3, 4],
        geometry: [2, 4, 5],
        russian: [3, 3, 4, 5],
        physics: [5, 5],
        music: [2, 2, 6],
        english: [4, 4, 3],
        poetry: [5, 3, 4],
        chemistry: [2],
        french: [4, 4]
    }));

    //Задача 3
    function getPersonData(secretData) {
        return {
            firstName: getDecodedValue(secretData.aaa),
            lastName: getDecodedValue(secretData.bbb)
        };
    }

    function getDecodedValue(secret) {
        if (secret === 0) {
            return "Родриго";
        } else if (secret === 1) {
            return "Эмильо";
        }
    }

    console.log(getPersonData({
        aaa: 0,
        bbb: 0
    }));
    console.log(getPersonData({
        aaa: 1,
        bbb: 0
    }));
    console.log(getPersonData({
        aaa: 0,
        bbb: 1
    }));
    console.log(getPersonData({
        aaa: 1,
        bbb: 1
    }));