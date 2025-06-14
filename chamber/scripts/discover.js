import {items} from '../data/items.js'

const button = document.getElementById("nav-button");
const menu = document.querySelector(".navigator");


button.addEventListener('click', () => {
    menu.classList.toggle('open');
    button.classList.toggle('open');
});

const year = new Date();

let fullYear = document.getElementById('current-year');
let currentYear = year.getFullYear();

let lastModified = document.getElementById('last-modified');
let lastModifiedDate = document.lastModified;

fullYear.innerHTML = `© ${currentYear}`;
lastModified.innerHTML = `Last Modified: ${lastModifiedDate}`;

const msToDays = 86400000;

const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');
const messageContainer = document.querySelector('#welcome-p');

let message = '';
if (!lastVisit) {
    message = 'Welcome! Let us know if you have questions';
} else{
    const lastVisitTime = parseInt(lastVisit);
    const timeDifference = now - lastVisitTime;
    const daysDifference = Math.floor(timeDifference / msToDays);
    
    if (timeDifference < msToDays) {
        // Less than a day
        message = 'Back so soon! Awesome!';

    } else {
        // More than a day
        const dayText = daysDifference === 1 ? 'day' : 'days';
        message = `You last visited ${daysDifference} ${dayText} ago.`;

    }
}




document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector('.items');
    
    async function renderCards() {
        container.innerHTML = "";
        items.forEach(p => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
            <h2>${p.name}</h2>
            <img src="images/${p.image}" alt="${p.name}">
            <p id="desc">${p.description}</p>
            <p id="adress">${p.address}</p>
            <button>Learn More!</button>
            `;
            
            container.appendChild(card);
            
        });
    }
    await renderCards();
})

messageContainer.textContent = message;
localStorage.setItem('lastVisit', now.toString());

