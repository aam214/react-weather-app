import React, { useState } from "react";
import AnimatedIcon from "./AnimatedIcon"
import "./Forecast.css" ; 
import axios from "axios";


export default function Forecast(props){
  let [loaded, setLoaded]= useState(false);
  let [forecastData, setForecastData]= useState(null);
  
  
  function handleResponse(response){
  setForecastData(response.data.daily);
  setLoaded(true);
  
  }



if (loaded) {
  
  return( 
  <div className="Forecast">
  <div className="row">
    <div className="col">
    <div className="Forecast-Day">Thurs</div>
      <AnimatedIcon code="01d" size={50}/>
    <span className="Forecast-Min">7{""}</span>
     <span className="Forecast-Max">{forecastData[0].temperature.maximum}°</span>
    </div>
  </div>
</div>
);
}
else {
  let city=props.city;
  let apiUrl=
    `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=8d9c6f00c08bcb1a3bo8fd87a4d1b4t6&units=imperial`
  axios.get(apiUrl).then(handleResponse);
  
  return null;
  }}