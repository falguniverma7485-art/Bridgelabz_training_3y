
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return Math.pow(a, b);

        case "root":
            if (a < 0) {
                throw new Error("Cannot find the real square root of a negative number");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default: {
            let error = new Error("Operation not recognized");
            error.name = "InvalidOperationError";
            throw error;
        }
    }
}

for (let i = 0; i < operations.length; i++) {
    try {
        let operation = operations[i];
        let result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operations[i]} error: ${error.name} - ${error.message}`);
    }
}


try {
    console.log("Root:", calculate("root", -9, 0));
} catch (error) {
    console.log("Root error:", error.message);
}

try {
    console.log(calculate("multiply", num1, num2));
} catch (error) {
    console.log("Calculator error:", error.name, error.message);
}
