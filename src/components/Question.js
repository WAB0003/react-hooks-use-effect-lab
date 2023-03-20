import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(()=>{
    setTimeout(()=>{
      setTimeRemaining((timeRemaining)=>timeRemaining-1)
    },1000)
    //create an if statement for when the time gets down to zero
    if (timeRemaining===0){
      return handleNoAnswer
    }
  }
  )

  function handleNoAnswer(){
    setTimeRemaining(10);
    onAnswered(false);
  }


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
