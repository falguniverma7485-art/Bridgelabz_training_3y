"use strict";

document.body.innerHTML = `
    <h2>Mouse Tracker</h2>
    <div id="mouseBox" style="width:400px; height:400px; border:2px solid black; position:relative; background:#f5f5f5;">
    </div>
    <p id="coordinates">Move your mouse inside the box</p>
`;

const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", function(event) {
    let x = event.clientX;
    let y = event.clientY;

    coordinates.textContent = "clientX: " + x + " , clientY: " + y;
});

mouseBox.addEventListener("dblclick", function(event) {
    let dot = document.createElement("div");

    let boxPosition = mouseBox.getBoundingClientRect();

    let x = event.clientX - boxPosition.left;
    let y = event.clientY - boxPosition.top;

    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.backgroundColor = "red";
    dot.style.borderRadius = "50%";
    dot.style.position = "absolute";
    dot.style.left = (x - 5) + "px";
    dot.style.top = (y - 5) + "px";

    mouseBox.appendChild(dot);
});