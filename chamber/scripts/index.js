const container = document.querySelector("#container-cards");
const url = "scripts/members.json";

const divCurrent = document.querySelector('.current-weather');
const temp = document.getElementById("info-current");
const weatherIcon = document.querySelector('#img-current');
const captionDesc = document.createElement('p');

//Forecast
const infoForecast = document.querySelector('.info-forecast');



const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=-8.11557&lon=-79.0&units=metric&appid=c2454891036de5dbd628eee0a593638f';
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=-8.11557&lon=-79.0&units=metric&appid=c2454891036de5dbd628eee0a593638f`;


async function apiFetch() {
    try {
        const [responseCurrent, responseForecast] = await Promise.all([
            fetch(urlCurrent),
            fetch(urlForecast)
        ]);

        if (!responseCurrent.ok || !responseForecast.ok) {
            throw new Error("Error en la solicitud a OpenWeather");
        }

        const dataCurrent = await responseCurrent.json();
        const dataForecast = await responseForecast.json();
        
        displayResultsCurrent(dataCurrent);
        displayResultsForecast(dataForecast);

    } catch (error) {
    console.error("Hubo un problema con la API:", error);
    if (error.message.includes("Failed to fetch")) {
        console.error("Posible problema de conexión a Internet.");
    }
}
}

function displayResultsCurrent(data) {
    const tempActual = data.main.temp;
    const tempMax = data.main.temp_max;
    const tempMin = data.main.temp_min;
    const humedad = data.main.humidity;
    const amanecer = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    const atardecer = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

    temp.innerHTML = `
        <p><strong>Temperature:</strong> ${tempActual} C°</p>
        <p><strong>Max Temperature:</strong> ${tempMax} C°</p>
        <p><strong>Min Temperature:</strong> ${tempMin} C°</p> 
        <p><strong>Humidity:</strong> ${humedad}%</p>
        <p><strong>Sunrise:</strong> ${amanecer}</p>
        <p><strong>Sunset:</strong> ${atardecer}</p>
    `;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    divCurrent.append(weatherIcon, temp);
}

function displayResultsForecast(data) {
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    //Get the 3 days after today
    const weekDay = days[today.getDay()];
    const dayAfter1 = days[(today.getDay() + 1) % 7];
    const dayAfter2 = days[(today.getDay() + 2) % 7];
    const dayAfter3 = days[(today.getDay() + 3) % 7];

    //Get the temp of the three next days
    const tempDayAfter1 = data.list[0].main.temp
    const tempDayAfter2 = data.list[8].main.temp
    const tempDayAfter3 = data.list[16].main.temp

    infoForecast.innerHTML = `
    <p><strong>${dayAfter1}: </strong> ${tempDayAfter1}C°</p>
    <p><strong>${dayAfter2}: </strong> ${tempDayAfter2}C°</p>
    <p><strong>${dayAfter3}: </strong> ${tempDayAfter3}C°</p> 
    `
}

async function fetchData() {
    const response = await fetch("scripts/members.json");
    return await response.json();
}

async function renderSpoilers() {
    const members = await fetchData();
    const eligibleMembers = members.filter(member => 
        member.membership_level === 2 || member.membership_level === 3
    );

    const shuffled = eligibleMembers.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
}

async function displaySpotlights() {
    const spotlights = await renderSpoilers();
    const container = document.querySelector('.container-cards');

    container.innerHTML = ''; 

    spotlights.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h1>${member.name}</h1>
            <img src="images/${member.image}" alt="Logo de ${member.name}">
            <p>PHONE: ${member.phone}</p>
            <p>DIRECTION ${member.address}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <p>MEMBERSHIP LEVEL: ${member.membership_level === 3 ? 'Gold' : 'Silver'}</p>
        `;
        container.appendChild(card);
    });
}

const button = document.getElementById("navigation-button");
const menu = document.querySelector(".navigator");


button.addEventListener('click', () => {
    menu.classList.toggle('open');
    button.classList.toggle('open');
});

apiFetch();
displaySpotlights();



























// ///HELP FORM THE TEAM MEETING
// // const iconSource2 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;

// // const iconSource3 = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`; 
