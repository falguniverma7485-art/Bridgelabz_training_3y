"use strict";

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is working in " + this.department);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    work() {
        console.log(this.name + " is managing the " + this.department + " team");
    }
}

let employee1 = new Employee("Ritvik", "Accounts");
let employee2 = new Manager("Ira", "Development");

employee1.work();
employee2.work();