"use strict";

let products = [
    { id: 101, name: "Desk Lamp", category: "Electronics", price: 850, stock: 4 },
    { id: 102, name: "Cotton Kurti", category: "Clothing", price: 1200, stock: 12 },
    { id: 103, name: "Sketch Book", category: "Stationery", price: 250, stock: 3 },
    { id: 104, name: "Wireless Mouse", category: "Electronics", price: 950, stock: 6 },
    { id: 105, name: "Canvas Shoes", category: "Footwear", price: 1800, stock: 2 },
    { id: 106, name: "Water Bottle", category: "Accessories", price: 400, stock: 15 }
];

function getLowStockProducts() {
    return products.filter(function(product) {
        return product.stock <= 5;
    });
}

function sortProductsByPrice() {
    return [...products].sort(function(a, b) {
        return a.price - b.price;
    });
}

function calculateTotalInventoryValue() {
    return products.reduce(function(total, product) {
        return total + (product.price * product.stock);
    }, 0);
}

function groupByCategory() {
    return products.reduce(function(groups, product) {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product.name);
        return groups;
    }, {});
}

console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("Products Sorted by Price:");
console.log(sortProductsByPrice());

console.log("Total Inventory Value: Rs.", calculateTotalInventoryValue());

console.log("Products Grouped by Category:");
console.log(groupByCategory());