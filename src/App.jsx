import React, { useState, useEffect } from 'react';
import Confetti from "react-confetti";
import './App.css';
import Board from "./components/Board";
import Title from './components/Title';
import Header from './components/Header';

function App() {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (score === 4) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false); // Reset showConfetti to false when score is not 4
    }

    return () => {
      setShowConfetti(false); // Cleanup: set showConfetti to false when component unmounts
    };
  }, [score]);

  return (
    <>
      <Title content="Memory Game"/>
      <Header score={score} attempts={attempts}/>
      {showConfetti && <Confetti />}
      <Board setScore={setScore} setAttempts={setAttempts}/>
    </>
  );
}

export default App;
