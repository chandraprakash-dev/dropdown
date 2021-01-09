const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownList = document.querySelector(".dropdown-list");

function toggle() {
  dropdownList.classList.toggle("show");
}

dropdownToggle.addEventListener("click", toggle);
