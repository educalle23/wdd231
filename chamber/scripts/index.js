document.addEventListener("DOMContentLoaded", function () {
    fetchWeatherData();
    loadCompanySpotlights();
});

function fetchWeatherData() {
    const apiKey = 'a2b68f580e3d559eb18b5da96e74a4b3';
    const cityId = '3691175';
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-8.12&lon=-79.02&units=metric&appid=a2b68f580e3d559eb18b5da96e74a4b3';
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.getElementById('weather-data');
            const temperature = Math.round(data.main.temp);
            const weatherDescription = data.weather.map(w => w.description).join(', ').replace(/\b\w/g, char => char.toUpperCase());

            const weatherHTML = `
                <p>Current Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
            `;
            weatherContainer.innerHTML = weatherHTML;
            // Fetch the 3-day forecast
            fetchForecastData(apiKey, cityId);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function fetchForecastData(apiKey, cityId) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${apiKey}`;

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastContainer = document.createElement('div');
            forecastContainer.id = 'forecast';

            for (let i = 0; i < 3; i++) {
                const forecast = data.list[i * 8]; // 3-day forecast, data every 3 hours
                const date = new Date(forecast.dt_txt).toLocaleDateString();
                const temp = Math.round(forecast.main.temp);
                const description = forecast.weather.map(w => w.description).join(', ').replace(/\b\w/g, char => char.toUpperCase());

                const forecastHTML = `
                    <p>${date}: ${temp}°C, ${description}</p>
                `;
                forecastContainer.innerHTML += forecastHTML;
            }
            document.getElementById('weather-data').appendChild(forecastContainer);
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}

async function loadCompanySpotlights() {
    async function fetchMembers() {
        const response = await fetch("data/members.json");
        const members = await response.json();
        return members;
    }
    
    const members = await fetchMembers();
    console.log(members);

    const qualifiedMembers = members.filter(member => member.membership_level == 3 || member.membership_level == 2);
    const randomMembers = [];

    while (randomMembers.length < 3 && qualifiedMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
        randomMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
    }

    const spotlightContainer = document.getElementById('spotlight-companies');
    randomMembers.forEach(member => {
        const memberHTML = `
            <div class="company-spotlight">
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.membership_level}</p>
            </div>
        `;
        spotlightContainer.innerHTML += memberHTML;
    });
}

const today = new Date();

let year = document.getElementById("currentyear");
let last = document.getElementById("lastModified");

let currentYear = today.getFullYear();
let lastModified = document.lastModified;

year.innerHTML = currentYear;
last.innerHTML = `Last Modification: ${lastModified}`;

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    fetchWeatherData();
    loadCompanySpotlights();
});
