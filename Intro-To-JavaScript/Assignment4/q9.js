
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(coupon) {
        // Coupon must be SAVE followed by digits or DISC followed by digits.
        if (!/^(SAVE|DISC)\d+$/.test(coupon)) {
            throw new Error("Invalid coupon format");
        }

        let discount = Number(coupon.match(/\d+$/)[0]);

        if (discount <= 0 || discount > 100) {
            throw new Error("Discount must be between 1 and 100");
        }

        return this.getTotal() * (1 - discount / 100);
    }
}

const myCart = new Cart();

myCart.addItem("Woven Storage Basket", 650, 2);
myCart.addItem("Terracotta Planter", 350, 3);
myCart.addItem("Brass Bookmark", 180, 1);

console.log("Cart Items:", myCart.items);

let total = myCart.getTotal();
console.log("Original Total: ₹" + total);

let coupon = "SAVE20";

try {
    let finalTotal = myCart.applyCoupon(coupon);
    console.log("Coupon:", coupon);
    console.log("Final Total: ₹" + finalTotal.toFixed(2));
} catch (error) {
    console.log("Coupon Error:", error.message);
}
