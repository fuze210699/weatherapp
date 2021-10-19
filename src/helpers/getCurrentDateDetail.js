export const getCurrentDayDetail = (data) => [
  {
    name: "Khả Năng Có Mưa",
    value: data.predictability,
    unit: "%",
  },
  {
    name: "Độ Ẩm",
    value: data.humidity,
    unit: "%",
  },
  {
    name: "Tốc Độ Gió",
    value: Math.round(data.wind_speed),
    unit: "km/h",
  },
  {
    name: "Áp Suất Không Khí",
    value: data.air_pressure,
    unit: "mb",
  },
  {
    name: "Nhiệt Độ Cao Nhất",
    value: Math.round(data.max_temp),
    unit: "°C",
  },
  {
    name: "Nhiệt Độ Nhỏ Nhất",
    value: Math.round(data.min_temp),
    unit: "°C",
  },
];
