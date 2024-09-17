
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
    <h1>React with Water </h1>
    </UserContextProvider>
  )
}

export default App
