
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let finalTotal = 0;
let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {
    let itemPrice = cart[i].price;
    totalPrice += itemPrice;

    if (cart[i].category === "electronics") {
        itemPrice = itemPrice - (itemPrice * 10 / 100);
    } else if (cart[i].category === "fashion") {
        itemPrice = itemPrice - (itemPrice * 5 / 100);
    }

    cart[i].finalPrice = itemPrice;
}


finalTotal = cart.reduce((sum, item) => sum + item.finalPrice, 0);

if (totalPrice > 50000) {
    finalTotal = finalTotal - (finalTotal * 5 / 100);
}

console.log("Cart Details:", cart);
console.log("Original Total:", totalPrice);
console.log("Final Total:", finalTotal);