import { Accordion } from "react-bootstrap";

const Forecast = ({ forecast }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const day = new Date().getDay;

  return (
    <Accordion defaultActiveKey="0">
      <div></div>
      <div></div>
    </Accordion>
  );
};

export default Forecast;
