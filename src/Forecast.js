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
     <span className="Forecast-Max">{forecastData[0].temp.max}°</span>
    </div>
  </div>
</div>
);
}
else {
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=5f472b7acba333cd8a035ea85a0d4d4c`

  axios.get(apiUrl).then(handleResponse);
  
  return null;
  }}