const degree = document.querySelector(".degree-p");
const loc = document.querySelector(".location-p");
const bgBar = document.querySelector(".weather-bar");
const backgr = document.querySelector(".backgr");
const timeHour = document.querySelector(".crnt-time-hour");
const timeMin = document.querySelector(".crnt-time-min");
const timeSec = document.querySelector(".crnt-time-sec");
const weatherDescrp = document.querySelector(".description");
const dayTime = document.querySelector(".day-time");
const nightTime = document.querySelector(".night-time");
const cloudy = document.querySelector(".cloudy");


const fetchData = () => {

    fetch('https://weather-api138.p.rapidapi.com/weather?city_name=Baku', {
        headers: {
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com',
            'x-rapidapi-key': '1bbf5992f4msh82d8c0e516eab75p1f7ffdjsna8d4f238d450'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            loc.innerHTML = `${data.name} , ${data.sys.country}`;
            degree.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
            weatherDescrp.innerHTML = data.weather[0].main;

            if (data.weather[0].main === "Cloudy") {
                cloudy.style.display = "block";
                dayTime.style.display = "none";
            }
        })
}

setInterval(() => {
    timeHour.innerHTML = new Date().getHours();
    timeMin.innerHTML = new Date().getMinutes();
    timeSec.innerHTML = new Date().getSeconds();
}, 1000);

if (new Date().getHours() >= 6 && new Date().getHours() < 12) {
    bgBar.classList.add("sunrise");
    backgr.classList.add("sunrise");
} else if (new Date().getHours() >= 12 && new Date().getHours() < 16) {
    bgBar.classList.add("sunny");
    backgr.classList.add("sunny");
} else if (new Date().getHours() >= 16 && new Date().getHours() < 20) {
    bgBar.classList.add("sunset");
    backgr.classList.add("sunset");
} else {
    bgBar.classList.add("night");
    backgr.classList.add("night");
    nightTime.style.display = "block";
    dayTime.style.display = "none";
}

fetchData();