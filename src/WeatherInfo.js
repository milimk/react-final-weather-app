import React from "react";
import DisplayTemperature from "./DisplayTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="d-flex justify-content-center">
        <div className="current-weather text-center pt-5">
          <h2>{props.info.city}</h2>
          <div className="row">
            <div>
              <span>
                <img
                  src={props.info.weatherIcon}
                  alt={props.info.iconDescription}
                  className="weatherIcon"
                />
              </span>
              <span>
                <DisplayTemperature celsius={props.info.temperature} />
              </span>
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
        </div>
      </div>
    </div>
  );
}
