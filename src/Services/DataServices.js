import HomePageComponent from "../Components/HomePage/HomePageComponent";

let latitude;
let longitude;
let maxTemp;
let minTemp;
let currentTemp;



async function AsyncGetCity(inputValue){
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${inputValue},US&limit=1&appid=25ec7bd03239e4e329685d74aeed9d60`);
    const data = await promise.json();

    latitude = data[0].lat;
    longitude = data[0].lon;

    let data1 = await GetWeatherData(latitude, longitude);
    let data2 = await AsyncGetWeather5Day(latitude, longitude);

    
    

    let arr = {
        WeatherDataMain: data1.main.temp,
        WeatherDataImg: data1.weather[0].icon,
        WeatherDataMin: data1.main.temp_min,
        WeatherDataMax: data1.main.temp_max,
        WeatherData5Day1Min: data2.list[8].main.temp_min,
        WeatherData5Day1Max: data2.list[8].main.temp_max,
        WeatherData5Day1Img: data2.list[8].weather[0].icon,
        WeatherData5Day2Min: data2.list[16].main.temp_min,
        WeatherData5Day2Max: data2.list[16].main.temp_max,
        WeatherData5Day2Img: data2.list[16].weather[0].icon,
        WeatherData5Day3Min: data2.list[24].main.temp_min,
        WeatherData5Day3Max: data2.list[24].main.temp_max,
        WeatherData5Day3Img: data2.list[24].weather[0].icon,
        WeatherData5Day4Min: data2.list[32].main.temp_min,
        WeatherData5Day4Max: data2.list[32].main.temp_max,
        WeatherData5Day4Img: data2.list[32].weather[0].icon,
        WeatherData5Day5Min: data2.list[39].main.temp_min,
        WeatherData5Day5Max: data2.list[39].main.temp_max,
        WeatherData5Day5Img: data2.list[39].weather[0].icon,
        WeatherData5Day1Date: data2.list[8].dt_txt,
        WeatherData5Day2Date: data2.list[16].dt_txt,
        WeatherData5Day3Date: data2.list[24].dt_txt,
        WeatherData5Day4Date: data2.list[32].dt_txt,
        WeatherData5Day5Date: data2.list[39].dt_txt,
    }
    return arr;
}





async function GetWeatherData(latitude, longitude){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=25ec7bd03239e4e329685d74aeed9d60`);
    const data = await promise.json();

    minTemp = Math.round(data.main.temp_min);
    maxTemp = Math.round(data.main.temp_max);
    currentTemp = Math.round(data.main.temp);
    return data;

}

async function AsyncGetWeather5Day(latitude, longitude){
    

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=25ec7bd03239e4e329685d74aeed9d60&units=imperial`);
    const data = await promise.json();

    return data;

}



export {GetWeatherData, AsyncGetCity, AsyncGetWeather5Day};