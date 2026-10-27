"use strict";

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showSubject = function() {
    console.log("Subject: " + this.subject);
};

function Professor(name, subject, room) {
    Faculty.call(this, name, subject);
    this.room = room;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showRoom = function() {
    console.log("Room: " + this.room);
};

let professor1 = new Professor("Nimisha", "JavaScript", "Lab 204");

professor1.showName();
professor1.showSubject();
professor1.showRoom();