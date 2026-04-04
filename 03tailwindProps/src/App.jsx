import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName:"Piyush",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Card1" />
      <Card username="Card2"/>
    </>
  )
}

export default App
