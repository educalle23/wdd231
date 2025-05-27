const temp = document.getElementById("current-temp");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const myTown = document.querySelector('#myTown')
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

function displayResults(data) {
    console.log("hola");
    myTown.textContent = data.name;
    temp.innerHTML = `${data.main.temp} C°`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = data.weather[0].description;

}

apiFetch();
