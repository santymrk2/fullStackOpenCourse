import { useState } from "react"


const Button = ({title, onClick}) => {
  return(
    <button onClick={onClick}>
      {title}
    </button>
  )
}

const StatisticLine = ({title, value}) => {
  return(
    <p>{title} = {value}</p>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const totalSum = good + bad + neutral
  const average = (good-bad)/totalSum
  const positive = (good/totalSum)*100
  if(totalSum == 0) {
    return(
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return(
    <>
      <h1>Statistics</h1>
      <StatisticLine title="Good" value={good} />
      <StatisticLine title="Neutral" value={neutral} />
      <StatisticLine title="Bad" value={bad} />
      <StatisticLine title="All Opinions" value={totalSum} />
      <StatisticLine title="Average" value={average} />
      <StatisticLine title="Positive" value={positive} />
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
  }

  const handleClickNeutral = () => {
    const result = neutral + 1
    setNeutral(result)
  }

  const handleClickBad = () => {
    const result = bad + 1
    setBad(result)
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


