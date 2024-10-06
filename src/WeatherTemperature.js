import React from "react";

export default function WeatherTemperature(props) {
  <div className="weatherTemperature">
    <span className="temperature">{Math.round(props.data.temperature)}</span>
    <span className="unit">ºF</span>
  </div>;
}
