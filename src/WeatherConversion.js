import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");
  lme="temperature">
          {Math.round(props.fahrenheit)}</div>
          <div className="unit">
            °F / <a href="/">°C</a>
        </div>  
        </div>
          } else {
    return (   
      <div className="temperature">
          {Math.round(props.fahrenheit)}</div>
          <div className="unit">
            °F / <a href="/">°C</a>
        </div>  


  }