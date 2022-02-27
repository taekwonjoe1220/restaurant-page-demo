"use strict";

// Header Content ** Mostly Done **
function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.appendChild(createContainer());

  return header;
}

function createContainer() {
  const container = document.createElement("div");
  container.classList.add("container");
  container.appendChild(createContentWrapper());
  container.appendChild(createNav());
  return container;
}

function createContentWrapper() {
  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");
  const h1 = document.createElement("h1");
  h1.textContent = "South Street Roasters";
  const p = document.createElement("p");
  p.textContent = "Artisan Coffee";
  contentWrapper.appendChild(h1);
  contentWrapper.appendChild(p);
  return contentWrapper;
}

function createNav() {
  const navItems = ["home", "products", "coffee", "about", "contact"];
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const navMenu = document.createElement("ul");
  nav.appendChild(navMenu);

  (function createNavList(arr) {
    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement("li");
      if (i === 0) {
        li.classList.add("current");
      }
      li.classList.add(arr[i]);
      li.textContent = arr[i];
      navMenu.append(li);
    }
  })(navItems);

  return nav;
}

export default createHeader;
