import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecast-day">{props.data.time}</div>
      <WeatherIcon code={props.data.condition.icon} size={38} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {props.data.temperature.maximum}º
        </span>
        <span className="WeatherForecast-temperature-min">
          {props.data.temperature.minimum}º
        </span>
      </div>
    </div>
  );
}
