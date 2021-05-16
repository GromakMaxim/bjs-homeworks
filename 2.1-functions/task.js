function getSolutions(a, b, c) {
    let d = Math.pow(b, 2) - (4 * a * c);
    let roots = [];
    let answer = {
        D: d,
        roots
    }
    if (d < 0) return answer;
    if (d == 0) {
        answer.roots.push((-b) / (2 * a));
        return answer;
    }
    if (d > 0) {
        answer.roots.push(((-b) + Math.sqrt(d)) / (2 * a));
        answer.roots.push(((-b) - Math.sqrt(d)) / (2 * a));
    }
    return answer;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log("Вычисляем корни квадратного уравнения " + a + "x\u00B2 + " + b + "x + " + c);
    console.log("Значение дискриминанта: " + result.D);

    if (result.D < 0) console.log("Уравнение не имеет вещественных корней");
    if (result.D > 0) console.log("Уравнение имеет два корня. X₁ = " + result.roots[0] + ", X₂ = " + result.roots[1]);
    if (result.D == 0) console.log("Уравнение имеет один корень X₁=" + result.roots[0]);
}

showSolutionsMessage(1, 2, 3);
console.log("---------------------------------------------------------------");
showSolutionsMessage(7, 20, -3);
console.log("---------------------------------------------------------------");
showSolutionsMessage(2, 4, 2);
console.log("---------------------------------------------------------------");


function getAverageScore(data) {
    let sum = 0;
    let resultAverageObj = new Object();
    if (isEmpty(data)) {
        resultAverageObj.average = 0;
        return resultAverageObj;
    }

    for (let subj in data) {
        let value = data[subj];
        resultAverageObj[`${subj}`] = getAverageMark(value);
        sum = sum + getAverageMark(value);
    }
    resultAverageObj.average = sum / Object.keys(resultAverageObj).length;
    return resultAverageObj;
}

function getAverageMark(arr) {
    return (arr.length == 0) ? 0 : arr.reduce((a, b) => (a + b), 0) / arr.length;
}

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


function getPersonData(secretData) {
    let resultObj = {
        firstName: "",
        lastName: ""
    };
    resultObj.firstName = getDecodedValue(secretData['aaa']);
    resultObj.lastName = getDecodedValue(secretData['bbb']);

    return resultObj;
}

function getDecodedValue(secret) {
    return (secret === 1) ? "Эмильо" : "Родриго";
}

console.log(getPersonData({ aaa: 0, bbb: 0 }));
console.log(getPersonData({ aaa: 1, bbb: 0 }));
console.log(getPersonData({ aaa: 0, bbb: 1 }));
console.log(getPersonData({ aaa: 1, bbb: 1 }));