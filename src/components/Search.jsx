import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

const Search = () => {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
  const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`;

  const searchHandler = () => {
    fetchWeather();
  };

  const fetchWeather = async () => {
    try {
      const [response1, response2] = await Promise.all([
        fetch(WEATHER_URL),
        fetch(FORECAST_URL),
      ]);
      if (response1.ok && response2.ok) {
        let data1 = await response1.json();
        let data2 = await response2.json();
        setData(data1);
        setForecast(data2);
        console.log(data1);
        console.log(data2);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form className="search">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter Your Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
        <Button onClick={searchHandler}>Search</Button>
      </Form>
      {data && <CurrentWeather data={data} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default Search;
