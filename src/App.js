
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CurrentWeather from './components/CurrentWeather'
import Search from './components/Search';


function App() {
  return (
    <div className="App">
    <CurrentWeather/>
<Search/>
    </div>
  );
}

export default App;
