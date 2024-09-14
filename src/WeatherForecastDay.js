import React from "react";

export default function WeatherForecastDay(props) {
  function displayDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{displayDay()}</div>
      <div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
          className="forecast-icon"
        />
      </div>
      <div className="forecast-temp">
        <span className="forecast-temp-min">
          {Math.round(props.data.temperature.minimum)}˚{" "}
        </span>
        <span className="forecast-temp-max">
          {Math.round(props.data.temperature.maximum)}˚
        </span>
      </div>
    </div>
  );
}
