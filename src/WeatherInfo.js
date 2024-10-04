import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{<FormattedDate date={weatherData.date} />}</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">ºF</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Wind: {weatherData.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
