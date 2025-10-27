import {useState, useEffect} from 'react'
import './App.css'
import Leaf from './assets/leaf.png'
import Acorn from './assets/acorn.png'
import Turkey from './assets/turkey.png'
import Reggie from './assets/reggie.webp'
import Jake from './assets/jake.webp'
import CanadaLeaf from './assets/maple_leaf.png'
import OhCanada from './assets/oh-canada.mp3'
import Canada from './assets/Canada.webp'

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

  const [targetY, setTargetY] = useState(40)
  const [shooting, setShooting] = useState(0)
  const [winningSequence, setWinningSequence] = useState(false)

  const [started, setStarted] = useState(false)
  const [racerTurkeyX, setRacerTurkeyX] = useState(0)
  const [racerReggieX, setRacerReggieX] = useState(0)
  const [racerJakeX, setRacerJakeX] = useState(0)
  const [showChoice, setShowChoice] = useState(0)

  const [fallerCount, setFallerCount] = useState(0)
  const [fallerNum, setFallerNum] = useState(0)
  const [shooterCount, setShooterCount] = useState(0)
  const [shooterNum, setShooterNum] = useState(0)
  const [racerCount, setRacerCount] = useState(0)
  const [racerNum, setRacerNum] = useState(0)

  const [score, setScore] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [showCanadaPopup, setShowCanadaPopup] = useState(false)
  const [showFaller, setShowFaller] = useState(false)
  const [showShooter, setShowShooter] = useState(false)
  const [showRacer, setShowRacer] = useState(false)
  const [showStats, setShowStats] = useState(false)

  useEffect(() => {
    if (!showFaller) {return}

    const interval = setInterval(() => {
      setFallerX1(Math.random() * 85)
      setShowFaller1(true)
      setFallerX2(Math.random() * 85)
      setShowFaller2(true)
      setFallerX3(Math.random() * 85)
      setShowFaller3(true)
      setFallerX4(Math.random() * 85)
      setShowFaller4(true)
      setFallerX5(Math.random() * 85)
      setShowFaller5(true)
      setFallerX6(Math.random() * 85)
      setShowFaller6(true)
      setFallerX7(Math.random() * 85)
      setShowFaller7(true)
      setFallerX8(Math.random() * 85)
      setShowFaller8(true)
      setFallerX9(Math.random() * 85)
      setShowFaller9(true)
      setFallerCount(prev => prev + 1)
    }, 10000)

    return () => clearInterval(interval)
  }, [showFaller])

  function shoot() {
    setShooting(true)

    const plusFactor = Math.ceil(Math.random() * 5)
    setTimeout(() => {if (plusFactor === 5) {setWinningSequence(true)}}, 2000)

    setTimeout(() => {getTargetY(); setShooting(false); setScore(prev => prev + plusFactor); setShooterNum(prev => prev + plusFactor); setWinningSequence(false)}, 4000)
  }

  function playCanada() {
    const audio = new Audio(OhCanada)
    audio.play()
    setTimeout(() => {setPlaying(false); setShowCanadaPopup(false)}, (72000))
  }

  function getTargetY() {
    const yVal = Math.random() * 80 + 10
    setTargetY(yVal)
  }

  function start(choice) {
    setStarted(true)
    setRacerCount(prev => prev + 1)

    let greatest
    let winner
    const order1 = Math.random() * 100
    const order2 = Math.random() * 100
    const order3 = Math.random() * 100
    if ((order1 >= order2) && (order1 >= order3)) {
      greatest = order1
      winner = "turkey"
    }
    else if ((order2 >= order1) && (order2 >= order3)) {
      greatest = order2
      winner = "reggie"
    }
    else if ((order3 >= order1) && (order3 >= order2)) {
      greatest = order3
      winner = "jake"
    }
    setRacerTurkeyX((order1 / greatest) * 100)
    setRacerReggieX((order2 / greatest) * 100)
    setRacerJakeX((order3 / greatest) * 100)

    setTimeout(() => {setStarted(false), raceCalc(winner, choice)}, 10000)
  }

  function raceCalc(winner, choice) {
    if (winner === choice) {
      setScore(prev => prev + 10)
      setRacerNum(prev => prev + 10)
    }
    else {
      setScore(prev => prev - 10)
      setRacerNum(prev => prev - 10)
    }
  }

  return (
    <>
    <div className="page"></div>
    <div className="score-container">
      <img src={CanadaLeaf} className={`canada-leaf ${playing ? "playing" : ""}`} onClick={() => {if (!playing) {playCanada(); setPlaying(true); setShowCanadaPopup(true)}}}/>
      <h1 className="score">Score: {score}</h1>
    </div>
    {showCanadaPopup &&(<div className="canada-container">
      <img src={Canada} className="canada-popup" onClick={() => setShowCanadaPopup(false)}/>
    </div>)}
    <div className="game-buttons-container">
      <button className="game-button a" onClick={() => {setShowFaller(prev => !prev); setShowShooter(false); setShowRacer(false); setShowStats(false)}}>Faller</button>
      <button className="game-button b" onClick={() => {setShowShooter(prev => !prev); setShowFaller(false); setShowRacer(false); setShowStats(false)}}>Shooter</button>
      <button className="game-button c" onClick={() => {setShowRacer(prev => !prev); setShowFaller(false); setShowShooter(false); setShowStats(false)}}>Racer</button>
      <button className="game-button d" onClick={() => {setShowStats(prev => !prev); setShowFaller(false); setShowShooter(false); setShowRacer(false)}}>Stats</button>
    </div>
    {showFaller && (
      <>
      {showFaller1 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller1(false), setScore(prev => prev + 1), setFallerNum(prev => prev + 1)}} style={{left: `${fallerX1}%`}}/>)}
      {showFaller2 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller2(false), setScore(prev => prev + 1), setFallerNum(prev => prev + 1)}} style={{left: `${fallerX2}%`}}/>)}
      {showFaller3 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller3(false), setScore(prev => prev + 1), setFallerNum(prev => prev + 1)}} style={{left: `${fallerX3}%`}}/>)}
      {showFaller4 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller4(false), setScore(prev => prev + 1), setFallerNum(prev => prev + 1)}} style={{left: `${fallerX4}%`}}/>)}
      {showFaller5 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller5(false), setScore(prev => prev + 1), setFallerNum(prev => prev + 1)}} style={{left: `${fallerX5}%`}}/>)}
      {showFaller6 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller6(false), setScore(prev => prev + 1), setFallerNum(prev => prev + 1)}} style={{left: `${fallerX6}%`}}/>)}
      {showFaller7 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller7(false), setScore(prev => prev + 1), setFallerNum(prev => prev + 1)}} style={{left: `${fallerX7}%`}}/>)}
      {showFaller8 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller8(false), setScore(prev => prev + 1), setFallerNum(prev => prev + 1)}} style={{left: `${fallerX8}%`}}/>)}
      {showFaller9 && (<img src={Leaf} className="faller" onClick={() => {setShowFaller9(false), setScore(prev => prev + 1), setFallerNum(prev => prev + 1)}} style={{left: `${fallerX9}%`}}/>)}
      </>
    )}
    {showShooter && (
      <div className="shooter-container">
        {winningSequence && (
          <div className="winner-container">
          <h1 className="winner-tag">BULLSEYE</h1>
          </div>
        )}
        {!shooting && (<img src={Acorn} className="shooter"/>)}
        {shooting && (<img src={Acorn} className="shooter shooting" style={{'--target-y': `${targetY}%`}}/>)}
        {!shooting && (<button className="shooter-button" onClick={() => {shoot(); setShooterCount(prev => prev + 1)}}>SHOOT!</button>)}
        {shooting && (<button className="shooter-button inactive">SHOOT!</button>)}
        <div className="target" style={{top: `${targetY}%`}}>
          <div className="target1">
            <div className="target2">
              <div className="target3"></div>
            </div>
          </div>
        </div>
      </div>
    )}
    {showRacer && (
      <div className="racer-container">
        <div className="racer-button-column">
          <div className={`choice ${started ? "started" : ""}`} style={{bottom: `${showChoice}%`}}></div>
          <button className={`racer-button b ${started ? "started" : ""}`} onClick={() => {if (!started) {start("turkey"); setShowChoice(52.5)}}}>!</button>
          <button className={`racer-button a ${started ? "started" : ""}`} onClick={() => {if (!started) {start("reggie"); setShowChoice(32.5)}}}>!</button>
          <button className={`racer-button c ${started ? "started" : ""}`} onClick={() => {if (!started) {start("jake"); setShowChoice(12.5)}}}>!</button>
        </div>
        <div className="racer-container">
          <img src={Turkey} className={`racer turkey ${started ? "started" : "not"}`} style={{'--racer-turkey-x': `${racerTurkeyX}%`}}/>
          <img src={Reggie} className={`racer reggie ${started ? "started" : "not"}`} style={{'--racer-reggie-x': `${racerReggieX}%`}}/>
          <img src={Jake} className={`racer jake ${started ? "started" : "not"}`} style={{'--racer-jake-x': `${racerJakeX}%`}}/>
          <div className="finish-line">
            <div className="line-white"></div>
            <div className="line-black a"></div>
            <div className="line-black b"></div>
            <div className="line-black c"></div>
            <div className="line-black d"></div>
          </div>
        </div>
      </div>
    )}
    {showStats && (
      <div className="stats-container">
        <div className="v-stats-container">
          <div className="stat a">Faller Count: {fallerCount}</div>
          <div className="stat b">Faller Score: {fallerNum}</div>
        </div>
        <div className="v-stats-container">
          <div className="stat a">Shooter Count: {shooterCount}</div>
          <div className="stat b">Shooter Score: {shooterNum}</div>
        </div>
        <div className="v-stats-container">
          <div className="stat a">Racer Count: {racerCount}</div>
          <div className="stat b">Racer Score: {racerNum}</div>
        </div>
      </div>
    )}
    </>
  )
}

export default App
