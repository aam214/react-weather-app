import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
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
              <h1>New York</h1>
              <h4 className=".date-condition">Saturday 10:30 PM</h4>
              <p>Rainy</p>
            </div>
            <div className="col-6">
              <div className="temperature">
                10<span className="unit">°C</span>
              </div>
            </div>
            <div className="col-6">
              <div>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                  alt="Rainy icon"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="readings">
                <ul>
                  <li>
                    Precipitation: <span className="numbers">20%</span>
                  </li>
                  <li>
                    Wind: <span className="numbers">15 km/h</span>
                  </li>
                  <li>
                    Humidity: <span className="numbers">10%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  } else {
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3651978c9504998a1bbdc776a6aad483&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
