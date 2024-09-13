import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.currentCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      wind: response.data.wind.speed,
      conditions: response.data.condition.description,
      weatherIcon: response.data.condition.icon_url,
      iconDescription: response.data.condition.icon,
      currentTime: new Date(response.data.time * 1000),
    });
    setReady(true);
  }

  function searching() {
    const apiKey = "0af4f7ebo6ce11605e35ecb7eatc1716";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searching();
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="pt-4 mx-5">
          <div className="pb-1">
            <FormattedDate date={weatherData.currentTime} />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    required
                    autoFocus="on"
                    className="form-control w-100"
                    onChange={searchCity}
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
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    searching();
    return "Loading...";
  }
}
