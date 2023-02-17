import { createContext } from "react"

let weatherData = async ()=>{
    let weatherData = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-33.42&longitude=151.37&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Australia%2FSydney')
    .then(response => response.json())
    
    return weatherData
}

const weatherDataContext = createContext(
    weatherData
)

export default weatherDataContext