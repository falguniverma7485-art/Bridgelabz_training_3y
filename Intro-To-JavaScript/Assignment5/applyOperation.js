"use strict";

function applyOperation(numbers, operation) {
    let result = [];

    for (let num of numbers) {
        result.push(operation(num));
    }

    return result;
}

let numbers = [1, 2, 3, 4];

let doubled = applyOperation(numbers, function(num) {
    return num * 2;
});

let squared = applyOperation(numbers, function(num) {
    return num * num;
});

console.log("Doubled:", doubled);
console.log("Squared:", squared);