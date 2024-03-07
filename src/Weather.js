import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <body>
        <div className="Weather">
          <form>
            <input
              type="search"
              placeholder="Enter a city.."
              className="search-box"
              autoFocus="on"
            />
            <input type="submit" value="Search" className="button-submit" />
          </form>
          <div className="row">
            <div className="col-6">
              <h1 className="location">{weatherData.city}</h1>
              <h4 className=".date-condition">{weatherData.date}</h4>
              <p className="text-capitalize">{weatherData.description}</p>
            </div>
            <div className="col-6">
              <div className="temperature">
                {Math.round(weatherData.temperature)}
                <span className="unit">°F</span>
              </div>
            </div>
            <div className="col-6">
              <div>
                {" "}
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </div>
            </div>
            <div className="col-6">
              <div className="readings">
                <ul>
                  <li>
                    Precipitation: <span className="numbers">20%</span>
                  </li>
                  <li>
                    Wind:{" "}
                    <span className="numbers"> {weatherData.wind} km/h</span>
                  </li>
                  <li>
                    Humidity:{" "}
                    <span className="numbers">{weatherData.humidity}%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=3651978c9504998a1bbdc776a6aad483&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
