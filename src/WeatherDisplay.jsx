import { Suspense } from "react"
import dataFetch from "./fetchWeatherData"
import WeatherCard from "./weatherCard"

let resource = dataFetch()


function WeatherDisplay(){

    
    let weatherData = resource.weatherData.read()

    return(
        <Suspense fallback={<h1>Loading . . .</h1>}>
            { weatherData.daily.temperature_2m_max.map((e, i)=>
                <WeatherCard 
                maxTemp={weatherData.daily.temperature_2m_max[i]} 
                minTemp={weatherData.daily.temperature_2m_min[i]}
                date={weatherData.daily.time[i]}
                unitType={weatherData.daily_units.temperature_2m_max}>
                </WeatherCard>
            )}{
                console.log(weatherData)
            }
        </Suspense>
     )
}

export default WeatherDisplay
