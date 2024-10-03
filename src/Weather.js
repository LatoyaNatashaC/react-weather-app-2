import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.temperature.current);
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
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>

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
            {Math.round(temperature)}
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
  } else {
    const apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
    let city = "Los Angeles";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
