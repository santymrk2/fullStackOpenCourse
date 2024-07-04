import { useState } from 'react'

const Button = ({title, onClick}) => {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat)
)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function findMostVoted() { 
    let i; 

    let max = votes[0]; 

    for (i = 1; i < votes.length; i++) {
        if (votes[i] > max) 
            max = votes[i]; 
    } 
    return votes.indexOf(max); 
  } 

  const handleClickRandom = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const handleClickVote = () => {
    const copy = [...votes]
    console.log("I've create ", copy)
    copy[selected] += 1
    console.log("Copy is updated", copy)
    setVotes(copy)
    console.log("votes is updated")
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button title="Vote" onClick={handleClickVote} />
        <Button title="Next Anecdote" onClick={handleClickRandom}/>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[findMostVoted()]}</p>
        <p>has {votes[findMostVoted()]} votes</p>
      </div>
    </div>
  )
}

export default App
