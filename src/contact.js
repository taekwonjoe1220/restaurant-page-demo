"use strict";

// Contact page content ** In Progress **
function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact-content");

  contact.appendChild(createHeading());
  return contact;
}

function createHeading() {
  const heading = document.createElement("h1");
  heading.textContent = "contact us";

  // append next item with funciton call here
  heading.appendChild(createFormContainer());
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

  return form;
}

export default createContact;
