import React from "react";
import FormatDate from "./FormatDate";
import AnimatedIcon from "./AnimatedIcon";
import WeatherConversion from "./WeatherConversion";

export default function ReturnInfo(props) {
  return (
    <div className="ReturnInfo">
      <div className="row">
        <div className="col-6">
          <h1 className="location">{props.data.city}</h1>
          <h4 className=".date-condition">
            <FormatDate date={props.data.date} />
          </h4>
          <p className="text-capitalize">{props.data.description}</p>
        </div>

        <div className="col-md-6">
          <WeatherConversion fahrenheit={props.data.temperature} />
        </div>
      </div>
      <div className="col-6">
        <div className="mt-2 ms-5">
          <AnimatedIcon code={props.data.icon} size={75}/>
        </div>
      </div>
      
      <div className="readings">
        <ul>
          <li>
            Wind:<span className="numbers"> {props.data.wind}km/h</span>
          </li>
          <li>
            Humidity: <span className="numbers">{props.data.humidity}% </span>
          </li>
        </ul>
      </div>
    </div>
    
  );
}
