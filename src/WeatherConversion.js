import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherConversion">
        <div className="temperature">
          {Math.round(props.fahrenheit)}
          <div className="unit">
            °F / <a href="/">°C</a>
          </div>
        </div>
      </div>
    );
  } else {
    return "C";
  }
}
