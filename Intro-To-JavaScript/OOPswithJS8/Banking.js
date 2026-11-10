"use strict";

class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero");
        }

        this.#balance += amount;
        console.log("Amount Deposited: Rs.", amount);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Enter a valid withdrawal amount");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }

        this.#balance -= amount;
        console.log("Amount Withdrawn: Rs.", amount);
    }

    getBalance() {
        return this.#balance;
    }
}

let account1 = new BankAccount(8500);

try {
    account1.deposit(2500);
    console.log("Current Balance: Rs.", account1.getBalance());

    account1.withdraw(3000);
    console.log("Current Balance: Rs.", account1.getBalance());

    account1.withdraw(15000);

} catch (error) {
    console.log("Transaction Failed:", error.message);
}

console.log("Final Balance: Rs.", account1.getBalance());