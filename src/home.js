"use strict";

// DOM caching for content background
const content = document.getElementById("content");

// Home Page body content ** In Progress ** - Simple background Image for now... possibly update with testimonials or more typical landing page elements later
function createHome() {
  const home = document.createElement("div");
  home.classList.add("home-content");
  return home;
}

export default createHome;
