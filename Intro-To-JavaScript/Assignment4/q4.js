
"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let form = document.createElement("form");
        form.id = "customForm";

        this.fields.forEach(field => {
            let label = document.createElement("label");
            label.textContent = field.label;

            let input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.required = true;

            form.appendChild(label);
            form.appendChild(input);
            form.appendChild(document.createElement("br"));
            form.appendChild(document.createElement("br"));
        });

        let submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.type = "submit";
        form.appendChild(submitButton);

        document.body.appendChild(form);

        form.addEventListener("submit", event => {
            event.preventDefault();
            console.log(this.getFormData());
        });
    }

    getFormData() {
        let form = document.getElementById("customForm");
        let formData = {};

        this.fields.forEach(field => {
            formData[field.name] = form.elements[field.name].value;
        });

        return formData;
    }
}

const fields = [
    { type: "text", label: "Username: ", name: "username" },
    { type: "email", label: "Email: ", name: "email" },
    { type: "number", label: "Age: ", name: "age" }
];

const formBuilder = new FormBuilder(fields);
formBuilder.createForm();
