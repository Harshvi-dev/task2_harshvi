import React from 'react';
import logo from './logo.svg';
import './App.css'
import Random from './components/Random';
import Quiz from './Quiz';
import { useNavigate } from 'react-router-dom';

const App:React.FC = () => {
  const navigate = useNavigate()
  const toRandom = () =>{
    navigate('/Random')
  }
  const toQuize = () =>{
    navigate('/Quize')
  }
  return (
    <div className="App">
      {/* <Random/> */}
      <button onClick={toRandom}>Random number guessing</button>
      <button onClick={toQuize}>OPP Quiz</button>
      {/* <Quiz/> */}
    </div>
  );
}

export default App;
