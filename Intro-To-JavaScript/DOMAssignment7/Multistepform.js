"use strict";

document.body.innerHTML = `
    <h2>Registration Form</h2>
    <div id="formArea"></div>
    <p id="stepMessage"></p>
`;

let currentStep = 0;

let formData = {
    name: "",
    email: "",
    password: ""
};

const steps = [
    {
        field: "name",
        label: "Enter your name",
        type: "text"
    },
    {
        field: "email",
        label: "Enter your email",
        type: "email"
    },
    {
        field: "password",
        label: "Enter your password",
        type: "password"
    }
];

function showStep() {
    let area = document.getElementById("formArea");

    if (currentStep === 3) {
        area.innerHTML = `
            <h3>Registration Completed!</h3>
            <p>Name: ${formData.name}</p>
            <p>Email: ${formData.email}</p>
            <p>Password: ${"*".repeat(formData.password.length)}</p>
        `;
        document.getElementById("stepMessage").textContent = "";
        return;
    }

    let step = steps[currentStep];

    area.innerHTML = `
        <h3>Step ${currentStep + 1} of 3</h3>
        <label>${step.label}</label><br><br>
        <input type="${step.type}" id="stepInput" value="${formData[step.field]}">
        <br><br>
        <button id="backBtn" ${currentStep === 0 ? "disabled" : ""}>Back</button>
        <button id="nextBtn">Next</button>
    `;

    document.getElementById("stepMessage").textContent = "";

    document.getElementById("nextBtn").addEventListener("click", function() {
        let value = document.getElementById("stepInput").value.trim();

        if (value === "") {
            document.getElementById("stepMessage").textContent = "This field is required";
            return;
        }

        if (step.field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            document.getElementById("stepMessage").textContent = "Enter a valid email";
            return;
        }

        if (step.field === "password" && value.length < 6) {
            document.getElementById("stepMessage").textContent = "Password must have at least 6 characters";
            return;
        }

        formData[step.field] = value;
        currentStep++;
        showStep();
    });

    document.getElementById("backBtn").addEventListener("click", function() {
        if (currentStep > 0) {
            formData[step.field] = document.getElementById("stepInput").value;
            currentStep--;
            showStep();
        }
    });
}

showStep();