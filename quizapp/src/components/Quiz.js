    import React, {useState,useContext} from "react";
    import { Questions } from "../Helper/Questionbank";
    import { QuizContext } from "../Helper/contexts";

    function Quiz (){
        const{score,setScore,setGameState} = useContext(QuizContext);
        const [currQuestion, setcurrQuestion] = useState(0);
        const [optionChosen, setOptionChosen] = useState("");

        const nextQuestion = () => {
            if(Questions[currQuestion].answer == optionChosen ){
                setScore(score +1);
            }
            setcurrQuestion(currQuestion + 1);

        };

        const finishQuiz = () =>{
            if(Questions[currQuestion].answer == optionChosen ){
                setScore(score +1);
            }
            setGameState("endscreen");
        }
        return (
            <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={()=> setOptionChosen("A")}className="button">{Questions[currQuestion].optionA}</button>
                <button onClick={()=> setOptionChosen("B")}className="button">{Questions[currQuestion].optionB}</button>
                <button onClick={()=> setOptionChosen("C")}className="button">{Questions[currQuestion].optionC}</button>
                <button onClick={()=> setOptionChosen("D")}className="button">{Questions[currQuestion].optionD}</button>
            </div>
        {currQuestion == Questions.length - 1 ?(
            <button onClick={finishQuiz}  >Finish Quiz </button>
        ):(
            <button onClick={nextQuestion}>Next Question</button>
        )}

            </div>
        );
        
    }

    export default Quiz;