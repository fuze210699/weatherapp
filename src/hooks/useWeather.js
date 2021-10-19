import axios from "axios";
import { useState } from "react";
import axiosClient from "../apis/axiosClient";
import { getCurrentDay } from "../helpers/getCurrentDate";
import { getCurrentDayDetail } from "../helpers/getCurrentDateDetail";
import { getUpcomingDays } from "../helpers/getUpcomingDate";
const WeatherURL = "https://www.metaweather.com/api/location";
const CROSSDOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const URL = `${CROSSDOMAIN}/${WeatherURL}`;
export const useWeather = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const getCitiesWoeid = async (value) => {
    const { data } = await axios.get(`${URL}/search`, {
      params: { query: value },
    });

    if (!data || data.length === 0) {
      setError("Không tìm thấy vị trí bạn nhập");
      return;
    }
    return data;
  };

  const getWeatherByWoeid = async (data) => {
    const res = await axios.get(`${URL}/${data[0].woeid}`);
    if (!res || res.length === 0) {
      setError("Có lỗi không tìm thấy thông tin thời tiết");
      return;
    }
    return res;
  };
  const submitRequest = async (value) => {
    setLoading(true);
    setError(false);
    //get cities
    const woeid = await getCitiesWoeid(value);
    //get weather data
    if (!woeid || woeid === undefined) {
      return;
    }
    const { data } = await getWeatherByWoeid(woeid);
    gatherWeatherData(data);
  };

  const gatherWeatherData = (data) => {
    const currentDay = getCurrentDay(data.consolidated_weather[0], data.title);
    const currentDayDetail = getCurrentDayDetail(data.consolidated_weather[0]);
    const upComingDay = getUpcomingDays(data.consolidated_weather);
    setWeather({ currentDay, currentDayDetail, upComingDay });
    setLoading(false);
  };
  return {
    isError,
    isLoading,
    weather,
    submitRequest,
    setLoading,
    setError,
  };
};
