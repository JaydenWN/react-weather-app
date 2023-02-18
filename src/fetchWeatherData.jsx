function fetchWeatherData(){
    return fetch('https://api.open-meteo.com/v1/forecast?latitude=-33.42&longitude=151.37&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Australia%2FSydney')
    .then(response => response.json())
    .catch(res => console.log(`ERROR WITH API ${res}`))
}


function dataFetch(){
    const weatherPromise = fetchWeatherData
    return{
        weatherData : wrapPromise(weatherPromise),
    }
}

function wrapPromise(promise){
    let status = 'pending'
    let result;
    let suspend = promise().then(
        (res)=>{
            status = 'success'
            result = res
        },
        (err)=>{
            status = 'error'
            result = err
        }
    )
    return{
        read(){
            if(status === 'pending'){
                throw suspend
            } else if(status === 'error'){
                throw result
            }else if(status === 'success'){
                return result
            }
        }
    }
}

export default dataFetch