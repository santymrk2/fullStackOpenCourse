import { useState } from "react"


const Button = ({title, onClick}) => {
  return(
    <button onClick={onClick}>
      {title}
    </button>
  )
}

const Statistics = ({good, bad, neutral}) => {
  return(
    <>
      <h1>Statistics</h1>
      <p>Good - {good}</p>
      <p>Neutral - {neutral}</p>
      <p>Bad - {bad}</p>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    const result = good + 1
    setGood(result)
    console.log("The good recording is", good)
  }

  const handleClickNeutral = () => {
    const result = neutral + 1
    setNeutral(result)
    console.log("The neutral recording is", neutral)
  }

  const handleClickBad = () => {
    const result = bad + 1
    setBad(result)
    console.log("The bad recording is", bad)
  }

  return (
    <>
      <h1>Give us your feedback</h1>
      <Button title="Good" onClick={handleClickGood} />
      <Button title="Neutral" onClick={handleClickNeutral} />
      <Button title="Bad" onClick={handleClickBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App


