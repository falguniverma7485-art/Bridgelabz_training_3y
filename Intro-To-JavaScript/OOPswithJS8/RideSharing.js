"use strict";

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance <= 0) {
            throw new Error("Please enter a valid trip distance");
        }

        return this.distance * 14;
    }
}

let driver1 = new Driver("Kavish", 4.8, "Electric Scooter", "UP81 AB 4721");

console.log("Driver:", driver1.name);
console.log("Rating:", driver1.rating);
console.log("Vehicle:", driver1.vehicle);
console.log("Vehicle Number:", driver1.vehicleNumber);

try {
    let trip1 = new Trip("Mathura", "Vrindavan", 12);
    console.log("From:", trip1.fromLocation);
    console.log("To:", trip1.toLocation);
    console.log("Fare: Rs.", trip1.calculateFare());

    let trip2 = new Trip("Agra", "Mathura", -5);
    console.log("Fare: Rs.", trip2.calculateFare());

} catch (error) {
    console.log("Trip Error:", error.message);
}