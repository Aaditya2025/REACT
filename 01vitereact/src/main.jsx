import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// const reactElement = {
//   type: 'a', 
//   props: {
//       href: 'https://google.com', 
//       target: '_blank'
//   }, 
//   children: 'Click me to visit google' 
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)
const anotherUser = " aditya coder"
const reactElement = React.createElement(
  'a', 
  {href:"https://google.com", target:'_blank'},
  'Click me to visit google'  , 
  anotherUser   //This variable is called evaluated Expression and meaning is also clear.
)

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp/>
    // reactElement()  // We cannot call an object at function.
    // anotherElement
    reactElement   //React provides a feature to create reactelement using react and it have fixed syntax which we have to follow. 
)
