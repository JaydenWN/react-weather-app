import { useState, useEffect } from "react"

function Weather(){

   let weatherDetails = async ()=>{
        let data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-33.42&longitude=151.37&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Australia%2FSydney')
        .then(response => response.json())
        
        return data.daily.temperature_2m_max[0]
    }

    let [todaysTemp, setTodaysTemp] = useState('Loading...')
    
    
    useEffect(()=>{
        weatherDetails()
        .then((res)=>{
            setTodaysTemp(res)
        })
    },[])



    return(
        <>
        <h1>Todays Temp info </h1>
        <p>Temp Max : {todaysTemp} </p>
        <p>Temp Min : </p>
        
        </>
    )
}

export default Weather
