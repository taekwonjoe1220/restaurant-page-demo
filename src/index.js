// Imports
import "./style.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import loadHeader from "./header.js";
import loadFooter from "./footer.js";
import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadCoffee from "./coffee.js";
import loadContact from "./contact.js";

// Initial Dom cache for loading components
const content = document.getElementById("content");

// Iniitial Load of Header, Home, & Footer
document.body.prepend(loadHeader());
content.append(loadHome());
document.body.appendChild(loadFooter());

// updated DOM Caching
const navList = document.querySelectorAll("li");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const coffee = document.querySelector(".coffee");
const contact = document.querySelector(".contact");

// House logic for loading content dynamically with event listeners
// event listener for navbar
navList.forEach((item) => {
  item.addEventListener("click", (e) => {
    // update the current 'highlight' by removing it from what it's on and reassigning it to what was clicked
    if (!e.target.classList.contains("current")) {
      removeCurrent();
      e.target.classList.add("current");
    }
  });
});

// functions to update page
function removeCurrent() {
  navList.forEach((item) => {
    if (item.classList.contains("current")) {
      item.classList.remove("current");
    }
  });
}
