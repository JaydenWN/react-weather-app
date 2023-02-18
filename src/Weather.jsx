import { Suspense } from "react"
import dataFetch from "./fetchWeatherData"
let resource = dataFetch()


function Weather(){

    
    let weatherData = resource.weatherData.read()

    return(
        <>
        
        <Suspense fallback={<h1>Loading...</h1>}>
                <h1>{console.log(weatherData)}{weatherData.elevation}</h1>
        </Suspense>
        <h1>Todays Temp info </h1>
        <p>Temp Max : </p>
        <p>Temp Min : </p>
        
        </>
    )
}

export default Weather
