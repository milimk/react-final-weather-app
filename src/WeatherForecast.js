import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row justify-content-center">
        <div className="border col-2">
          <div className="forecast-day">Day</div>
          <div className="forecast-icon">Icon</div>
          <div className="forecast-temp">
            <span className="forecast-temp-min">8˚ </span>
            <span className="forecast-temp-max">19˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
