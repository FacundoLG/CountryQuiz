import './App.css';
import React, { useState, useEffect } from 'react';
import QuizCard from './components/QuizCard';

function App() {
  var [counter, setCounter] = useState(0)
  var [quizData,setQuizData] = useState([])
  const nextCard = () =>{
    setCounter(counter += 1)
  }
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all?fields=name;capital")
      .then(data => data.json())
      .then(data =>{
          console.log(data)
          setQuizData(data)
        })
      .then(()=>{
        var finalData = []
        for(var i= 0;i < 4;i++){
          var randomCountry = Math.floor(Math.random()* quizData.length)
          finalData.push(quizData[randomCountry])
        }
        setQuizData(finalData)
        var correctAnswer = finalData[Math.floor(Math.random() * 3)]
        console.log(correctAnswer.capital)
        
      })
  },[counter,quizData])
  return (
    <div className="App">
      <QuizCard
      //Outputs
      next={nextCard}
      reset={() => setCounter(0)}
      //Inputs
      capital="Porotero"
      country1={quizData[0]}
      country2={quizData[1]}
      country3={quizData[2]}
      country4={quizData[3]}
      correctCountry={"Petardo"}
      counter={counter}
      
      />
    </div>
  );
}

export default App;
