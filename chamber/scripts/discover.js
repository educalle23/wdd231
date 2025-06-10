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
    
    async function fetchItems() {
        const response = await fetch("/chamber/data/items.json");
        return await response.json();
    };
    
    async function renderCards() {
        let ok = await fetchItems();
        container.innerHTML = "";
        ok.forEach(p => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
            <h2>${p.name}</h2>
            <img src="images/${p.image}" alt="${p.name}">
            <p>${p.description}</p>
            <button>Learn More!</button>
            `;
            
            container.appendChild(card);
            
        });
    }
    await renderCards();
})

messageContainer.textContent = message;
localStorage.setItem('lastVisit', now.toString());




console.log('Tiempo actual:', now);
console.log('Última visita guardada:', lastVisit);
console.log('¿Es primera visita?', !lastVisit);

// ... resto del código ...

localStorage.setItem('lastVisit', now.toString());
console.log('Guardé para la próxima:', now);