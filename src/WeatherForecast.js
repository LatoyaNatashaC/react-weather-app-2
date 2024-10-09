import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">84º</span>
            <span className="WeatherForecast-temperature-min"> 56º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
