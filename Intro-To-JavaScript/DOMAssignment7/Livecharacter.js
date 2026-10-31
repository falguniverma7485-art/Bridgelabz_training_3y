"use strict";

document.body.innerHTML = `
    <h2>Character Counter</h2>
    <textarea id="messageBox" maxlength="100" placeholder="Write something..." rows="5" cols="35"></textarea>
    <p id="counter">100 characters remaining</p>
    <button id="resetBtn">Reset</button>
`;

const messageBox = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

messageBox.addEventListener("input", function() {
    let remaining = 100 - messageBox.value.length;

    counter.textContent = remaining + " characters remaining";

    if (remaining <= 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "orange";
    } else {
        counter.style.color = "green";
    }
});

messageBox.addEventListener("keydown", function(event) {
    if (messageBox.value.length >= 100 &&
        event.key.length === 1 &&
        !event.ctrlKey &&
        !event.metaKey) {
        event.preventDefault();
    }
});

resetBtn.addEventListener("click", function() {
    messageBox.value = "";
    counter.textContent = "100 characters remaining";
    counter.style.color = "black";
});