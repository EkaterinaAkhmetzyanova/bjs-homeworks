"use strict"
//Задача 1
function parseCount(parsedNum) {
    const parsedResult = Number.parseInt(parsedNum);
    if (Number.isNaN(parsedResult)) {
        throw new Error("Невалидное значение");
    }
    return parsedResult;
}

function validateCount(parsedNum) {
    try {
        return parseCount(parsedNum);
    } catch (e) {
        return e;
    }
}

//Задача 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const halfPerimeter = (this.getPerimeter() / 2);
        const area = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        const triangle = {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }
        }
        return triangle;
    }
}