const button = document.getElementById("nav-button");
const menu = document.querySelector(".navigator");


button.addEventListener('click', () => {
    menu.classList.toggle('open');
    button.classList.toggle('open');
});


document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("container");
    const btnGrid = document.getElementById("btnGrid");
    const btnList = document.getElementById("btnList");

    // Fetch data using only await
    async function fetchData() {
        const response = await fetch("scripts/members.json");
        return await response.json();
    }

    async function renderGrid() {
        const data = await fetchData();
        container.innerHTML = "";
        container.className = "grid-view";
        data.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("item");
            card.innerHTML = `
                <img src="images/${item.image}" alt="${item.name}">

                <p>${item.address}</p>
                <p>${item.phone}</p>
                <p>ID: ${item.id}</p>
                <a>${item.website}</a>
            `;
            container.appendChild(card);
        });
    }

    async function renderList() {
        const data = await fetchData();
        container.innerHTML = "";
        container.className = "list-view";
        data.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("item");
            card.style.backgroundColor = index % 2 === 0 ? "#f2f2f2" : "#ffffff"; // Zebra effect
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.address}</p>
                <p>${item.phone}</p>
                <a>${item.website}</a>
            `;
            container.appendChild(card);
        });
    }

    await renderGrid();

    btnGrid.addEventListener("click", renderGrid);
    btnList.addEventListener("click", renderList);
});
