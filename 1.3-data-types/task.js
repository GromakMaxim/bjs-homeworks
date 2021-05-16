function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    let dateDiff = date - new Date(); //difference between 2 dates in ms

    //validate everything
    if (dateDiff < 0 || typeof date != "object") return "Параметр \"Срок ипотеки\" содержит неправильное значение " + date.toLocaleString();
    if (amount <= 0 || typeof amount != "number") return "Параметр \"Общая стоимость\" содержит неправильное значение " + amount;
    if (percent <= 0 || typeof percent != "number") return "Параметр \"Процентная ставка\" содержит неправильное значение " + percent;
    if (contribution < 0 || typeof contribution != "number") return "Параметр \"Первоначальный взнос\" содержит неправильное значение " + contribution;
    if (contribution >= amount) return 0;

    let creditBody = amount - contribution;

    let creditMonth = Math.floor(dateDiff / 60000 / 1440 / 30);
    let persentPerMonth = percent / 100 / 12;
    let monthlyPayment = creditBody * (persentPerMonth + (persentPerMonth / (Math.pow((1 + persentPerMonth), creditMonth) - 1)));
    let totalPaymant = Math.round((monthlyPayment * creditMonth) * 100) / 100;
    return totalPaymant;
}

function getGreeting(name) {
    return (name == "" || typeof name != "string") ? "Привет, мир! Меня зовут Аноним." : `Привет, мир! Меня зовут ${name}.`;
}