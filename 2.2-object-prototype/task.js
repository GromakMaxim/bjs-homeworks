String.prototype.isPalindrome = function() {
    let str = this.replace(/\s/g, '').toLowerCase();
    let reversedStr = this.replace(/\s/g, '').toLowerCase().split('').reverse().join('');
    return str == reversedStr;
};

function getAverageMark(marks) {
    let average = (marks.length == 0) ? 0 : marks.reduce((a, b) => (a + b), 0) / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;

}

function isLeapYear(year) {
    var d = new Date(year, 1, 28);
    d.setDate(d.getDate() + 1);
    return d.getMonth() == 1;
}

function checkBirthday(birthday) {
    birthday = new Date(birthday);
    let now = new Date();
    let years = now.getFullYear() - birthday.getFullYear();

    birthday.setFullYear(birthday.getFullYear() + years);
    if (birthday > now) {
        years--;
        birthday.setFullYear(birthday.getFullYear() - 1);
    }
    let days = (now.getTime() - birthday.getTime()) / (3600 * 24 * 1000);
    let age = years + days / (isLeapYear(now.getFullYear()) ? 366 : 365);
    return age > 18;
}