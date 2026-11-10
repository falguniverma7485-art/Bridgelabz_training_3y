"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    let discount = (this.price * percent) / 100;
    return this.price - discount;
};

let product1 = new Product("Bluetooth Speaker", 2400);
let product2 = new Product("Drawing Tablet", 6500);
let product3 = new Product("Travel Backpack", 1800);

let products = [product1, product2, product3];

let discounts = [10, 15, 5];

products.forEach(function(product, index) {
    console.log("Product:", product.name);
    console.log("Original Price:", product.price);
    console.log("Discount:", discounts[index] + "%");
    console.log("Final Price:", product.applyDiscount(discounts[index]));
    console.log("--------------------");
});