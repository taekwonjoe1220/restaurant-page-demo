// Imports
import "./style.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import loadHeader from "./header.js";
import loadFooter from "./footer.js";
import loadAbout from "./about.js";
import loadHome from "./home.js";
import loadCoffee from "./coffee.js";
import loadProducts from "./products.js";
import loadContact from "./contact.js";

// Initial Dom cache for loading components
const content = document.getElementById("content");

// Iniitial Load of Header, Home, & Footer
// Load Header
content.append(loadHeader());
content.append(loadHome());
content.append(loadFooter());
// Load body (home) ** In Progress **

// Load Footer ** In Progress **

// House logic for loading content dynamically with event listeners
/* Need to add DOM Caching, content reset & rendering functionality once each component is built out*/
