import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city ..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>Budapest</h1>
        <ul>
          <li>Monday, 10:15</li>
          <li>Partly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="partly cloudy"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(temperature)}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>precipitation: 1 %</li>
              <li>humidity: 78 %</li>
              <li>wind: 3 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4f230f436aaf7bc8331e67c3e0e44473";
    let city = "Budapest";
    let unit = "metric";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
