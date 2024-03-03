import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city.."
          className="search-box"
          autoFocus="on"
        />
        <input type="submit" value="Search" className=" ms-2 btn btn-primary" />
      </form>
      <div class="row">
        <div class="col-6">
          <h1>New York</h1>
          <div className=".date-condition">Saturday 10:30 PM</div>
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
              <li>Wind: 15 km/h</li>
              <li>Humidity: 10%</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
