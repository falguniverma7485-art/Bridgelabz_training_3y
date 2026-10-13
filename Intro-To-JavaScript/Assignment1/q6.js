
let totalAmount = 12000;
let discount = 0;

if (totalAmount >= 10000) {
    discount = 25;
} else if (totalAmount >= 5000) {
    discount = 15;
} else if (totalAmount >= 2000) {
    discount = 5;
}

let discountAmount = Math.round(totalAmount * discount / 100);
let finalPrice = totalAmount - discountAmount;

console.log("Original Total: ₹" + totalAmount);
console.log("Discount: " + discount + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Price: ₹" + finalPrice);