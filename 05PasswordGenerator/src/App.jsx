import { useState,useCallback, useEffect, useRef} from 'react'
import './App.css'
import './index.css'

function App() {
  const [length, setLength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState("")
  //useref hook
  const passwordref = useRef(null)

   const generatePassword = useCallback(() =>{
    let pass = ""
    let str =
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(NumberAllowed) str+="0123456789"
    if(CharAllowed) str+="@{}()&#%~`!^*[]+=-_"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  },[length,
    NumberAllowed,CharAllowed,setPassword])

    const copyPaaswordtoClipboard = useCallback(()=>{
      passwordref.current?.select()
      passwordref.current?.setSelectionRange(0,99)
      window.navigator.clipboard.writeText(password)
    },[password])
    useEffect(()=>{generatePassword()},[length,NumberAllowed,CharAllowed,generatePassword])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  my-8 bg-gray-700
     text-orange-500 ">
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden bg-white mb-4 my-3'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3 text-black' placeholder='Password' readOnly ref={passwordref}/>
        <button onClick={copyPaaswordtoClipboard} className='outline-none bg-[#FE828C] text-white px-3
         py-0.5 shrink-0 hover:scale-103 hover:shadow-xl  cursor-pointer transition duration:600 '>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label className='text-white'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1 ml-4'>
          <input type="checkbox" defaultChecked={NumberAllowed} id='numberinput' 
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }} />
          <label className='text-white'>Numbers</label>
        </div>
         <div className='flex items-center gap-x-1 ml-4'>
          <input type="checkbox" defaultChecked={CharAllowed} id='charinput' 
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }} />
          <label className='text-white'>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
