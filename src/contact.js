"use strict";

// Contact page content ** In Progress **
function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact-content");

  contact.appendChild(createHeading());
  contact.appendChild(createFormContainer());
  return contact;
}

function createHeading() {
  const heading = document.createElement("h1");
  heading.textContent = "contact us";

  return heading;
}
function createFormContainer() {
  const container = document.createElement("div");
  container.classList.add("form-container");

  container.appendChild(createForm());
  return container;
}
function createForm() {
  const form = document.createElement("form");
  const formContents = [
    {
      label: "First Name",
      attribute: "first_name",
      type: "text",
    },
    {
      label: "Last Name",
      attribute: "last_name",
      type: "text",
    },
    {
      label: "Email",
      attribute: "email",
      type: "email",
    },
    {
      label: "Message",
      attribute: "message",
      type: "textarea",
    },
  ];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  // commenting out method & post for now. Would use these to send data to backend in order to deliver contact message to business
  // form.method = "post";
  // form.action = "";
  for (let i = 0; i < formContents.length; i++) {
    form.appendChild(
      createLabel(formContents[i].label, formContents[i].attribute)
    );
    if (formContents[i].type != "textarea") {
      form.appendChild(createInput(formContents[i].type));
    } else {
      const messageBox = document.createElement("textarea");
      messageBox.cols = 30;
      messageBox.rows = 10;
      form.appendChild(messageBox);
    }
  }

  return form;
}

function createLabel(name, attribute) {
  const label = document.createElement("label");

  label.setAttribute("for", attribute);
  label.textContent = name;

  return label;
}

function createInput(type, placeholder = "") {
  const input = document.createElement("input");
  input.setAttribute("type", type);

  return input;
}

export default createContact;
