import React from "react";
import AnimatedIcon from "./AnimatedIcon";

export default function ForecastDays(props){

  function maxTemperature(){
  let temperature=Math.round(props.data.temp.max);
return `${temperature}°`;
}

function minTemperature(){
  let temperature=Math.round(props.data.temp.min);
return `${temperature}°`;
}


function day(){
let date=new Date(props.data.dt*1000);
let day=date.getDay();
let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
return days[day];

}
  return ( 
  <div className="mt-5">
  <div className="Forecast-Day">{day()}</div>
  <AnimatedIcon code={props.data.weather[0].icon} size={45}/>
<span className="Forecast-Min">{maxTemperature()}{""}</span>
 <span className="Forecast-Max">{maxTemperature()}</span>
</div>
);

}