import { useState, useEffect, useContext } from "react"
import weatherDataContext from "./weatherData"

function Weather(){

   let weatherDetails = useContext(weatherDataContext)

    let [todaysMaxTemp, setTodaysMaxTemp] = useState('Loading...')
    let [todaysMinTemp, setTodaysMinTemp] = useState('Loading...')
    let [unitType, setUnitType] = useState('')
    
    useEffect(()=>{
        weatherDetails()
        .then((res)=>{
            
            setTodaysMaxTemp(res.daily.temperature_2m_max[0])
            setTodaysMinTemp(res.daily.temperature_2m_min[0])
            setUnitType(res.hourly_units.temperature_2m)
        })
    },[])



    return(
        
        <weatherDataContext.Provider value={weatherDetails}>
            
        <h1>Todays Temp info </h1>
        <p>Temp Max : {todaysMaxTemp}{unitType}</p>
        <p>Temp Min : {todaysMinTemp}{unitType}</p>
        
        </weatherDataContext.Provider>
    )
}

export default Weather
