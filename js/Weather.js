class Weather{
    constructor(){
        this.api_key = '5039d1c3cbd547b2a0694645202605';
    }

    async getWeather(location){
        const weatherInfo = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.api_key}&q=${location}`);

        const weatherData = await weatherInfo.json();

        return weatherData;
    }
}
