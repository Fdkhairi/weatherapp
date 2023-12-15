const apiKey="f45da98eae5a025074f6e9b0f4d522e3";//api key from the weather app
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";//api url from open weather app with partial data at the end 


const searchBox=document.querySelector('.search input');//search box where the data will be added and searched 

const searchBtn=document.querySelector('.search button');//? ask more about this what is this doing ............????????????

const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){//a sync function with input city becasue weather will be searched on basedon the city 


    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);//concatinated appi url city and with key and stored in the response


    if(response.status== 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        const data = await response.json();
        
document.querySelector(".city").innerHTML = data.name;// retrieve data

document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+"°c";// retrieve data

document.querySelector(".humidity").innerHTML = data.main.humidity+"%";// retrieve data

document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";// retrieve data

if (data.weather[0].main=="Clouds"){// adding the clouds in the weather conditionbased on the weather 
weatherIcon.src="images/clouds.png";

}else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png";
}
else if (data.weather[0].main=="drizzle"){
    weatherIcon.src="images/drizzle.png";
}
else if (data.weather[0].main=="mist"){
    weatherIcon.src="images/mist.png";
}
else if (data.weather[0].main=="rain"){
    weatherIcon.src="images/rain.png";
}
else if (data.weather[0].main=="snow"){
    weatherIcon.src="images/snow.png";
}

document.querySelector(".weather").style.display ="block";
document.querySelector(".error").style.display="none";
    }
  

}
searchBtn.addEventListener("click", ()=>{//add an even listener that means on 'click' , run the following a sync function


    checkWeather(searchBox.value);//what is ???????
});

console.log(searchBox);