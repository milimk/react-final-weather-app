import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      wind: response.data.wind.speed,
      conditions: response.data.condition.description,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="pt-4 mx-5">
          <div className="pb-1">Setember 12, 2024, Thursday 11:27 AM</div>
          <div>
            <form>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    required
                    autoFocus="on"
                    className="form-control w-100"
                  ></input>
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn-style w-100"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="current-weather text-center pt-5">
            <h2>{weatherData.city}</h2>
            <div className="row">
              <div>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
                  alt="Weather Icon"
                  className="weatherIcon"
                />
                <span className="current-temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">˚C</span>
              </div>
            </div>
            <div className="pt-3">{weatherData.conditions}</div>
            <span>Humidity: {weatherData.humidity}%</span>,{" "}
            <span>Wind: {weatherData.wind}</span>km/h
            <div className="row text-center justify-content-center p-5">
              <div className="forecast-day border col-2">Forecast Day</div>
              <div className="forecast-day border col-2">Forecast Day</div>
              <div className="forecast-day border col-2">Forecast Day</div>
              <div className="forecast-day border col-2">Forecast Day</div>
              <div className="forecast-day border col-2">Forecast Day</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0af4f7ebo6ce11605e35ecb7eatc1716";
    let city = "Seoul";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
