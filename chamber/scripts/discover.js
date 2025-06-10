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


document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector('.items');
    console.log(container);

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
            `;

            container.appendChild(card);
            
        });
    }
    await renderCards();
})
