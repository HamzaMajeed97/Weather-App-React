import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./components/Search";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="App">
      <Search />
      <Forecast />
    </div>
  );
}

export default App;
