
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    showDetails() {
        return `${this.name} | Category: ${this.category} | Price: ₹${this.price}`;
    }
}

const products = [
    new Product(101, "Copper Desk Lamp", 1450, "Home"),
    new Product(102, "Indigo Notebook Set", 450, "Stationery"),
    new Product(103, "Bamboo Laptop Stand", 1250, "Accessories"),
    new Product(104, "Ceramic Tea Mug", 850, "Kitchen")
];


products[0].applyDiscount(10);

for (let product of products) {
    console.log(product.showDetails());
}


let costlyProducts = products.filter(product => product.price > 1000);

console.log("Products above ₹1000:");

costlyProducts.forEach(product => {
    console.log(product.showDetails());
});
