const year = new Date();

let fullYear = document.getElementById('currentYear');
let currentYear = year.getFullYear();

let lastModified = document.getElementById('lastModified');
let lastModifiedDate = document.lastModified;

fullYear.innerHTML = `© ${currentYear}`;
lastModified.innerHTML = `Last Modified: ${lastModifiedDate}`;