const container = document.querySelector("#container-cards");
const btnGrid = document.querySelector("#btnGrid");
const btnList = document.querySelector("#btnList");
const url = "scripts/members.json";

const divCurrent = document.querySelector('.current-weather');
const temp = document.getElementById("info-current");
const weatherIcon = document.querySelector('#img-current');
const captionDesc = document.createElement('p');
const infoForecast = document.createElement('div');
infoForecast.classList.add('info-forecast');

const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=-8.11557&lon=-79.0&units=metric&appid=c2454891036de5dbd628eee0a593638f';
// const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=-8.11557&lon=-79.0&units=metric&appid=c2454891036de5dbd628eee0a593638f';
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=-23.55&lon=-51.44&appid=c2454891036de5dbd628eee0a593638f`;

// async function apiFetch() {
//     try {
//         const [responseCurrent] = await Promise.all([
//             fetch(urlCurrent)
//         ]);
//         if (responseCurrent.ok) {
//             console.log("API call successful");
//             const dataCurrent =  await responseCurrent.json();
//             // const dataForecast = await responseForecast.json();
//             console.log(dataCurrent);
//             // console.log(dataForecast);
//             displayResultsCurrent(dataCurrent);
//             // displayResultsForecast(data);
//         } else{
//             throw Error(await responseCurrent.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// 🔄 FUNCIÓN PARA OBTENER DATOS DE LA API
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

        console.log("Datos actuales:", dataCurrent);
        console.log("Datos de pronóstico:", dataForecast);
        
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
    divCurrent.append(temp, weatherIcon);
}



apiFetch();


























// const divCurrent = document.querySelector('.current-weather');
// console.log(divCurrent);
// const temp = document.getElementById("info-current");
// const weatherIcon = document.querySelector('#img-current');
// const captionDesc = document.createElement('p');
// const infoForecast = document.createElement('div');
// infoForecast.classList.add('info-forecast');

// console.log(temp);
// // const myTown = document.querySelector('#myTown')
// const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=-8.11557&lon=-79.0&units=metric&appid=c2454891036de5dbd628eee0a593638f';
// // const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=-8.11557&lon=-79.0&units=metric&appid=c2454891036de5dbd628eee0a593638f';
// const urlForecast = `//api.openweathermap.org/data/2.5/forecast?units=metric&lat=-23.55&lon=-51.44&appid=d9dd6d8a73d9ff6ac1c95ae92c271cf1`;


// async function apiFetch() {
//     try {
//         const [responseCurrent, responseForecast] = await Promise.all([
//             fetch(urlCurrent), fetch(urlForecast)
//         ]);
//         if (responseCurrent.ok || responseForecast.ok) {
//             console.log("API call successful");
//             const dataCurrent =  await responseCurrent.json();
//             // const dataForecast = await responseForecast.json();
//             console.log(dataCurrent);
//             // console.log(dataForecast);
//             displayResultsCurrent(dataCurrent);
//             // displayResultsForecast(data);
//         } else{
//             throw Error(await responseForecast.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
    
// }


// function displayResultsCurrent(data) {
//     const tempActual = data.main.temp;
//     const tempMax = data.main.temp_max;
//     const tempMin = data.main.temp_min;
//     const humedad = data.main.humidity;
//     const amanecer = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
//     const atardecer = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

//     temp.innerHTML = `
//         <strong>Temperature:</strong> ${tempActual} C° <br>
//         <strong>Max Temperature:</strong> ${tempMax} C° <br>
//         <strong>Min Temperature:</strong> ${tempMin} C° <br>
//         <strong>Humidity:</strong> ${humedad}% <br>
//         <strong>Sunrise:</strong> ${amanecer} <br>
//         <strong>Sunset:</strong> ${atardecer}
//     `;

//     const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     weatherIcon.setAttribute("src", iconsrc);
//     weatherIcon.setAttribute("alt", data.weather[0].description);
//     divCurrent.join(temp, weatherIcon);
// }

// function displayResultsForecast(data) {
//     const tempActual = data.main.temp;
//     const tempMax = data.main.temp_max;
//     const tempMin = data.main.temp_min;
//     const humedad = data.main.humidity;
//     const amanecer = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
//     const atardecer = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

//     temp.innerHTML = `
//         <strong>Temperature:</strong> ${tempActual} C° <br>
//         <strong>Max yaraaa:</strong> ${tempMax} C° <br>
//         <strong>Min Temperature:</strong> ${tempMin} C° <br>
//         <strong>Humidity:</strong> ${humedad}% <br>
//         <strong>Sunrise:</strong> ${amanecer} <br>
//         <strong>Sunset:</strong> ${atardecer}
//     `;

//     const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     weatherIcon.setAttribute("src", iconsrc);
//     weatherIcon.setAttribute("alt", data.weather[0].description);
// }

// const cards = document.querySelector("#container-cards"); 
// // const urlForecast = `//api.openweathermap.org/data/2.5/forecast?units=metric&lat=-23.55&lon=-51.44&appid=d9dd6d8a73d9ff6ac1c95ae92c271cf1`;


// async function renderGrid() {
//         const data = await fetchData();
//         container.innerHTML = "";
//         container.className = "grid-view";
//         data.forEach(item => {
//             const card = document.createElement("div");
//             card.classList.add("item");
//             card.innerHTML = `
//                 <img src="images/${item.image}" alt="${item.name}">

//                 <p>${item.address}</p>
//                 <p>${item.phone}</p>
//                 <p>ID: ${item.id}</p>
//                 <a>${item.website}</a>
//             `;
//             container.appendChild(cards);
//         });
//     }


// apiFetch();


// ///HELP FORM THE TEAM MEETING
// // const iconSource2 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;

// // const iconSource3 = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`; 
