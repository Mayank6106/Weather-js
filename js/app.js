// initialize weather class
const weather = new Weather;

// initialize ui class
const ui = new UI;

// initialize weather location to amritsar
document.addEventListener('DOMContentLoaded', getweather('amritsar'))

//Get location selector button
const submitBtn = document.getElementById('submitBtn');

// Get City Name
const cityName = document.getElementById('cityName').value;

submitBtn.addEventListener('click', () => {
    // Get City Name
    const cityName = document.getElementById('cityName').value;

    getweather(cityName);
});


function getweather(cityName){
    if(cityName !== '')
    {
        ui.removeAlert();
        weather.getWeather(cityName)
        .then(response => {
            ui.showResults(response);
        });
    }
    else{
        ui.showAlert();
        setInterval(() => {
            ui.removeAlert();
        }, 2000);
    }
}



//api - https://www.weatherapi.com/api-explorer.aspx