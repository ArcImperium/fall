import {useState, useEffect} from 'react'
import './App.css'
import Leaf from './assets/leaf.png'

function App() {
  const [fallerX1, setFallerX1] = useState(10)
  const [showFaller1, setShowFaller1] = useState(true)
  const [fallerX2, setFallerX2] = useState(20)
  const [showFaller2, setShowFaller2] = useState(true)
  const [fallerX3, setFallerX3] = useState(30)
  const [showFaller3, setShowFaller3] = useState(true)
  const [fallerX4, setFallerX4] = useState(40)
  const [showFaller4, setShowFaller4] = useState(true)
  const [fallerX5, setFallerX5] = useState(50)
  const [showFaller5, setShowFaller5] = useState(true)
  const [fallerX6, setFallerX6] = useState(60)
  const [showFaller6, setShowFaller6] = useState(true)
  const [fallerX7, setFallerX7] = useState(70)
  const [showFaller7, setShowFaller7] = useState(true)
  const [fallerX8, setFallerX8] = useState(80)
  const [showFaller8, setShowFaller8] = useState(true)
  const [fallerX9, setFallerX9] = useState(90)
  const [showFaller9, setShowFaller9] = useState(true)

  const [score, setScore] = useState(0)
  const [showFaller, setShowFaller] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFallerX1(Math.random() * 85)
      setShowFaller1(true)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFallerX2(Math.random() * 85)
      setShowFaller2(true)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFallerX3(Math.random() * 85)
      setShowFaller3(true)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFallerX4(Math.random() * 85)
      setShowFaller4(true)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFallerX5(Math.random() * 85)
      setShowFaller5(true)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFallerX6(Math.random() * 85)
      setShowFaller6(true)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFallerX7(Math.random() * 85)
      setShowFaller7(true)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFallerX8(Math.random() * 85)
      setShowFaller8(true)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFallerX9(Math.random() * 85)
      setShowFaller9(true)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <h1 className="score">Score: {score}</h1>
    <button className="game-button a" onClick={() => setShowFaller(prev => !prev)}>Faller</button>
    <button className="game-button b"></button>
    <button className="game-button c"></button>
    <button className="game-button d"></button>
    {showFaller && (
      <>
      {showFaller1 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller1(false), setScore(prev => prev + 1)}} style={{left: `${fallerX1}%`}}/>)}
      {showFaller2 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller2(false), setScore(prev => prev + 1)}} style={{left: `${fallerX2}%`}}/>)}
      {showFaller3 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller3(false), setScore(prev => prev + 1)}} style={{left: `${fallerX3}%`}}/>)}
      {showFaller4 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller4(false), setScore(prev => prev + 1)}} style={{left: `${fallerX4}%`}}/>)}
      {showFaller5 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller5(false), setScore(prev => prev + 1)}} style={{left: `${fallerX5}%`}}/>)}
      {showFaller6 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller6(false), setScore(prev => prev + 1)}} style={{left: `${fallerX6}%`}}/>)}
      {showFaller7 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller7(false), setScore(prev => prev + 1)}} style={{left: `${fallerX7}%`}}/>)}
      {showFaller8 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller8(false), setScore(prev => prev + 1)}} style={{left: `${fallerX8}%`}}/>)}
      {showFaller9 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller9(false), setScore(prev => prev + 1)}} style={{left: `${fallerX9}%`}}/>)}
      </>
    )}
    </>
  )
}

export default App
