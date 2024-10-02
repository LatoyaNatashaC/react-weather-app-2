import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Los Angeles</h1>
      <ul>
        <li>Wednesday 9:00 Am</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          81℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0 %</li>
            <li>Humidity: 51 %</li>
            <li>Wind: 2mph </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
