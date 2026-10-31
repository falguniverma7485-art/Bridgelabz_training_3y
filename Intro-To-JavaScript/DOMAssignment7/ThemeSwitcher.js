"use strict";

document.body.innerHTML = `
    <h2>Theme Switcher</h2>
    <button id="lightBtn">Light Theme</button>
    <button id="darkBtn">Dark Theme</button>
    <button id="blueBtn">Blue Theme</button>
    <p>Choose a theme to change the page appearance.</p>
`;

const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");

function changeTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    document.body.className = theme;

    if (theme === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else if (theme === "dark") {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "#dceeff";
        document.body.style.color = "#12345a";
    }
}

lightBtn.addEventListener("click", function() {
    changeTheme("light");
});

darkBtn.addEventListener("click", function() {
    changeTheme("dark");
});

blueBtn.addEventListener("click", function() {
    changeTheme("blue");
});

changeTheme("light");