
let userName = "Falguni";
let age = 19;
let isStudent = true;
let subjects = ["JavaScript", "HTML", "CSS"];
let student = { name: "Falguni", course: "B.Tech CSE" };
let address = null;
let result;

let data = [userName, age, isStudent, subjects, student, address, result];
let types = [];

for (let value of data) {
    let type = typeof value;

    if (Array.isArray(value)) {
        type = "array";
    }

    types.push({
        Value: value === undefined ? "undefined" : JSON.stringify(value),
        Type: type
    });
}

console.table(types);