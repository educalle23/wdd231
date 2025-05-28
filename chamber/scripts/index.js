const divCurrent = document.querySelector('·current-weather');
const temp = document.getElementById("info-current");
const weatherIcon = document.querySelector('#img-current');
const captionDesc = document.createElement('p');
const infoForecast = document.createElement('div');
infoForecast.classList.add('info-forecast');
// const myTown = document.querySelector('#myTown')
const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=-8.11557&lon=-79.0&units=metric&appid=c2454891036de5dbd628eee0a593638f';
// const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=-8.11557&lon=-79.0&units=metric&appid=c2454891036de5dbd628eee0a593638f';


async function apiFetch() {
    try {
        const [responseCurrent] = await Promise.all([
            fetch(urlCurrent),
        ]);
        if (responseCurrent.ok) {
            console.log("API call successful");
            const dataCurrent =  await responseCurrent.json();
            // const dataForecast = await responseForecast.json();
            console.log(dataCurrent);
            // console.log(dataForecast);
            displayResultsCurrent(dataCurrent);
            // displayResultsForecast(data);
        } else{
            throw Error(await responseForecast.text());
        }
    } catch (error) {
        console.log(error);
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
        <strong>Temperature:</strong> ${tempActual} C° <br>
        <strong>Max Temperature:</strong> ${tempMax} C° <br>
        <strong>Min Temperature:</strong> ${tempMin} C° <br>
        <strong>Humidity:</strong> ${humedad}% <br>
        <strong>Sunrise:</strong> ${amanecer} <br>
        <strong>Sunset:</strong> ${atardecer}
    `;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    divCurrent.join(temp, weatherIcon);
}

function displayResultsForecast(data) {
    const tempActual = data.main.temp;
    const tempMax = data.main.temp_max;
    const tempMin = data.main.temp_min;
    const humedad = data.main.humidity;
    const amanecer = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    const atardecer = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

    temp.innerHTML = `
        <strong>Temperature:</strong> ${tempActual} C° <br>
        <strong>Max yaraaa:</strong> ${tempMax} C° <br>
        <strong>Min Temperature:</strong> ${tempMin} C° <br>
        <strong>Humidity:</strong> ${humedad}% <br>
        <strong>Sunrise:</strong> ${amanecer} <br>
        <strong>Sunset:</strong> ${atardecer}
    `;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
}

const cards = document.querySelector("#container-cards"); 


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
            container.appendChild(cards);
        });
    }


apiFetch();