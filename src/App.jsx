import React,{useState} from 'react'
import './App.css'
import Board from "./components/Board"
import Title from './components/Title'
import Header from './components/Header'

function App() {

  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  return (
    <>
    <Title content="Memory Game"/>
    <Header score={score} attempts={attempts}/>
     <Board setScore={setScore} setAttempts={setAttempts}/>
    </>
  )
}

export default App
