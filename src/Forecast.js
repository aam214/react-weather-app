import React, { useState,useEffect } from "react";

import "./Forecast.css" ; 
import axios from "axios";
import ForecastDays from "./ForecastDays";


export default function Forecast(props){
  let [loaded, setLoaded]= useState(false);
  let [forecastData, setForecastData]= useState(null);
  
useEffect(()=>{
setLoaded(false);
}, [props.coordinates]);

  
  function handleResponse(response){
  setForecastData(response.data.daily);
  setLoaded(true);
  
  }



if (loaded) {
  
  return( 
  <div className="Forecast">
  <div className="row">
    <div className="col">
   <ForecastDays data={forecastData[0]}/>
   </div> 
   <div className="col">
   <ForecastDays data={forecastData[1]}/>
   </div>   
   <div className="col">
   <ForecastDays data={forecastData[2]}/>
   </div>  
   <div className="col">
   <ForecastDays data={forecastData[3]}/>
   </div>  
   <div className="col">
   <ForecastDays data={forecastData[4]}/>
   </div>  
   </div>  
   </div>
  );
} else {
  
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return null;
}}