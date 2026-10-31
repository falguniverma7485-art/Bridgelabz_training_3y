"use strict";

document.body.innerHTML = `
    <h2>Product List</h2>
    <input type="text" id="productInput" placeholder="Enter product name">
    <button id="addProduct">Add Product</button>
    <ul id="productList"></ul>
`;

const productInput = document.getElementById("productInput");
const addProduct = document.getElementById("addProduct");
const productList = document.getElementById("productList");

addProduct.addEventListener("click", function() {
    let productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span class="productName">${productName}</span>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    productList.appendChild(li);
    productInput.value = "";
});

productList.addEventListener("click", function(event) {
    let li = event.target.closest("li");

    if (!li) return;

    if (event.target.classList.contains("deleteBtn")) {
        li.remove();
    }

    if (event.target.classList.contains("editBtn")) {
        let span = li.querySelector(".productName");

        if (li.querySelector("input")) return;

        let input = document.createElement("input");
        input.value = span.textContent;

        span.replaceWith(input);
        input.focus();

        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                saveEdit(li);
            }
        });
    }
});

function saveEdit(li) {
    let input = li.querySelector("input");

    if (!input) return;

    let span = document.createElement("span");
    span.className = "productName";
    span.textContent = input.value.trim() || "Unnamed Product";

    input.replaceWith(span);
}

document.addEventListener("click", function(event) {
    let editingItem = productList.querySelector("li input");

    if (editingItem && !editingItem.parentElement.contains(event.target)) {
        saveEdit(editingItem.parentElement);
    }
});