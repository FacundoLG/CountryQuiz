import './App.css';
import React, { useState, useEffect } from 'react';
import QuizCard from './components/QuizCard';

function App() {
  var [counter, setCounter] = useState(0)
  var [quizData,setQuizData] = useState([{}])
  var [correct, setCorrect] = useState({})
  var [retry, setRetry] = useState(0)
  const nextCard = () =>{
    setCounter(counter += 1)
  }
  const retryCard = () =>{
    setCounter(0)
    setRetry(retry += 1)
  }
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all?fields=name;capital")
      .then(data => data.json())
      .then(data =>{
        var finalData = []

        for(var i= 0;i < 4;i++){
          var randomCountry = Math.floor(Math.random()* 250)
          finalData.push(data[randomCountry])
        }
        setQuizData(finalData)
        setCorrect(finalData[Math.floor(Math.random() * 3)])
      })
  },[counter,retry])
 console.log(quizData)
  

  return (
    <div className="App">
      {
        quizData[0].name && correct?
        <QuizCard
        //Outputs
        next={nextCard}
        reset={retryCard}
        //Inputs
        capital={correct.capital}
        country1={quizData[0].name}
        country2={quizData[1].name}
        country3={quizData[2].name}
        country4={quizData[3].name}
        correctCountry={correct.name}
        counter={counter}
        />:""
      }
    </div>
  );
}

export default App;
