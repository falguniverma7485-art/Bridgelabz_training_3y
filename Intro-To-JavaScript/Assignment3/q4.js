
"use strict";

// The original code gives ReferenceError because greeting
// was not declared with let, const, or var.

function showMessage() {
    let greeting = "Welcome, coding buddy!";
    console.log(greeting);
}

showMessage();

// The variable is local to showMessage().
console.log("Message function completed.");
