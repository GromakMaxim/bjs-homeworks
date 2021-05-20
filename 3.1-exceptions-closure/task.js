function parseCount(valueToParse) {
    let parsedValue = Number.parseInt(valueToParse);
    if (isNaN(parsedValue)) throw new Error("Невалидное значение");
    return parsedValue;
}

function validateCount(valueToParse) {
    let parsedValue;
    try {
        parsedValue = parseCount(valueToParse);
    } catch (err) {
        return err;
    }
    return parsedValue;
}

class Triangle {
    constructor(side1, side2, side3) {
        if ((side1 + side2 < side3) || (side1 + side3 < side2) || (side2 + side3 < side1)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
    getArea() {
        let p = this.getPerimeter() / 2;
        return Math.round(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3)) * 1000) / 1000;
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch (err) {
        return errTriangle = {
            getPerimeter() { return "Ошибка! Треугольник не существует" },
            getArea() { return "Ошибка! Треугольник не существует" }
        }
    }
}