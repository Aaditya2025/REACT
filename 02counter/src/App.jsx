import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0)    
  //useState: It is called the hooks which is used to change all state in UI of webpage. 
  //We have to use let if we want to change the variable and it have two things variable and method.


  const addValue = () =>{
    if(counter < 20 && counter >= 0){
      counter = counter + 1;  
      setcounter(counter)
    }
    console.log('value added', counter);
  }

  const removeValue =  () =>{
    if(counter < 21 && counter > 0){
      counter = counter - 1;  
      setcounter(counter)
    }
    console.log('value removed', counter)
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add Value</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove Value</button>
    </>
  )
}

export default App
