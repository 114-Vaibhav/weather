const apikey ="98c1b210767ee177b86bbde80459a4cc";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weathericon = document.querySelector(".weather-icon")
var button = document.getElementById('button');
checkWeather("maigalganj")
button.addEventListener("click",function(){
    var city = document.getElementById('input')
    if(city.value==""){
        alert("Must Enter City Name")
    }
    // console.log("asdfgasgd")
    checkWeather(city.value);
    city.value=""
})

async function checkWeather(city){
   
    const response = await fetch(apiurl+city +`&appid=${apikey}`)
   
    if(response.status==404){
        console.log("invalid")
        alert("INVALID CITY");
    } 
   
    var data = await response.json();
    console.log(data);
    // if(data.cod=='404'){
    //     console.log("invalid")
    //     alert("INVALID CITY");
    // } 
    
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp_min +"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

 if(data.weather[0].main=="Clouds"){
    weathericon.src ="images/clouds.png"
 } 
else if(data.weather[0].main=="Clear"){
    weathericon.src ="images/clear.png"
 } 
 else if(data.weather[0].main=="Drizzle"){
    weathericon.src ="images/drizzle.png"
 } 
 else if(data.weather[0].main=="Mist"){
    weathericon.src ="images/mist.png"
 } 
 else if(data.weather[0].main=="Rain"){
    weathericon.src ="images/rain.png"
 } 
 else if(data.weather[0].main=="snow"){
    weathericon.src ="images/snow.png"
 } else weathericon.src ="images/mist.png"
            
}



