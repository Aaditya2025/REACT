import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {       //we can use object inside any component. 
    name: "yadav",  
    age: 20, 
    ID: 23454
  }
  let newarry = [2, 3,2,23,3]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind Test</h1>
    <Card username="Aditya" btnText="Click Me" />
    <Card username="Yadav" btnText='Follow Me'/>
    </>
  )
}

export default App
