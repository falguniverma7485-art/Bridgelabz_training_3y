
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null,
    { id: 5, amount: 1200 }
];

let validTransactions = [];
let invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        let transaction = transactions[i];

        // Check for null entries first.
        if (transaction === null) {
            throw new Error("Null transaction");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("Missing transaction ID or amount");
        }

        if (transaction.amount < 0) {
            throw new Error("Negative transaction amount");
        }

        validTransactions.push(transaction);
        console.log("Valid transaction:", transaction);

        // Set a breakpoint here to inspect each transaction.
    } catch (error) {
        invalidTransactions.push({
            index: i + 1,
            reason: error.message
        });

        console.log("Transaction error:", error.message);
    }
}

console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);
