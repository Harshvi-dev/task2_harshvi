import React, { useEffect, useState } from 'react'
import { start } from 'repl';

const Quiz:React.FC = () => {
    const data = [
        {
            question: 'What does OOP stand for?',
            options: ['Object-Oriented Programming', 'Object-Oriented Protocol', 'Object-Oriented Process', 'Object-Oriented Project'],
            correctAnswer: 'Object-Oriented Programming'
          },
          {
            question: 'Which of the following is a core concept of OOP that helps in reusability of code?',
            options: ['Encapsulation', 'Inheritance', 'Abstraction', 'Polymorphism'],
            correctAnswer: 'Inheritance'
          },
          {
            question: 'What is the purpose of encapsulation in OOP?',
            options: ['To make code readable', 'To group related code and data together', 'To ensure data security', 'To enable code reusability'],
            correctAnswer: 'To ensure data security'
          },
          {
            question: 'Which OOP concept is used to achieve runtime polymorphism in Java?',
            options: ['Inheritance', 'Encapsulation', 'Abstraction', 'Interfaces'],
            correctAnswer: 'Interfaces'
          },
          {
            question: 'What is the main advantage of using OOP?',
            options: ['Code reusability', 'Faster execution of code', 'Smaller code size', 'Better error handling'],
            correctAnswer: 'Code reusability'
          },
    ];

    const [currentIndex,setCurrentIndex]=useState(0);
    const [ansCount,setAnsCount]=useState(0);

    useEffect(()=>{
      loadQus()
    },[currentIndex])

    const loadQus = ()=>{
        let currentQus = data[currentIndex];
        if (currentQus == undefined) {
          currentQus = data[0];
        }
        return(
            <>
            <h3>{currentQus.question}</h3>
            <div>
            {currentQus.options.map((option, index) => (
                <React.Fragment key={option}>
            <button key={index} onClick={() => selectAnswer(option)}>
              {option}
            </button>
            <br/>
            </React.Fragment>
          ))}
            </div>
            </>
        )
    }

    const selectAnswer =(option:string)=>{
        const currentQus=data[currentIndex];
        if(option===currentQus.correctAnswer){
            setAnsCount((prev)=>prev+1)
        }
            setCurrentIndex((prev)=>prev+1)
            
    }
    const startAgain =()=>{
        setAnsCount(0);
        setCurrentIndex(0);
    }
    const showAns = () =>{
        return (
            <>
            <div>Your score is : {ansCount} out of : {data.length}</div>
            <button onClick={startAgain}>Start again</button>
            </>        
        )
    }
    const checkAns = () => {
        const selectedOption = document.activeElement?.textContent || '';
        selectAnswer(selectedOption);
      };

  return (
    <>
        <h3>OOP QUIZ</h3>
        
        {
            currentIndex<data.length ? loadQus() : showAns()
        }
       
    </>
  )
}

export default Quiz