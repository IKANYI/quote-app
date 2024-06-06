import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [quote, setQuote] = useState("");

  useEffect(() =>{
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(
      (quote)=> {
        setQuote(quote.advice);
      }
    )
  },[])
  let fetchNewQuote = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(
      (quote)=> {
        setQuote(quote.advice);
      }
    )
  }

  return (
    <>
      <h2>{quote}</h2>
      <button onClick={fetchNewQuote}>New Quote</button>
    </>
  )
}

export default App
