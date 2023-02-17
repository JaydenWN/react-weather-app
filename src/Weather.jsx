import { useState, useEffect, useContext } from "react"
import weatherDataContext from "./weatherData"

function Weather(){

   let weatherDetails = useContext(weatherDataContext)

    let [todaysTemp, setTodaysTemp] = useState('Loading...')
    
    
    useEffect(()=>{
        weatherDetails()
        .then((res)=>{
            setTodaysTemp(res.daily.temperature_2m_max[0])
        })
    },[])



    return(
        
        <weatherDataContext.Provider value={weatherDetails.daily}>
            
        <h1>Todays Temp info </h1>
        <p>Temp Max : {todaysTemp} </p>
        <p>Temp Min : </p>
        
        </weatherDataContext.Provider>
    )
}

export default Weather
