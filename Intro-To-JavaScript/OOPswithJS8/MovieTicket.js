"use strict";

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }

    printTicket() {
        console.log("Movie:", this.movieName);
        console.log("Seat Number:", this.seatNo);
        console.log("Ticket Price: Rs.", this.price);
    }
}

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let ticket1 = new OnlineTicket("The Silent Forest", "B7", 220, 25);
let ticket2 = new OnlineTicket("Beyond The Stars", "D4", 280, 30);

ticket1.printTicket();
console.log("Convenience Fee: Rs.", ticket1.convenienceFee);
console.log("Total Amount: Rs.", ticket1.getTotalAmount());

console.log("--------------------");

ticket2.printTicket();
console.log("Convenience Fee: Rs.", ticket2.convenienceFee);
console.log("Total Amount: Rs.", ticket2.getTotalAmount());