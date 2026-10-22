
"use strict";

const rawData = [
    '{"user":"Zoya","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Nivaan","age":"22"}'
];

let cleanData = [];
let errorList = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let person = JSON.parse(rawData[i]);

        
        if (person.user === undefined || person.age === undefined) {
            throw new Error("Missing user or age");
        }

        let age = Number(person.age);

        if (Number.isNaN(age)) {
            throw new Error("Invalid age");
        }

        person.age = age;
        cleanData.push(person);
        console.log("Valid entry:", person);

    } catch (error) {
        errorList.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Error at line ${i + 1}: ${error.message}`);
    }
}


let underAgeUsers = cleanData.filter(person => person.age < 18);

console.log("Clean Data:", cleanData);
console.log("Error List:", errorList);
console.log("Under-18 Users:", underAgeUsers);
console.log("Valid Count:", cleanData.length);
console.log("Invalid Count:", errorList.length);
