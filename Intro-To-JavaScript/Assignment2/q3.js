
let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log("Number:", x);
console.log("Rounded Value:", roundedValue);
console.log("Square Root:", squareRoot);
console.log("Power of 3:", powerValue);
console.log("Random Number:", randomNumber);

console.log(`
Math Summary:
Number = ${x}
Rounded = ${roundedValue}
Square Root = ${squareRoot.toFixed(2)}
Power = ${powerValue.toFixed(2)}
Random Number = ${randomNumber}
`);