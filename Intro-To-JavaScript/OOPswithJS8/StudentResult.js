"use strict";

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        let average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 75) {
            return "B";
        } else if (average >= 60) {
            return "C";
        } else {
            return "F";
        }
    }
}

let student1 = new Student("Aarohi", [88, 92, 85, 90]);
let student2 = new Student("Vihaan", [76, 81, 79, 84]);
let student3 = new Student("Mishika", [45, 52, 48, 55]);

let students = [student1, student2, student3];

students.forEach(function(student) {
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("--------------------");
});