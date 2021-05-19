class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.fieldState = 100;
        this.type = null;
    }
    set state(item) {
        if (item < 0) this.fieldState = 0;
        if (item > 100) this.fieldState = 100;
        if (item >= 0 && item <= 100) this.fieldState = item;
    }

    get state() {
        return this.fieldState;
    }

    fix() {
        this.state = this.fieldState * 1.5;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) this.books.push(book);
    }
    findBookBy(type, value) {
        for (let book in this.books) {
            if (this.books[book][type] == value) return this.books[book];
        }
        return null;
    }
    deleteBookFromLibrary(name) {
        for (let index in this.books) {
            if (this.books[index]["name"] == name) this.books.splice(index, 1);
        }
    }

    giveBookByName(bookName) {
        let requestedBook = this.findBookBy("name", bookName);
        if (requestedBook != null) {
            this.deleteBookFromLibrary(bookName);
            return requestedBook;
        } else {
            return null;
        }
    }
}

class StudentLog {
    constructor(studentName) {
        this.studentName = studentName;
        this.ratingSheet = {};
    }
    getName() {
        return this.studentName;
    }

    addGrade(grade, subject) {
        if (subject != null && subject != "" && grade > 0 && grade < 6) {
            if (typeof this.ratingSheet[subject] == "undefined") {
                this.ratingSheet[subject] = [grade];
                return this.ratingSheet[subject].length;
            } else {
                this.ratingSheet[subject].push(grade);
                return this.ratingSheet[subject].length;
            }
        } else {
            console.log("Вы пытались поставить оценку \"" + grade + "\" по предмету \"" + subject + "\". Допускаются только числа от 1 до 5.")
        }
    }
    getAverageBySubject(subject) {
        if (typeof this.ratingSheet[subject] != "undefined") {
            let arr = this.ratingSheet[subject];
            return (arr.length == 0) ? 0 : arr.reduce((a, b) => (a + b), 0) / arr.length;
        }
    }

    getTotalAverage() {
        let superArr = [];
        for (let item in this.ratingSheet) {
            superArr = superArr.concat(this.ratingSheet[item]);
        }
        return (superArr.length == 0) ? 0 : superArr.reduce((a, b) => (a + b), 0) / superArr.length;
    }

}