
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

let operators = ["+", "-", "*", "/"];
let operator = operators[Math.floor(Math.random() * operators.length)];
let answer;

if (operator === "+") {
    answer = num1 + num2;
} else if (operator === "-") {
    answer = num1 - num2;
} else if (operator === "*") {
    answer = num1 * num2;
} else {
    answer = num1 / num2;
}

answer = Number(answer.toFixed(2));

console.log(`Question: ${num1} ${operator} ${num2}`);
console.log("Correct Answer:", answer);