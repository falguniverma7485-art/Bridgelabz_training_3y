
let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;
    let totalSalary = salary;

    if (isPermanent === true) {
        totalSalary = salary + bonus;
    }

    console.log("Salary:", salary);
    console.log("Bonus:", isPermanent ? bonus : 0);
    console.log("Total Salary:", totalSalary);
}

calculateSalary(true);
calculateSalary(false);

console.log("Global bonus:", bonus);