"use strict";

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

class StudentClass extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

let oldStudent = new Student("Vihana", "CSE");
let newStudent = new StudentClass("Vihana", "CSE");

console.log("Prototype version:");
oldStudent.showName();
oldStudent.showBranch();

console.log("Class version:");
newStudent.showName();
newStudent.showBranch();