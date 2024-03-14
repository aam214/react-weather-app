import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");


  function showCelsius(event){
event.preventDefault();
setUnit("celsius")
}

function showFahrenheit(event){
  event.preventDefault();
  setUnit("fahrenheit")
}

function celsisus(){
  return (props.fahrenheit-32) * 5/9;

}
if (unit==="fahrenheit"){
  return(
      <div className="WeatherConversion">
         <div className="temperature">{Math.round(props.fahrenheit)}</div>
          <div className="unit">°F /{""}<a href="/" onClick={showCelsius}>°C</a>
        </div>
        </div>  
 );
}
else{ 

  return    ( 
  <div className="WeatherConversion">
  <div className="temperature">{Math.round(celsisus())}</div>
   <div className="unit"><a href="/" onClick={showFahrenheit}>°F</a>{""}/ °C
 </div>
 </div>  
 );
}
  }