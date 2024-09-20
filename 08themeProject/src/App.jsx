
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'

function App() {
  const  [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    
<ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
  <div className="bg-black flex flex-wrap min-h-screen items-center">
    <div className="w-full max-w-72 mx-auto relative">
      <div className="flex justify-end mb-2">
        <ThemeBtn className="w-10 h-10 p-2 bg-gray-800 text-white rounded-full" />
      </div>
      <Card />
    </div>
  </div>
</ThemeProvider>


  )
}

export default App
