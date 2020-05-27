class UI{
    constructor(){
        this.weatherLocation = document.getElementById('weather-location');
        this.weatherDesc = document.getElementById('w-desc');
        this.weatherString = document.getElementById('w-string');
        this.weatherIcon = document.getElementById('w-icon');
        this.weatherHumidity = document.getElementById('w-humidity');
        this.weatherWindSpeed = document.getElementById('w-speed');
        this.weatherWindDir = document.getElementById('w-direction');
        this.weatherVisibility = document.getElementById('w-visibility');
    }

    showResults(response)
    {
        console.log(response);
        this.weatherLocation.textContent = response.location.name + ',' + response.location.country;
        this.weatherIcon.setAttribute('src', response.current.condition.icon)
        this.weatherDesc.textContent = response.current.condition.text;
        this.weatherString.textContent = response.current.temp_c + '\xB0 C (' + response.current.temp_f + '\xB0 F)';
        this.weatherHumidity.textContent = 'Humidity : ' + response.current.humidity;
        this.weatherWindSpeed.textContent = 'Wind-Speed (in kph) : ' + response.current.wind_kph ;
        this.weatherWindDir.textContent = 'Wind-Direction : ' + response.current.wind_dir;
        this.weatherVisibility.textContent = 'Visibility(in kph) : ' + response.current.vis_km;
    }

    showAlert(){
        const alert = document.getElementById('cityNameAlert');
        alert.style.display = "block";
    }

    removeAlert(){
        const alert = document.getElementById('cityNameAlert');
        alert.style.display = "none";
    }
}