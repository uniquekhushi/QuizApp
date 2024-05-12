
import './App.css';
import React, {useState,useContext} from 'react';
import MainMenu from './components/MainMenu';
import EndScreen from './components/EndScreen';
import Quiz from './components/Quiz';
import { QuizContext } from './Helper/contexts';

function App() {
  const [gameState, setGameState]=useState("menu");//we need states to display like menu ,playing and end screen .
  const [score,setScore] = useState(0)

  return(

  <div className = "App">
    <h1>QUIZ APP</h1>
    <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endscreen" && <EndScreen/>}
    
    </QuizContext.Provider>
  </div>

  );
}

export default App;
