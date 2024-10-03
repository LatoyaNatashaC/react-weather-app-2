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
      <div className="Weather mt-5">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>Los Angeles</h1>
        <ul>
          <li>Wednesday 9:00 Am</li>
          <li>Sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(temperature)}</span>
                <span className="unit">ºF</span>
              </div>
            </div>
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
