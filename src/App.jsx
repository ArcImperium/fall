import {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [fallerX, setFallerX] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setFallerX(Math.random() * 100)
    }, 10000)

    return () => clearInterval(interval)
  })

  return (
    <>
    <div className="faller" style={{left: `${fallerX}%`}}></div>
    </>
  )
}

export default App
