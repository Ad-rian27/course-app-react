import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddCourse from './components/AddCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddCourse />
    </>
  )
}

export default App
