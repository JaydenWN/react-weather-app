import { Suspense } from "react"
import dataFetch from "./fetchWeatherData"
import WeatherCard from "./weatherCard"

let resource = dataFetch()

function dayOfWeek(date){
    const theDate = new Date(date)
    const theDay = theDate.getDay()
    const nowDate = new Date()
    const nowDay = nowDate.getDay()
    if(nowDay === theDay){
        return 'Today'
    }
    switch(theDay){
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        default:
            return 'Something went wrong!'
    }
    return theDay
}

function WeatherDisplay(){

    
    let weatherData = resource.weatherData.read()

    return(
        <Suspense fallback={<h1>Loading . . .</h1>}>
            { weatherData.daily.temperature_2m_max.map((e, i)=>
                <WeatherCard 
                maxTemp={weatherData.daily.temperature_2m_max[i]} 
                minTemp={weatherData.daily.temperature_2m_min[i]}
                date={dayOfWeek(weatherData.daily.time[i])}
                unitType={weatherData.daily_units.temperature_2m_max}
                key={weatherData.daily.time[i]}>
                    {console.log(Date())}
                </WeatherCard>
            )}{
                
            }
        </Suspense>
     )
}

export default WeatherDisplay
