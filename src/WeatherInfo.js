import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="d-flex justify-content-center">
        <div className="current-weather text-center pt-5">
          <h2>{props.info.city}</h2>
          <div className="row">
            <div>
              <img
                src={props.info.weatherIcon}
                alt={props.info.iconDescription}
                className="weatherIcon"
              />
              <span className="current-temp">
                {Math.round(props.info.temperature)}
              </span>
              <span className="unit">˚C</span>
            </div>
          </div>
          <div className="text-capitalize condition">
            {props.info.conditions}
          </div>
          <div className="pb-5">
            <span>
              Humidity:{" "}
              <span className="condition-bold">{props.info.humidity}%</span>
            </span>
            ,{" "}
            <span>
              Wind:
              <span className="condition-bold">{props.info.wind}km/h</span>
            </span>
          </div>
          {/* FORECAST FOR FUTURE
          <div className="row text-center justify-content-center">
            <div className="forecast-day border col-2">Forecast Day</div>
            <div className="forecast-day border col-2">Forecast Day</div>
            <div className="forecast-day border col-2">Forecast Day</div>
            <div className="forecast-day border col-2">Forecast Day</div>
            <div className="forecast-day border col-2">Forecast Day</div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
