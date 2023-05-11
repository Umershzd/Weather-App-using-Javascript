const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b39c767facmshb03aae84a64a110p1b1c7ejsne6d60efc5b22',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather=(city)=>
{
    cityName.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => 
        {
            console.log(response);

            document.getElementById("cloud_pct").innerHTML=response.cloud_pct;
           
            document.getElementById("feels_like").innerHTML=response.feels_like;
            // console.log(feels_like)
            document.getElementById("humidity").innerHTML=response.humidity;
            document.getElementById("max_temp").innerHTML=response.max_temp;
            document.getElementById("min_temp").innerHTML=response.min_temp;
            document.getElementById("sunrise").innerHTML=response.sunrise;
            document.getElementById("sunset").innerHTML=response.sunset;
             document.getElementById("temp").innerHTML=response.temp;
             document.getElementById("wind_degrees").innerHTML=response.wind_degrees;
             document.getElementById("wind_speed").innerHTML=response.wind_speed;
    
        })
        
            .catch(err => console.error(err));
        }

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getweather(city.value);
})
getweather("Islamabad");