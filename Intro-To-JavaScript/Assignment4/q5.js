
"use strict";

document.body.innerHTML = `
    <h2>Movie Ticket Booking</h2>

    <form id="ticketForm">
        <label>Name:</label>
        <input type="text" id="viewerName"><br><br>

        <label>Email:</label>
        <input type="text" id="viewerEmail"><br><br>

        <label>Seats (1 to 10):</label>
        <input type="number" id="seatCount"><br><br>

        <button type="submit">Book Ticket</button>
    </form>

    <p id="bookingMessage"></p>
`;

document.getElementById("ticketForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("viewerName").value.trim();
    let email = document.getElementById("viewerEmail").value.trim();
    let seats = Number(document.getElementById("seatCount").value);

    let nameValid = /^[A-Za-z ]+$/.test(name);
    let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    let seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

    let message = document.getElementById("bookingMessage");

    if (!nameValid) {
        message.textContent = "Please enter a name using alphabets only.";
    } else if (!emailValid) {
        message.textContent = "Please enter a valid email address.";
    } else if (!seatsValid) {
        message.textContent = "Seats must be between 1 and 10.";
    } else {
        let booking = {
            name: name,
            email: email,
            seats: seats
        };

        message.textContent =
            `Booking confirmed for ${booking.name}. Seats booked: ${booking.seats}.`;

        console.log("Ticket Details:", booking);
    }
});
