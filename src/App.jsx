import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    coord: { lon: 0, lat: 0 },
    weather: [{ id: 0, main: '', description: '', icon: '' }],
    base: '',
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    visibility: 0,
    wind: { speed: 0, deg: 0, gust: 0 },
    clouds: { all: 0 },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0,
  })
  const [city, setCity] = useState(`City`)

  async function cityWeather() {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6e743b519d34fdb624c4be4a1476b0b`
    )

    if (response.status === 200) {
      setWeatherInfo(response.data)
      console.log(weatherInfo)
    }
  }

  useEffect(() => {
    cityWeather()
  }, [city])

  function handleSearch(event) {
    setCity(event.target.value)
  }

  return (
    <main>
      <h1>Weather</h1>
      <form>
        <input type="text" placeholder="city" onChange={handleSearch} />
      </form>
      <button onClick={cityWeather}></button>
    </main>
  )
}
