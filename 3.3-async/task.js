class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
        console.log("будильник создан")
    }

    getCurrentFormattedTime = () => String(new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).format(new Date()));

    addClock(alarmTime, func, id) {
        if (typeof id === "undefined") throw new Error("cant find \"id\" param");
        if (this.alarmCollection.some(item => item.id === id)) {
            console.error("such time already exists");
        } else {
            this.alarmCollection.push({ alarmTime, func, id });
            this.timerId = id;
        }
    }

    removeClock(id) {
        let foundItem = this.alarmCollection.filter(item => item.id == id);
        if (foundItem.length == 0) return false;
        let index = this.alarmCollection.indexOf(foundItem);
        this.alarmCollection.splice(index, 1);
        return true;
    }
    printAlarms() {
        this.alarmCollection.forEach(element => {
            console.log("Будильник: " + element.id + " " + element.alarmTime);
        });
    }

    checkClock(call) {
        if (this.getCurrentFormattedTime() === call.alarmTime) {
            call.func();
            this.removeClock(call.id)
        }
    }

    start() {
        let f = () => this.alarmCollection.forEach(call => this.checkClock(call));
        this.timerId = setInterval(f, 100);
    }
    stop() {
        if (this.timerId != "undefined") {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    clearAlarms() {
        this.alarmCollection.forEach(element => {
            clearInterval(element.id);
        });
        this.alarmCollection.length = 0;
    }
}