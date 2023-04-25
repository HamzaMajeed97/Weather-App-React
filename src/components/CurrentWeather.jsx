const CurrentWeather = ({ data }) => {
  return (
    <div className="card-1">
      <div>
        <p> City Name : {data.name}</p>
        <p>Temprature :{data.main.temp}</p>
      </div>
      <div className="details">
        <div className="data-details">
          <p>Feels Like {data.main.feels_like}</p>
          <p>Wind {data.wind.speed}</p>
          <p>Humidity {data.main.humidity}</p>
          <p>Pressure {data.main.pressure}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
