const ContactList = ({persons, handleDelete}) => {
  return(
    <div>
      {persons.map((person) => (
          <div key={person.id}>
            <p>{person.name} = {person.number}</p><button onClick={() => handleDelete(person)}>delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default ContactList