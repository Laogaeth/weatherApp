let weather={
    apiKey: "3d4e81be25e9cf8c39af2c0892e0a263",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        ) 
        .then((response)=> response.json())
        .then((data)=> this.displayWeather(data)); //to get the information from the api 
    },
    //fetch data from API & display in the app
    displayWeather: function(data){
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText ="Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerText ="Humidity: " +humidity + "%";
        document.querySelector(".wind").innerText="Wind speed: "+ speed + "km/h";
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('http://source.unsplash.com/1600x900/?" + name+ "')"
},
search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
}
};
//Make Search Bar functional
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

//for Enter key to work
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchWeather("Aveiro")

