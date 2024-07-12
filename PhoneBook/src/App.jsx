import { useState } from 'react'
import Filter from './components/Filter'
import ContactList from './components/ContactList'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 1234 },
    { name: 'Santy Merk', number: 12345}
  ]) 
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
    const newOne = {
      name: newName,
      number: newNumber
    }
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