
"use strict";

const employees = [
    { name: "Meher", salary: "45000", years: "5" },
    { name: "Tanish", salary: "38000", years: "2" },
    { name: "Ira", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
    try {
        let employee = employees[i];

        if (!employee || employee.salary === undefined || employee.years === undefined) {
            throw new Error("Employee details are missing");
        }

        let salary = Number(employee.salary);
        let years = Number(employee.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error("Salary or years is not a valid number");
        }

        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        console.log(`${employee.name}: Salary = ₹${salary}, Experience = ${years} years, Bonus = ₹${bonus}`);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
