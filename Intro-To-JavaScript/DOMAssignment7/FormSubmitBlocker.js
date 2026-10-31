"use strict";

document.body.innerHTML = `
    <h2>Registration Form</h2>

    <form id="registerForm">
        <label>Name:</label><br>
        <input type="text" id="nameInput">
        <p id="nameError" style="color:red;"></p>

        <label>Email:</label><br>
        <input type="text" id="emailInput">
        <p id="emailError" style="color:red;"></p>

        <label>Password:</label><br>
        <input type="password" id="passwordInput">
        <p id="passwordError" style="color:red;"></p>

        <button type="submit">Submit</button>
    </form>

    <h3 id="successMessage" style="color:green;"></h3>
`;

const registerForm = document.getElementById("registerForm");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function validateEmail() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email address";
        return false;
    }

    emailError.textContent = "";
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must contain at least 6 characters";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let nameValid = validateName();
    let emailValid = validateEmail();
    let passwordValid = validatePassword();

    if (nameValid && emailValid && passwordValid) {
        successMessage.textContent = "Form Submitted Successfully!";
        registerForm.reset();
    } else {
        successMessage.textContent = "";
    }
});