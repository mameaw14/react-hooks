import {useState} from "react";
import {Navbar} from "../components/Navbar.jsx";

export const GuessNumberPage = () => {
  const [correctNumber, setCorrectNumber] = useState(Math.floor(Math.random() * 100) + 1)
  const [guessingNumber, setGuessingNumber] = useState('')
  const [hint, setHint] = useState('')
  console.log('correct number: ', correctNumber)

  function updateGuessedNumber(e) {
    setGuessingNumber(e.target.value)
  }

  function guess() {
    let hint = ""
    if (guessingNumber == correctNumber) {
      hint = "Correct!! Congratulations~~"
    }
    if (guessingNumber < correctNumber) {
      hint = "too less"
    }
    if (guessingNumber > correctNumber) {
      hint = "too high"
    }

    setHint(hint)
  }

  const reset = () => {
    setCorrectNumber(Math.floor(Math.random() * 100) + 1)
    setGuessingNumber('')
    setHint('')
  }

  return (
    <div>
      <Navbar/>

      <h1>Let's guess the number (1-100)</h1>
      <input value={guessingNumber} type={"number"} onChange={updateGuessedNumber}/> <br/>
      <button onClick={guess}>Guess</button>
      <button onClick={reset}>Reset</button>
      <h2>{hint}</h2>
    </div>
  )
}