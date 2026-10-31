"use strict";

document.body.innerHTML = `
    <h2>Choose Your Department</h2>

    <div id="dropdown" style="position:relative; display:inline-block;">
        <button id="dropdownBtn">Select Department</button>

        <div id="options" style="display:none; position:absolute; background:#eee; min-width:160px;">
            <p class="option">Computer Science</p>
            <p class="option">Information Technology</p>
            <p class="option">Electronics</p>
            <p class="option">Mechanical</p>
        </div>
    </div>

    <p id="selectedValue"></p>
`;

const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdownBtn");
const options = document.getElementById("options");
const selectedValue = document.getElementById("selectedValue");

dropdownBtn.addEventListener("click", function() {
    options.style.display = options.style.display === "block" ? "none" : "block";
});

options.addEventListener("click", function(event) {
    if (event.target.classList.contains("option")) {
        dropdownBtn.textContent = event.target.textContent;
        selectedValue.textContent = "Selected: " + event.target.textContent;
        options.style.display = "none";
    }
});

document.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target)) {
        options.style.display = "none";
    }
}, true);