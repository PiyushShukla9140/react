import {useState} from "react"
import './App.css'
import './index.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-screen h-screen duration-150 overflow-hidden"
   style={{backgroundColor:color}}>
    <div className="fixed right-5 top-1/2 -translate-y-1/2 px-2">
      <div className="flex flex-wrap justify-center 
      flex-col gap-3 shadow-lg bg-amber-100 px-3 py-3 rounded-3xl">
        <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full
        text-white hover:shadow-2xl hover:shadow-black/50 
        transform hover:scale-106 transition duration-200 "
        style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full
        text-black hover:shadow-2xl hover:shadow-black/50 
        transform hover:scale-106 transition duration-200 "
        style={{backgroundColor:"Yellow"}}>Yellow</button>
        <button onClick={()=>setColor("Black")} className="outline-none px-4 py-1 rounded-full
        text-white hover:shadow-2xl hover:shadow-black/50 
        transform hover:scale-106 transition duration-200 "
        style={{backgroundColor:"Black"}}>Black</button>
        <button onClick={()=>setColor("Blue")} className="outline-none px-4 py-1 rounded-full
        text-white hover:shadow-2xl hover:shadow-black/50 
        transform hover:scale-106 transition duration-200 "
        style={{backgroundColor:"Blue"}}>Blue</button>
        <button onClick={()=>setColor("Violet")} className="outline-none px-4 py-1 rounded-full
        text-white hover:shadow-2xl hover:shadow-black/50 
        transform hover:scale-106 transition duration-200 "
        style={{backgroundColor:"Violet"}}>Violet</button>
        <button onClick={()=>setColor("Green")} className="outline-none px-4 py-1 rounded-full
        text-white hover:shadow-2xl hover:shadow-black/50 
        transform hover:scale-106 transition duration-200 "
        style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={()=>setColor("lavender")} className="outline-none px-4 py-1 rounded-full
        text-black hover:shadow-2xl hover:shadow-black/50 
        transform hover:scale-106 transition duration-200 "
        style={{backgroundColor:"lavender"}}>Lavender</button>
      </div>
    </div>
   </div>
  )
}

export default App
