import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let[counter,setCounter] = useState(15);

  //let counter = 15;
  const addValue = () =>{
    console.log("value added",counter)
    counter=counter+1;
    setCounter(counter);
  }
  const remValue = () => {
    console.log("value removed",counter)
    counter = counter-1;
    setCounter(counter);
  }

  return (
  <div id="center">
    <h1>React Basics</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue} className="counter">Add Value {counter}</button>
    <button onClick={remValue} className="counter">Delete Value {counter}</button>
  </div>
  )
}

export default App
