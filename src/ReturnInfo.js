import React from "react";
import FormatDate from "./FormatDate";

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
        <div className="col-6">
          <div className="temperature">
            {Math.round(props.data.temperature)}
            <span className="unit">°F</span>
          </div>
        </div>
        <div className="col-6">
          <div>
            {" "}
            <img src={props.data.iconUrl} alt={props.data.description} />
          </div>
        </div>
        <div className="col-6">
          <div className="readings">
            <ul>
              <li>
                Precipitation: <span className="numbers">20%</span>
              </li>
              <li>
                Wind: <span className="numbers"> {props.data.wind} km/h</span>
              </li>
              <li>
                Humidity:{" "}
                <span className="numbers">{props.data.humidity}%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
