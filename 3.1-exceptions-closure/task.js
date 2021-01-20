"use strict"
//Задача 1
function parseCount(parsedNum) {
    const parsedResult = Number.parseInt(parsedNum);
    if (Number.isNaN(parsedResult)) {
        const parseError = new Error("Невалидное значение");
        throw parseError;
    }
    return parsedResult;
}

function validateCount(parsedNum) {
    try {
        parseCount(parsedNum);
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

        if ((this.a + this.b) < this.с || (this.a + this.c) < this.b || (this.b + this.c) < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let area = Math.sqrt((this.getPerimeter() / 2) * ((this.getPerimeter() / 2) - this.a) * ((this.getPerimeter() / 2) - this.b) * ((this.getPerimeter() / 2) - this.c));
        return area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        // return triangle.getPerimeter(), triangle.getArea();
    }
}