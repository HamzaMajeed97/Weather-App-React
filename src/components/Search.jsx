import { useState } from "react";
import { Form } from "react-bootstrap";
import CurrentWeather from "./CurrentWeather";

const Search = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchHandler = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(WEATHER_URL);
      if (response.ok) {
        let data1 = await response.json();
        setData(data1);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form className="search" onSubmit={searchHandler}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter Your Location And Press Enter"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
      </Form>
      {data && <CurrentWeather data={data} />}
    </div>
  );
};

export default Search;
