import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <button className="btn btn-primary">Hello</button>
        <Weather />
        <footer>
          This project was created by Borbála Birgés and is{" "}
          <a href="https://github.com/Borkabori/weather_myfinal" target="blank">
            open-souced on gitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
