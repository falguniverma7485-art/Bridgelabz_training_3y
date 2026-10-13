
let age = 20;
let isCitizen = true;

if (isCitizen && age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
} else if (isCitizen && age >= 18) {
    console.log("Eligible for all services.");
} else if (!isCitizen && age >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}

console.log("Age:", age);
console.log("Citizen:", isCitizen);