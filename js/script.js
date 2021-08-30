const searchCity=()=>{
    // take input value
    const cityInputField=document.getElementById('cityInputField');
    const cityName = cityInputField.value;
    const countryInputField=document.getElementById('countryInputField');
    const countryCode = countryInputField.value;
    // clear input value
    cityInputField.value='';
    countryInputField.value='';
    const spinner=document.getElementById('spinner');
    spinner.style.display='block';

// fetch data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=metric&appid=0cbeed5a6f8c75fcd1879cb5c2e0f390`)
.then(res=>res.json())
.then(data=>displayWeather(data));s
}

const displayWeather=weatherData=>{
    console.log(weatherData);
    const icon=document.getElementById('icon');
    const bodyImage=changeBodyImage(weatherData.weather[0].main);
    // console.log(weatherData.weather[0].main);
    const spinner=document.getElementById('spinner');
    spinner.style.display='none';
    spinner.style.display='none';
    if(weatherData.weather[0].main=='Rain'){
        icon.innerHTML=`
        </style>
        <i class="fas fa-cloud-showers-heavy"></i>
        `
    }else if(weatherData.weather[0].main=='Clouds')(

        icon.innerHTML=`
        <i class="fas fa-cloud"></i>
        `
    )
    else{
        icon.innerHTML=`
        <i class="fas fa-cloud-sun"></i>
        `
    }
    const weatherDetails=document.getElementById('weather-details');
    weatherDetails.textContent='';
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="row text-white">
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
const changeBodyImage=RainCloud=>{
    console.log(RainCloud);
    const body=document.getElementById('body');
    const heading=document.getElementById('heading');
    const btn=document.getElementById('btn-search');
    if(RainCloud=='Rain'){
        body.style.backgroundImage='url("img/rain1.jpg")';
        body.style.backgroundSize='cover';
        body.style.backgroundRepeat='no repeat';
        heading.style.color='#fff';
        btn.style.color='white';
        btn.style.border='3px solid white';
    }
    else if(RainCloud=='Clouds'){
        body.style.backgroundImage='url("img/cloudy.jpg")';
        body.style.backgroundSize='cover';
        body.style.backgroundRepeat='no repeat';
        heading.style.color='#fff';
    }
    else{
        body.style.backgroundImage='url("img/cloud.jpg")';
        body.style.backgroundSize='cover';
        body.style.backgroundRepeat='no repeat';
        heading.style.color='#fff';
        btn.style.color='white';
        btn.style.border='3px solid white';
    }
}