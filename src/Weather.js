import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <div class="row">
          <div class="col-6">
            <h1>New York</h1>
            <h4 className=".date-condition">Saturday 10:30 PM</h4>
            <p>Rainy</p>
          </div>
          <div class="col-6">
            <div class="temperature">
              10<span className="unit">°C</span>
            </div>
          </div>
          <div class="col-6">
            <div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                alt="Rainy icon"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="readings">
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
}
