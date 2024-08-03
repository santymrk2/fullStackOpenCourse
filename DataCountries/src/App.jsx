import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Country from './components/Country'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const handleFilter = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  const handleView = (name) => {
    setFilter(name)
  }

  const avaliable = filter === ''
    ? countries 
    : countries.filter((country) => country.name.official.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  return (
    <>
      <p>find countries <input value={filter} onChange={handleFilter} /></p>
      {avaliable.length > 10
        ? <p>To many matches, specify another filter</p> 
        : avaliable.length != 1 ? avaliable.map((country, index) => (
          <li key={index}>
            <p>{country.name.official}</p><button onClick={() => handleView(country.name.official)}>show</button>
          </li>
        )) 
        : <Country country={avaliable[0]}/>
      }
    {console.log(avaliable)}
    </>
  )
}

export default App
