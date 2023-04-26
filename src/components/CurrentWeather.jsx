const CurrentWeather = ({ data }) => {
  return (
    <div className="card-1">
      <div className="cityName">
        <div className="city"> City</div>
        <div className="name">{data.name}</div>
      </div>
      <div className="details">
        <div className="data-details">
          <div>
            <div>Weather</div>
            <div>{data.weather[0].main}</div>
          </div>
          <div>
            <div>Temprature</div>
            <div>{data.main.temp} °C</div>
          </div>
          <div>
            <div>Humidity</div>
            <div>{data.main.humidity} %</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
