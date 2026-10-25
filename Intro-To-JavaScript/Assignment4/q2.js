
"use strict";

document.body.innerHTML = `
    <h2>Student Registration</h2>
    <form id="studentForm">
        <label>Name:</label>
        <input type="text" id="studentName">
        <span id="nameError"></span><br><br>

        <label>Email:</label>
        <input type="text" id="studentEmail">
        <span id="emailError"></span><br><br>

        <label>Phone:</label>
        <input type="text" id="studentPhone">
        <span id="phoneError"></span><br><br>

        <label>Password:</label>
        <input type="password" id="studentPassword">
        <span id="passwordError"></span><br><br>

        <button type="submit">Register</button>
    </form>
    <p id="result"></p>
`;

const form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("studentName");
    let email = document.getElementById("studentEmail");
    let phone = document.getElementById("studentPhone");
    let password = document.getElementById("studentPassword");

    let valid = true;

    function checkField(input, errorId, condition, message) {
        let error = document.getElementById(errorId);

        if (condition) {
            input.style.border = "2px solid green";
            error.textContent = "";
        } else {
            input.style.border = "2px solid red";
            error.textContent = message;
            error.style.color = "red";
            valid = false;
        }
    }

    checkField(name, "nameError", /^[A-Za-z ]+$/.test(name.value.trim()),
        " Enter alphabets only");

    checkField(email, "emailError", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
        " Enter a valid email");

    checkField(phone, "phoneError", /^\d{10}$/.test(phone.value),
        " Enter exactly 10 digits");

    checkField(password, "passwordError",
        /[A-Z]/.test(password.value) &&
        /\d/.test(password.value) &&
        /[^A-Za-z0-9]/.test(password.value),
        " Add uppercase, number and special character");

    document.getElementById("result").textContent =
        valid ? "Registration successful!" : "Please correct the errors.";
});
