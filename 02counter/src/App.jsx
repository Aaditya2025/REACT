import { useState } from 'react'      //To use any Hook we have to import first. 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0)    
  //useState: It is called the hooks which is used to change all state in UI of webpage. 
  //useState provides the value in the form of patches that's why if we do same task it will ignore.
  //We have to use let if we want to change the variable and it have two things variable and method.


  const addValue = () =>{
    if(counter <20  & counter >= 0)
      setcounter(counter+1)
      // setcounter(prevCounter => prevCounter+1)
      // setcounter(prevCounter => prevCounter+1)
      // setcounter(prevCounter => prevCounter+1)
      // setcounter(prevCounter => prevCounter+1)
    }
    console.log('value added', counter);
  

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
    onClick={addValue}     //Yaha pe click hone pe hi addValue function call hoga. 
    >Add Value</button>
    <br/>
    <button
    onClick={removeValue}    //Use of variable in curly braces is called evaluated expression, we never write whole js code only we have to write the evaluated code of javascript which will be store in a curly braces.
    >Remove Value</button>
    </>
  )

}
export default App