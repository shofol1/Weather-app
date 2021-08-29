const searchCity=()=>{
    // take input value
    const cityInputField=document.getElementById('cityInputField');
    const cityName = cityInputField.value;
    const countryInputField=document.getElementById('countryInputField');
    const countryCode = countryInputField.value;
    // clear input value
    cityInputField.value='';
    countryInputField.value='';

// fetch data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=metric&appid=0cbeed5a6f8c75fcd1879cb5c2e0f390`)
.then(res=>res.json())
.then(data=>displayWeather(data));
}

const displayWeather=weatherData=>{
    console.log(weatherData)
    const weatherDetails=document.getElementById('weather-details');
    weatherDetails.textContent='';
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="row">
        <div class="col-md-4">
        <h2 class="text-center">${weatherData.main.temp}</h2>
        </div>
        <div class="col-md-4">
        <h2 class="text-center">${weatherData.weather[0].main}</h2>
        </div>
        <div class="col-md-4">
        <h2 class="text-center">${weatherData.weather[0].description}</h2>
        </div>
    </div>

    `
    weatherDetails.appendChild(div)

}
