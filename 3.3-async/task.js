"use strict";
//Задача 1
class AlarmClock {
    constructor(id, alarmCollection) {
        this.alarmCollection = [];
        this.timerId = null;
        this.id = "";
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error("Идентификатор звонка id не передан");
        }
        if (this.alarmCollection.find(item => item.id === id)) {
            console.error(`Будильник с таким id ${id} уже существует`);
            return null;
        }
        this.alarmCollection.push({ id: id, time: time, callback: callback });
    }

    removeClock(id) {
        return this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
    }

    getCurrentFormattedTime() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) {
            hours = `0${hours}`;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return date = `${hours}:${minutes}`;
    }

    start() {
        const checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback(alarm);
            }
        };

        const checkAlarmCollection = () => { this.alarmCollection.forEach(alarm => checkClock(alarm)) };

        this.timerId = setInterval(checkAlarmCollection, 1000);
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(this.alarmCollection.forEach(alarm => { return `Будильник ${alarm.id} - ${alarm.time}` }));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

const alarm = new AlarmClock();
alarm.addClock('16:20', () => console.log("Спать"), 1);
alarm.addClock("16:21", () => {
    console.log("Вставай уже");
    alarm.removeClock(2)
}, 2);
alarm.addClock("16:21", () => console.log("Ну же!"));
alarm.addClock("16:22", () => {
    console.log("Вставай, вставай!");
    alarm.clearAlarms();
    alarm.printAlarms();
}, 3);