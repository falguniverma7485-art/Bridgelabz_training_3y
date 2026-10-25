
"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        let annualSalary = this.getAnnualSalary();
        return annualSalary + (annualSalary * percent / 100);
    }
}

const employees = [
    new Employee(11, "Vritika", "Design", 42000),
    new Employee(12, "Yuvaan", "Accounts", 38000),
    new Employee(13, "Samaira", "Support", 35000),
    new Employee(14, "Reyansh", "Development", 51000),
    new Employee(15, "Kashvi", "Marketing", 40000)
];

employees.forEach(employee => {
    console.log("Employee:", employee.name);
    console.log("Department:", employee.department);
    console.log("Annual Salary:", employee.getAnnualSalary());
    console.log("Salary after 8% bonus:", employee.applyBonus(8));
    console.log("-------------------------");
});


let totalPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Company Payout:", totalPayout);
