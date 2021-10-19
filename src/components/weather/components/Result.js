import "./style.css";
export const CurrentDate = ({ currentDay }) => {
  console.log(currentDay.weekday);
  const {
    weekday,
    date,
    location,
    temperature,
    weatherIcon,
    weatherDescription,
  } = currentDay;
  return (
    <>
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
          <p></p>
        </div>
        <div className="c-next"></div>
      </div>
    </>
  );
};
