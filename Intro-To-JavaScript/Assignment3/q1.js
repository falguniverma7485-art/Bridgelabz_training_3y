
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidValues = [];

for (let i = 0; i < apiData.length; i++) {
    let value = apiData[i];
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    console.log("Original Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    // Blank strings and values that become NaN are invalid numbers.
    if (typeof value === "string" && value.trim() === "" || Number.isNaN(numberValue)) {
        invalidValues.push(value);
        console.log("Invalid numeric value:", value);
    } else {
        validNumbers.push(numberValue);
    }

    console.log("----------------------");
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidValues);
