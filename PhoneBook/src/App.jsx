import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import ContactList from './components/ContactList'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleFilter = (event) => {
    setFilterName(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log("Enviado", event);
    const nextId = persons.length + 1
    const newOne = {
      id: String(nextId),
      name: newName,
      number: newNumber
    }
    console.log(newOne);
    if(newOne) {
      let actual
      persons.map((person) => (person.name === newOne.name ? actual = true : actual = false)) 

      if(actual){
        alert(`${newOne.name} is already in the list`)
      } else {
        setPersons(persons.concat(newOne))
      }
      setNewName('')
      setNewNumber('')
    }

  }
  const personsToShow = filterName === '' 
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilter={handleFilter} />
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        
      />
      <h2>Numbers</h2>
      <ContactList persons={personsToShow} />
    </div>
  )
}

export default App