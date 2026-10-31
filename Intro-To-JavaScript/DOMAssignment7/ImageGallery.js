"use strict";

document.body.innerHTML = `
    <h2>My Image Gallery</h2>
    <div id="gallery" style="display:grid; grid-template-columns:repeat(3, 150px); gap:12px;"></div>

    <div id="modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;">
        <img id="largeImage" style="max-width:80%; max-height:80%;">
    </div>
`;

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const largeImage = document.getElementById("largeImage");

const imageNames = [
    "Moss",
    "Pebble",
    "Cedar",
    "Fern",
    "Dune",
    "Willow"
];

imageNames.forEach(function(name) {
    let img = document.createElement("img");

    img.src = "https://picsum.photos/seed/" + name + "/200/150";
    img.alt = name;
    img.style.width = "150px";
    img.style.height = "120px";
    img.style.cursor = "pointer";

    gallery.appendChild(img);
});

gallery.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        largeImage.src = event.target.src;
        modal.style.display = "flex";
    }
});

modal.addEventListener("click", function() {
    modal.style.display = "none";
});

largeImage.addEventListener("click", function(event) {
    event.stopPropagation();
});