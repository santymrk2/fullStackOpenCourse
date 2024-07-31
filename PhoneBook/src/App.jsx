import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import ContactList from './components/ContactList'
import PersonForm from './components/PersonForm'
import personService from './services/notes'

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

  const handleDelete = (person) => {
    if(confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(person.id)
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log("Enviado", event);
    let nextId = persons.length + 1
    if(persons.filter(person => person.id === nextId)) {
      nextId = nextId + 1 
    }
    const newOne = {
      id: String(nextId),
      name: newName,
      number: newNumber
    }
    console.log(newOne);
    if(newOne) {
      let actual
      persons.map((person) => (person.name === newOne.name ? actual = person.id : actual = false)) 

      console.log(actual)
      
      if(actual){
        if(confirm(`${newOne.name} is already added to phonebook, replace the old number with a new one?`)){
          personService.update(actual, newOne)
        }
      } else {
        personService.create(newOne)
        .then(response => {
          setPersons(persons.concat(response))
        })
      }
      setNewName('')
      setNewNumber('')
    }

  }
  const personsToShow = filterName === '' 
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))

  useEffect(()=>{
    personService.getAll()
      .then(response => {
        setPersons(response)
      })
  }, [handleDelete])

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
      <ContactList persons={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App