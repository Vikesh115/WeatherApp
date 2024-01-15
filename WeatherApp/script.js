let button = document.querySelector(".button");
let inputvalue = document.querySelector(".inputValue");
let nameVal = document.querySelector(".name");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");

button.addEventListener("click", function () {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=719ab3ac0e78cfe9975840ba683e0a75`
    )
        .then((response) => response.json())
        .then(displayData)
        .catch((_err) => alert("Wrong City name"));
});

const displayData = (weather) => {
    temp.innerText = `${weather.main.temp}°C`;
    desc.innerText = `${weather.weather[0].main}`;
};