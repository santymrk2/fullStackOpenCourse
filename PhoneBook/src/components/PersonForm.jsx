const PersonForm = (props) => {
  return(
    <div>
    <h2>Add a new</h2>
    <form onSubmit={props.addPerson}>
      <div>
        name: <input 
          value={props.newName}
          onChange={props.handleNameChange}
        />
      </div>
      <br />
      <div>
        number: <input 
          value={props.newNumber}
          onChange={props.handleNumberChange}
        />
      </div>
      <br />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
  )
}

export default PersonForm