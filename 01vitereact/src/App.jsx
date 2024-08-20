import Chai from './Chai.jsx'

const username = "code with aditya"
function App() {
  return (  
    <>
    <h1>Only one component is taken</h1>
    <Chai/>
    <p>Tha is why we use fragment which takes all component - {username}</p>  
    </>
    
  )
}

export default App
