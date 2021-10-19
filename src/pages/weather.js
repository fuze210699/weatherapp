import React from "react";
import TitleMain from "../components/common";
import WeatherContainer from "../container/WeatherContainer";

export default function WeatherPage() {
  return (
    <>
      <TitleMain>Ứng dụng xem thời tiết</TitleMain>
      <WeatherContainer />
    </>
  );
}
