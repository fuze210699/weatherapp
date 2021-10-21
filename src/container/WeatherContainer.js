import React, { useRef, useState } from "react";
import Weather from "../components/weather";
import { useWeather } from "../hooks/useWeather";
export default function WeatherContainer() {
  const [location, setLocation] = useState("");
  const inputTimeout = useRef(null);
  const { isError, isLoading, weather, submitRequest, setLoading, setError } =
    useWeather();
  const inputChange = (e) => {
    const value = e.target.value;

    inputTimeout.current && clearTimeout(inputTimeout.current);

    inputTimeout.current = setTimeout(() => {
      setLocation(value);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitRequest(location);
  };
  return (
    <>
      {!weather && (
        <Weather>
          {!isLoading && (
            <Weather.SearchWrapper>
              <Weather.SearchForm onSubmit={handleSubmit}>
                <Weather.Input onChange={inputChange} />
                <Weather.Submit />
              </Weather.SearchForm>
            </Weather.SearchWrapper>
          )}

          {isError && (
            <>
              <Weather.Error message={isError} />{" "}
              <button
                onClick={() => {
                  setLoading(false);
                  setError(false);
                }}
              >
                Quay lại
              </button>
            </>
          )}
          {isLoading && <Weather.Loading />}
        </Weather>
      )}

      {weather && (
        <Weather>
          <Weather.Result weather={weather} />
        </Weather>
      )}
    </>
  );
}
