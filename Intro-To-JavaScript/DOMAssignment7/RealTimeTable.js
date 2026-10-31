"use strict";

document.body.innerHTML = `
    <h2>Student Records</h2>
    <input type="text" id="searchBox" placeholder="Search student...">

    <table border="1" cellpadding="10" style="margin-top:15px; border-collapse:collapse;">
        <thead>
            <tr>
                <th>Name</th>
                <th>Branch</th>
                <th>CGPA</th>
            </tr>
        </thead>
        <tbody id="studentTable">
            <tr><td>Pranvika</td><td>CSE</td><td>8.7</td></tr>
            <tr><td>Yugant</td><td>ECE</td><td>8.2</td></tr>
            <tr><td>Vamika</td><td>IT</td><td>9.1</td></tr>
            <tr><td>Rudransh</td><td>Mechanical</td><td>7.8</td></tr>
            <tr><td>Inayat</td><td>CSE</td><td>8.9</td></tr>
        </tbody>
    </table>

    <p id="noResult" style="display:none;">No results found</p>
`;

const searchBox = document.getElementById("searchBox");
const studentTable = document.getElementById("studentTable");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("input", function() {
    let searchValue = searchBox.value.toLowerCase();
    let rows = studentTable.querySelectorAll("tr");
    let visibleCount = 0;

    rows.forEach(function(row) {
        let rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {
            row.style.display = "";
            visibleCount++;
        } else {
            row.style.display = "none";
        }
    });

    noResult.style.display = visibleCount === 0 ? "block" : "none";
});