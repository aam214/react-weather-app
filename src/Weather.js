import React, { useState } from "react";

import "./Weather.css";
import axios from "axios";
import ReturnInfo from "./ReturnInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
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
        <ReturnInfo data={weatherData} />
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=3651978c9504998a1bbdc776a6aad483&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
