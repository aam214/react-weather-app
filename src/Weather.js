import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a City..."
              className="search-box"
              autoFocus="on"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary ms-3"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Thursday 8:39PM</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Mostly Cloudy"
          />

          <span className="temperature">10</span>
          <span className="unit">°C</span>
        </div>
        <div col-md-6>
          <ul className="readings">
            <li>Precipitation: 5%</li>
            <li>Humidity: 20%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
