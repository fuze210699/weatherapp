import React from "react";
import {
  Container,
  Wrapper,
  Form,
  Input,
  Submit,
  Error,
  Result,
  Loading,
} from "./styles/WeatherStyle";
import Lottie from "react-lottie";
import load from "../../assets/lotifie/load.json";
import "./components/style.css";
export default function Weather({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Weather.SearchWrapper = function WeatherSearchWrapper({
  children,
  ...restProps
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Weather.SearchForm = function WeatherSearchForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};
Weather.Input = function WeatherInput({ ...restProps }) {
  return <Input placeholder="Nhập thành phố" {...restProps} />;
};
Weather.Submit = function WeatherSubmit({ ...restProps }) {
  return <Submit type="submit" value="Submit" {...restProps} />;
};

Weather.Error = function WeatherError({ message, ...restProps }) {
  return <Error {...restProps}>{message}</Error>;
};

Weather.Loading = function WeatherLoading({ ...restProps }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Loading {...restProps}>
      <Lottie options={defaultOptions} />
    </Loading>
  );
};

Weather.Result = function WeatherError({ weather, ...restProps }) {
  const { currentDay, currentDayDetail, upComingDay } = weather;
  const {
    weekday,
    date,
    location,
    temperature,
    weatherIcon,
    weatherDescription,
  } = currentDay;

  return (
    <Result {...restProps}>
      <div className="col-3 currentDay">
        <div className="w-content">
          <div className="c-weekday">{weekday}</div>
          <div className="c-date">{date}</div>
          <div className="c-location">{location}</div>
          <div className="c-weatherIcon">
            <img src={weatherIcon} alt="icon" />
          </div>
          <div className="c-temp">
            <span> {temperature}&deg;C</span>
          </div>
          <div className="c-desc">{weatherDescription}</div>
        </div>
      </div>
      <div className="col-9">
        <div className="c-detail">
          {currentDayDetail.map((item, index) => {
            const { name, value, unit } = item;
            return (
              <div className="detail-item" key={index}>
                <p className="t-uppercase bold">{name}</p>
                <p className="t-uppercase bold">
                  {value} {unit}
                </p>
              </div>
            );
          })}
        </div>
        <div className="c-next">
          {upComingDay.map((item, i) => {
            const { weekday, imgUrl, temperature } = item;
            return (
              <div className="w-content-u" key={i}>
                <div className="u-weekday">{weekday}</div>
                <div className="u-weatherIcon">
                  <img
                    src={`https://www.metaweather.com/static/img/weather/${imgUrl}.svg`}
                    alt="icon"
                  />
                </div>
                <div className="u-temp">
                  <span> {temperature}&deg;C</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Result>
  );
};
