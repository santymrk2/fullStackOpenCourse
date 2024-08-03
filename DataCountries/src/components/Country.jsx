import axios from "axios"
import { useEffect, useState } from "react"
const apiKey = 'mLLhi4MrurotbKUTXLzBB4xuBSft6csP'

const Country = ({country}) => {
  const [temp, setTemp] = useState('')
  const [wind, setWind] = useState('')

  useEffect(() => {
    axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${country.latlng[0]},${country.latlng[1]}&apikey=${apiKey}`)
      .then((response) => console.log(response.data.data.values))
      .then((res)=> {
        console.log(res),
        setTemp(res.temperature),
        setWind(res.windGust)
      })
 
  }, [])
  return (
    <div>
      <h1>{country.name.official}</h1>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>

      <p>languages:</p>
      <ul>
        {Object.values(country.languages).map((lang,index) => <li key={index}>{lang}</li>)}
      </ul>
      <img src={country.flags.png}/>

      <h2>Weather in {country.name.common}</h2>
      <p>temperature: {temp} Celcius</p>
      <p>wind {wind} m/s</p>
    </div>
  )
}
export default Country