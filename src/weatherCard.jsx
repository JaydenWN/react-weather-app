function WeatherCard({maxTemp, minTemp, date, unitType}){

    return(
    <>
    <div className="weatherCard">
        <h1> Weather Details for {date}</h1>
        <p>Temp Max : {maxTemp}{unitType}</p>
        <p>Temp Min : {minTemp}{unitType}</p>
    </div>
    </>
    )

}