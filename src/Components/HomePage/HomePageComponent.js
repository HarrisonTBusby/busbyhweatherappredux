import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './HomePageComponent.css';
import { GetWeatherData, AsyncGetCity, AsyncGetWeather5Day } from '../../Services/DataServices';
import { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage } from '../../Services/LocalStorage';
import FavoritesButton from '../../Assets/FavoritesFinalFantasy.png';
import FavModal from '../Modal/ModalComponent.js';


let SetData;
let SetImg;
let SetDataMin;
let SetDataMax;
let SetWeatherData5Day1Min;
let SetWeatherData5Day1Max;
let SetWeatherData5Day2Min;
let SetWeatherData5Day2Max;
let SetWeatherData5Day3Min;
let SetWeatherData5Day3Max;
let SetWeatherData5Day4Min;
let SetWeatherData5Day4Max;
let SetWeatherData5Day5Min;
let SetWeatherData5Day5Max;
let SetWeatherDay1Img;
let SetWeatherDay2Img;
let SetWeatherDay3Img;
let SetWeatherDay4Img;
let SetWeatherDay5Img;

let SetWeatherDay1Date;
let SetWeatherDay2Date;
let SetWeatherDay3Date;
let SetWeatherDay4Date;
let SetWeatherDay5Date;


export default function HomePageComponent(props) {
    // Current Day
    const [inputValue, setInputValue] = useState('Stockton');
    const [weatherMain, setWeatherMain] = useState('');
    const [weatherImg, setWeatherImg] = useState('');
    const [weatherMin, setWeatherMin] = useState('');
    const [weatherMax, setWeatherMax] = useState('');
    // 5 Day Forecast
    const [weather5Day1Min, setWeather5Day1Min] = useState('');
    const [weather5Day1Max, setWeather5Day1Max] = useState('');
    const [weather5Day2Min, setWeather5Day2Min] = useState('');
    const [weather5Day2Max, setWeather5Day2Max] = useState('');
    const [weather5Day3Min, setWeather5Day3Min] = useState('');
    const [weather5Day3Max, setWeather5Day3Max] = useState('');
    const [weather5Day4Min, setWeather5Day4Min] = useState('');
    const [weather5Day4Max, setWeather5Day4Max] = useState('');
    const [weather5Day5Min, setWeather5Day5Min] = useState('');
    const [weather5Day5Max, setWeather5Day5Max] = useState('');
    // Imgs
    const [weatherDay1Img, setWeatherDay1Img] = useState('');
    const [weatherDay2Img, setWeatherDay2Img] = useState('');
    const [weatherDay3Img, setWeatherDay3Img] = useState('');
    const [weatherDay4Img, setWeatherDay4Img] = useState('');
    const [weatherDay5Img, setWeatherDay5Img] = useState('');
    // Dates
    const [weatherDay1Date, setWeatherDay1Date] = useState('');
    const [weatherDay2Date, setWeatherDay2Date] = useState('');
    const [weatherDay3Date, setWeatherDay3Date] = useState('');
    const [weatherDay4Date, setWeatherDay4Date] = useState('');
    const [weatherDay5Date, setWeatherDay5Date] = useState('');


    useEffect(() => {
        (async () => {
            const data = await AsyncGetCity(inputValue);
            SetData = Math.round(data.WeatherDataMain);
            SetImg = data.WeatherDataImg;
            SetDataMin = Math.round(data.WeatherDataMin);
            SetDataMax = Math.round(data.WeatherDataMax);

            SetWeatherData5Day1Min = Math.round(data.WeatherData5Day1Min);
            SetWeatherData5Day1Max = Math.round(data.WeatherData5Day1Max);
            SetWeatherData5Day2Min = Math.round(data.WeatherData5Day2Min);
            SetWeatherData5Day2Max = Math.round(data.WeatherData5Day2Max);
            SetWeatherData5Day3Min = Math.round(data.WeatherData5Day3Min);
            SetWeatherData5Day3Max = Math.round(data.WeatherData5Day3Max);
            SetWeatherData5Day4Min = Math.round(data.WeatherData5Day4Min);
            SetWeatherData5Day4Max = Math.round(data.WeatherData5Day4Max);
            SetWeatherData5Day5Min = Math.round(data.WeatherData5Day5Min);
            SetWeatherData5Day5Max = Math.round(data.WeatherData5Day5Max);

            SetWeatherDay1Img = data.WeatherData5Day1Img;
            SetWeatherDay2Img = data.WeatherData5Day2Img;
            SetWeatherDay3Img = data.WeatherData5Day3Img;
            SetWeatherDay4Img = data.WeatherData5Day4Img;
            SetWeatherDay5Img = data.WeatherData5Day5Img;

            SetWeatherDay1Date = new Date(data.WeatherData5Day1Date);
            let options1 = { weekday: "long" };
            let day1 = new Intl.DateTimeFormat("en-US", options1).format(SetWeatherDay1Date);
            let dayAsString1 = String(day1);

            SetWeatherDay2Date = new Date(data.WeatherData5Day2Date);
            let options2 = { weekday: "long" };
            let day2 = new Intl.DateTimeFormat("en-US", options2).format(SetWeatherDay2Date);
            let dayAsString2 = String(day2);

            SetWeatherDay3Date = new Date(data.WeatherData5Day3Date);
            let options3 = { weekday: "long" };
            let day3 = new Intl.DateTimeFormat("en-US", options3).format(SetWeatherDay3Date);
            let dayAsString3 = String(day3);

            SetWeatherDay4Date = new Date(data.WeatherData5Day4Date);
            let options4 = { weekday: "long" };
            let day4 = new Intl.DateTimeFormat("en-US", options4).format(SetWeatherDay4Date);
            let dayAsString4 = String(day4);

            SetWeatherDay5Date = new Date(data.WeatherData5Day5Date);
            let options5 = { weekday: "long" };
            let day5 = new Intl.DateTimeFormat("en-US", options5).format(SetWeatherDay5Date);
            let dayAsString5 = String(day5);




            setWeatherMain(SetData + '°F');
            setWeatherImg(SetImg);
            setWeatherMin(SetDataMin + '°F');
            setWeatherMax(SetDataMax + '°F');

            setWeather5Day1Min(SetWeatherData5Day1Min + '°F');
            setWeather5Day1Max(SetWeatherData5Day1Max + '°F');
            setWeather5Day2Min(SetWeatherData5Day2Min + '°F');
            setWeather5Day2Max(SetWeatherData5Day2Max + '°F');
            setWeather5Day3Min(SetWeatherData5Day3Min + '°F');
            setWeather5Day3Max(SetWeatherData5Day3Max + '°F');
            setWeather5Day4Min(SetWeatherData5Day4Min + '°F');
            setWeather5Day4Max(SetWeatherData5Day4Max + '°F');
            setWeather5Day5Min(SetWeatherData5Day5Min + '°F');
            setWeather5Day5Max(SetWeatherData5Day5Max + '°F');

            setWeatherDay1Img(SetWeatherDay1Img);
            setWeatherDay2Img(SetWeatherDay2Img);
            setWeatherDay3Img(SetWeatherDay3Img);
            setWeatherDay4Img(SetWeatherDay4Img);
            setWeatherDay5Img(SetWeatherDay5Img);

            setWeatherDay1Date(dayAsString1);
            setWeatherDay2Date(dayAsString2);
            setWeatherDay3Date(dayAsString3);
            setWeatherDay4Date(dayAsString4);
            setWeatherDay5Date(dayAsString5);
        })();
    }, []);

    const handleCity = (e) => setInputValue(e.target.value);

    function Fav() {
        saveToLocalStorageByName(inputValue);
    }


    async function handleKeyPress(event) {
        if (event.key === 'Enter') {
            setInputValue(event.target.value);
            const data = await AsyncGetCity(inputValue);
            SetData = Math.round(data.WeatherDataMain);
            SetImg = data.WeatherDataImg;
            SetDataMin = Math.round(data.WeatherDataMin);
            SetDataMax = Math.round(data.WeatherDataMax);

            SetWeatherData5Day1Min = Math.round(data.WeatherData5Day1Min);
            SetWeatherData5Day1Max = Math.round(data.WeatherData5Day1Max);
            SetWeatherData5Day2Min = Math.round(data.WeatherData5Day2Min);
            SetWeatherData5Day2Max = Math.round(data.WeatherData5Day2Max);
            SetWeatherData5Day3Min = Math.round(data.WeatherData5Day3Min);
            SetWeatherData5Day3Max = Math.round(data.WeatherData5Day3Max);
            SetWeatherData5Day4Min = Math.round(data.WeatherData5Day4Min);
            SetWeatherData5Day4Max = Math.round(data.WeatherData5Day4Max);
            SetWeatherData5Day5Min = Math.round(data.WeatherData5Day5Min);
            SetWeatherData5Day5Max = Math.round(data.WeatherData5Day5Max);

            SetWeatherDay1Img = data.WeatherData5Day1Img;
            SetWeatherDay2Img = data.WeatherData5Day2Img;
            SetWeatherDay3Img = data.WeatherData5Day3Img;
            SetWeatherDay4Img = data.WeatherData5Day4Img;
            SetWeatherDay5Img = data.WeatherData5Day5Img;

            SetWeatherDay1Date = new Date(data.WeatherData5Day1Date);
            let options1 = { weekday: "long" };
            let day1 = new Intl.DateTimeFormat("en-US", options1).format(SetWeatherDay1Date);
            let dayAsString1 = String(day1);

            SetWeatherDay2Date = new Date(data.WeatherData5Day2Date);
            let options2 = { weekday: "long" };
            let day2 = new Intl.DateTimeFormat("en-US", options2).format(SetWeatherDay2Date);
            let dayAsString2 = String(day2);

            SetWeatherDay3Date = new Date(data.WeatherData5Day3Date);
            let options3 = { weekday: "long" };
            let day3 = new Intl.DateTimeFormat("en-US", options3).format(SetWeatherDay3Date);
            let dayAsString3 = String(day3);

            SetWeatherDay4Date = new Date(data.WeatherData5Day4Date);
            let options4 = { weekday: "long" };
            let day4 = new Intl.DateTimeFormat("en-US", options4).format(SetWeatherDay4Date);
            let dayAsString4 = String(day4);

            SetWeatherDay5Date = new Date(data.WeatherData5Day5Date);
            let options5 = { weekday: "long" };
            let day5 = new Intl.DateTimeFormat("en-US", options5).format(SetWeatherDay5Date);
            let dayAsString5 = String(day5);


            setWeatherMain(SetData + '°F');
            setWeatherImg(SetImg);
            setWeatherMin(SetDataMin + '°F');
            setWeatherMax(SetDataMax + '°F');

            setWeather5Day1Min(SetWeatherData5Day1Min + '°F');
            setWeather5Day1Max(SetWeatherData5Day1Max + '°F');
            setWeather5Day2Min(SetWeatherData5Day2Min + '°F');
            setWeather5Day2Max(SetWeatherData5Day2Max + '°F');
            setWeather5Day3Min(SetWeatherData5Day3Min + '°F');
            setWeather5Day3Max(SetWeatherData5Day3Max + '°F');
            setWeather5Day4Min(SetWeatherData5Day4Min + '°F');
            setWeather5Day4Max(SetWeatherData5Day4Max + '°F');
            setWeather5Day5Min(SetWeatherData5Day5Min + '°F');
            setWeather5Day5Max(SetWeatherData5Day5Max + '°F');

            setWeatherDay1Img(SetWeatherDay1Img);
            setWeatherDay2Img(SetWeatherDay2Img);
            setWeatherDay3Img(SetWeatherDay3Img);
            setWeatherDay4Img(SetWeatherDay4Img);
            setWeatherDay5Img(SetWeatherDay5Img);

            setWeatherDay1Date(dayAsString1);
            setWeatherDay2Date(dayAsString2);
            setWeatherDay3Date(dayAsString3);
            setWeatherDay4Date(dayAsString4);
            setWeatherDay5Date(dayAsString5);


        }
    }



    return (
        <body>

            {/*Title  */}
            <Row className='mt-4 '>
                <Col className='headingBackground2 center col-lg-6 col-md-12 col-sm-12'>
                    <p className='fontHeader'>Weather App</p>
                </Col>

            </Row>


            {/* Search  */}
            <div className='center'>
                <div className='mt-5 center col-12'>

                    <button className='btnFav' onClick={Fav}><img className='iconSize' src={FavoritesButton} /></button>
                    <input className='inputBox' type='text' placeholder='Search' onKeyDown={handleKeyPress} onChange={handleCity} value={inputValue}></input>
                    <FavModal />
                </div>
            </div>


            {/* Today Forecast */}
            <div className='center'>

                <div className='mt-5 mainBox'>
                    <Row className='cityBox'>
                        <Col>{inputValue}</Col>
                        <Col>C: {weatherMain}</Col>
                        <Col>L: {weatherMin}</Col>
                        <Col>H: {weatherMax}</Col>
                        <Col><img src={`https://openweathermap.org/img/wn/${weatherImg}@2x.png`} /></Col>
                    </Row>
                </div>

            </div>







            {/* Day of week Forecast Cards */}
            <div className='center'>
                <Row className='mt-5 mainBox2'>
                    <Col className='col cityBox2'>
                        <div>{weatherDay1Date}</div>
                        <div>L:{weather5Day1Min}</div>
                        <div>H:{weather5Day1Max}</div>
                        <div><img src={`https://openweathermap.org/img/wn/${weatherDay1Img}@2x.png`} /></div>
                    </Col>

                    <Col className='col cityBox2'>
                        <div>{weatherDay2Date}</div>
                        <div>L:{weather5Day2Min}</div>
                        <div>H:{weather5Day2Max}</div>
                        <div><img src={`https://openweathermap.org/img/wn/${weatherDay2Img}@2x.png`} /></div>
                    </Col>

                    <Col className='col cityBox2'>
                        <div>{weatherDay3Date}</div>
                        <div>L:{weather5Day3Min}</div>
                        <div>H:{weather5Day3Max}</div>
                        <div><img src={`https://openweathermap.org/img/wn/${weatherDay3Img}@2x.png`} /></div>
                    </Col>

                    <Col className='col cityBox2'>
                        <div>{weatherDay4Date}</div>
                        <div>L:{weather5Day4Min}</div>
                        <div>H:{weather5Day4Max}</div>
                        <div><img src={`https://openweathermap.org/img/wn/${weatherDay4Img}@2x.png`} /></div>
                    </Col>

                    <Col className='col cityBox2'>
                        <div>{weatherDay5Date}</div>
                        <div>L:{weather5Day5Min}</div>
                        <div>H:{weather5Day5Max}</div>
                        <div><img src={`https://openweathermap.org/img/wn/${weatherDay5Img}@2x.png`} /></div>
                    </Col>
                </Row>
            </div>







        </body>
    );
}

