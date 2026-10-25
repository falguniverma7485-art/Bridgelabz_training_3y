
"use strict";

document.body.innerHTML = `
    <h2>Login</h2>

    <form id="loginForm">
        <label>Username:</label>
        <input type="text" id="loginUsername"><br><br>

        <label>Password:</label>
        <input type="password" id="loginPassword"><br><br>

        <button type="submit">Login</button>
    </form>

    <p id="loginMessage"></p>
`;

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let errors = [];

    if (username.length < 5) {
        errors.push("Username must have at least 5 characters.");
    }

    if (password.length < 8) {
        errors.push("Password must have at least 8 characters.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password needs an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password needs a lowercase letter.");
    }

    if (!/\d/.test(password)) {
        errors.push("Password needs a number.");
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password needs a special character.");
    }

    let message = document.getElementById("loginMessage");

    if (errors.length === 0) {
        message.style.color = "green";
        message.textContent = "Login details are valid!";
    } else {
        message.style.color = "red";
        message.innerHTML = errors.join("<br>");
    }
});
