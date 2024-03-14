import React from "react";
import AnimatedIcon from "./AnimatedIcon"
import "./Forecast.css" ; 
import axios from "axios";


export default function Forecast(){
  function handleResponse(response){
    console.log(response.data);
  }
  
  
  let apiUrl=
  `https://api.openweathermap.org/data/3.0/onecall?lat=51.5&lon=0.1276&appid=3651978c9504998a1bbdc776a6aad483`
axios.get(apiUrl).then(handleResponse);


return( <div className="Forecast">
    <div className="row">
      <div className="col">
      <div className="Forecast-Day">Thurs</div>
        <AnimatedIcon code="01d" size={50}/>
      <span className="Forecast-Min">7{""}</span>
       <span className="Forecast-Max">9</span>
      </div>
    </div>
  </div>




  );
}