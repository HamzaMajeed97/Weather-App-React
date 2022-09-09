import { useState } from "react"
import { useEffect } from "react"

const CurrentWeather = () => {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')


const apikey = ""

    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`
    
    
    const searchLocation = (e) => {
        if(e.key === 'Enter'){
    setData()
       setLocation('')
    
        }
    }
    
    useEffect(() => {
        console.log('componentdidmount')
        fetchWeather()
    }, [searchLocation])






    const fetchWeather = async() => {

        try {
            let response = await fetch (url)

            if(response.ok){
                let data = await response.json()
     setData(data)
      
console.log(data)
            }
            else{
                console.log('something went wrong')
            }
        } catch (error) {
            console.log(error)
        }




}


    return (
    
 <div>
 <div className="search">
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>

      <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
 </div>
  );
};










export default CurrentWeather