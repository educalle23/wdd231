document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("menu-btn");
  const nav = document.getElementById("navigator");

  button.addEventListener("click", function () {
    button.classList.toggle("open");
    nav.classList.toggle("open");
  });
});

const today = new Date();

let year = document.getElementById("currentyear");
let last = document.getElementById("lastModified");

let currentYear = today.getFullYear();
let lastModified = document.lastModified;

year.innerHTML = currentYear;
last.innerHTML = `Last Modification: ${lastModified}`;