"use strict";

let menu = [
    { name: "Paneer Tikka Roll", price: 180 },
    { name: "Peri Peri Momos", price: 150 },
    { name: "Cheese Garlic Bread", price: 120 },
    { name: "Cold Coffee", price: 90 }
];

function calculateBill(orderItems) {
    let priceList = orderItems.map(function(itemName) {
        let item = menu.find(function(food) {
            return food.name === itemName;
        });

        if (!item) {
            throw new Error(itemName + " is not available in the menu");
        }

        return item.price;
    });

    let total = priceList.reduce(function(sum, price) {
        return sum + price;
    }, 0);

    return total;
}

try {
    let order = ["Paneer Tikka Roll", "Cold Coffee", "Peri Peri Momos"];

    console.log("Total Bill: Rs.", calculateBill(order));

    let secondOrder = ["Cheese Garlic Bread", "Pizza"];

    console.log("Total Bill: Rs.", calculateBill(secondOrder));

} catch (error) {
    console.log("Order Error:", error.message);
}