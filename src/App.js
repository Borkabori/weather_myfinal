import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Budapest" />
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
