import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Houston" />
      <footer>
        This project was coded by Ariana Morin and is open-sourced on
        <a
          href="https://github.com/aam214/react-weather-app"
          target="_blank"
          rel="noreferrer"
        > {""}GitHub
        </a> and can be viewed at<a
          href="https://weather-app-react-am.netlify.app/"
          target="_blank"
          rel="noreferrer"
        > {""}GitHub
        </a>
      </footer>
    </div>
  );
}
