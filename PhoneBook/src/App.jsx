import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import ContactList from './components/ContactList'
import PersonForm from './components/PersonForm'
import personService from './services/notes'
import Notification from './components/Notification'
import "./index.css"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const [update, setUpdate] = useState(null)

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
      personService.deletePerson(person.id).then(()=>{
        const temp = update
        setUpdate(!temp)
      }
      )
      .catch(error => {
        setError("Hubo un error en la eliminacion", error)
      }
      )
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log("Enviado", event);
    let nextId 
    nextId = persons.length + 1
    persons.map(person => person.id === nextId & nextId++ )



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
        }).then(
          setMessage(`${newOne.name} was added`)
        )
      }
      setNewName('')
      setNewNumber('')
    }

  }
  const personsToShow = filterName === '' 
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))

  const getAllPersons = () => {
    personService.getAll()
    .then(response => {
      setPersons(response)
    })
  }

  useEffect(getAllPersons, [update])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message ? message : error} classN={message ? "message" : "error"}/>
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