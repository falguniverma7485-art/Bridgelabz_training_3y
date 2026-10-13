
let salary = 30000;
let incrementRate = 10;
let salaryDetails = [];

for (let year = 1; year <= 5; year++) {
    salary = salary + (salary * incrementRate / 100);
    salary = Math.round(salary);

    salaryDetails.push({
        Year: year,
        Salary: salary
    });
}

console.table(salaryDetails);