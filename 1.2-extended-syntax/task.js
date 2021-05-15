function getResult(a, b, c) {
    "use strict";
    let resultArr = new Array;
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let x1, x2;
    if (discriminant < 0) return resultArr;

    if (discriminant == 0) {
        x1 = ((-b) / (2 * a));
        resultArr.push(x1);
        return resultArr;
    }
    x1 = ((-b) + Math.sqrt(discriminant)) / (2 * a);
    x2 = ((-b) - Math.sqrt(discriminant)) / (2 * a);
    resultArr.push(x1);
    resultArr.push(x2);
    return resultArr;
}

function getAverageMark(marks) {
    if (marks.length == 0) return 0;
    if (marks.length > 5) marks.length = 5;
    return marks.reduce((a, b) => (a + b)) / marks.length;
}

function askDrink(name, dateOfBirthday) {
    let currentDate = new Date().getFullYear();
    let birthday = dateOfBirthday.getFullYear();
    return (currentDate - birthday) >= 18 ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
}