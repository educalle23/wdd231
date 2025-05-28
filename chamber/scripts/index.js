const temp = document.getElementById("info-current");
const weatherIcon = document.querySelector('#img-current');
const captionDesc = document.createElement('p');

// const myTown = document.querySelector('#myTown')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-8.11557&lon=-79.0&units=metric&appid=c2454891036de5dbd628eee0a593638f';


async function apiFetch() {
    try {
        const response =  await fetch(url)
        if (response.ok){
            const data =  await response.json();
            console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    
}

// function displayResults(data) {
//     temp.innerHTML = `${data.main.temp} C°`
//     console.log(data.main.temp_max)
//     console.log(data.main.temp_min)
//     console.log(data.main.humidity)
//     console.log(new Date (data.sys.sunrise * 1000).toLocaleTimeString("en-US"));
//     console.log(new Date (data.sys.sunset * 1000).toLocaleTimeString("en-US"));
//     // const amanecer = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
//     // const atardecer = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

//     const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     // const captionDesc = data.weather[0].description;
//     temp.innerHTML = `${data.main.temp_max}`;
    

// }

function displayResults(data) {
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
}

apiFetch();