import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState('');

  useEffect(() =>{
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(
      (quote)=> {
        setQuote(quote.slip.advice);
      }

    
    )
  },[])
  let handleNewQuote = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(
      (quote)=> {
        setQuote(quote.slip.advice);
      }
    )
  }

  return (
    <>
    <div className="quote-box">
      <h1 className='headline'>daily motivation</h1>
      <h2>{quote}</h2>
      <button onClick={handleNewQuote}>New Quote</button>
    </div>
      
    </>
  )
}

export default App
