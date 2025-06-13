import { initHamburgerMenu } from './navigation.js';

initHamburgerMenu();

const urlData = 'data/services.json'

const containerServices = document.querySelector('.services-container')

document.addEventListener('DOMContentLoaded', async () =>{
    async function fetchData() {
        try{            
            const data = await fetch(urlData);
            return await data.json();    
            
        } catch (error) {
            console.log(error);
        }
    }

    const data = await fetchData();
    
    const grouped = data.reduce((acc, item) => {
    const cat = item.category;
    if (!acc[cat]) {
        acc[cat] = [];
        }
    acc[cat].push(item);
    return acc;
    }, {});


    Object.entries(grouped).forEach(([category, items]) => {
    const container = document.createElement('div');
    container.className = category
    const title = category
    const titleCap = title.charAt(0).toUpperCase() + title.slice(1);
    container.innerHTML = `<h3>${titleCap}</h3>` 
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `        
        <img src="images/${item.img}">
        <div class="info">
            <h4>${item.name}</h4>
            <p><strong>Price:</strong> S/.${item.price}</p>
            <p><strong>Duration:</strong> ${item.duration} min.</p>
        </div>
        `;
        container.appendChild(card);
    });

    containerServices.appendChild(container);
    });

});
