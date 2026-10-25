
"use strict";

const user = {
    name: "Aarohi",
    email: "aarohi@sample.com",
    age: 21
};

document.body.innerHTML = `
    <h2>Edit User Details</h2>

    <form id="userForm">
        <label>Name:</label>
        <input type="text" id="editName" value="${user.name}"><br><br>

        <label>Email:</label>
        <input type="email" id="editEmail" value="${user.email}"><br><br>

        <label>Age:</label>
        <input type="number" id="editAge" value="${user.age}"><br><br>

        <button type="submit">Update Details</button>
    </form>

    <h3>Updated User</h3>
    <pre id="userDetails"></pre>
`;

function displayUser() {
    document.getElementById("userDetails").textContent =
        JSON.stringify(user, null, 2);
}

displayUser();

document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();


    user.name = document.getElementById("editName").value;
    user.email = document.getElementById("editEmail").value;
    user.age = Number(document.getElementById("editAge").value);

    displayUser();
    console.log("Updated Object:", user);
});
