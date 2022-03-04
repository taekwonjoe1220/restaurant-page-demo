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
content.appendChild(loadHome());
document.body.appendChild(loadFooter());
// updated DOM Caching
const navList = document.querySelectorAll("li");

// House logic for loading content dynamically with event listeners

// event listener for navbar
navList.forEach((item) => {
  item.addEventListener("click", (e) => {
    // update the current 'highlight' by removing it from what it's on and reassigning it to what was clicked
    if (!e.target.classList.contains("current")) {
      removeCurrent();
      e.target.classList.add("current");
      // dynamically update content section based on target of click event
      loadNew(e.target.classList[0]);
    }
  });
});

// functions to update page
function removeCurrent() {
  // remove current class for css update
  navList.forEach((item) => {
    if (item.classList.contains("current")) {
      item.classList.remove("current");
    }
  });
  // remove the content from the dom so we can dynamically load new content
  content.removeChild(content.firstChild);
}

// load the new content when navbar item is clicked
function loadNew(target) {
  switch (target) {
    case "about":
      content.appendChild(loadAbout());
      break;
    case "home":
      content.appendChild(loadHome());
      break;
    case "contact":
      content.appendChild(loadContact());
      break;
    case "coffee":
      content.appendChild(loadCoffee());
      break;
    default:
      console.log("oops, something went wrong");
  }
}
