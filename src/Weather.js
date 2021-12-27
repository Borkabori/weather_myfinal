import React from "react";

import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="search" className="btn btn-primary" />
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
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          ></img>
          -3 °C
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
}
