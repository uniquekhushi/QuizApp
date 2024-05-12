import React,{useContext} from "react";
import { QuizContext } from "../Helper/contexts";
import { Questions } from "../Helper/Questionbank";
import "../App.css";


function EndScreen (){
  const{score,setScore , setGameState} = useContext(QuizContext);
  const restartQuiz =()=> {
    setScore(0)
    setGameState("menu");
    
  };
    return (
        <div className="endscreen">
          <h1> Well Done! </h1>
          <h3>{score}/{Questions.length}</h3>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
    
}

export default EndScreen;