"use strict";

function createFooter() {
  const footer = document.createElement("footer");

  const span = document.createElement("span");
  span.innerHTML = `Copyright &copy; 2022 <i class="fa-brands fa-github"></i> Taekwonjoe1220`;

  footer.appendChild(span);

  return footer;
}

export default createFooter;
