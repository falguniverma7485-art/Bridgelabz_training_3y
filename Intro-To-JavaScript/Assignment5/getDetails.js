"use strict";

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(this.brand + " " + this.model);
};

let car1 = new Car("Skoda", "Kushaq");
let car2 = new Car("Citroen", "C3");

car1.getDetails();
car2.getDetails();

console.log(car1.getDetails === car2.getDetails);