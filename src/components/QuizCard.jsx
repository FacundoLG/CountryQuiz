import React, { useState, useEffect } from 'react';
import '../Themes/whiteTheme.css'

const QuizCard = ({capital,country1,country2,country3,country4,correctCountry}) => {
    var [counter, setCounter] = useState(0)
    var [isCorrect,setIsCorrect] = useState(false)  
    useEffect(()=>{
        //Styles Reset
    })   
    const removeHover = (id) =>{
        document.getElementById(id).classList.remove("buttonhov")
    }
    const choseAnswer = (e) => {
        var selected = e.target.id
        
        removeHover(country1)
        removeHover(country2)
        removeHover(country3)
        removeHover(country4)
        
        if(selected === correctCountry){
            setIsCorrect(true)
            setCounter(counter += 1)
            removeHover(country1)
            removeHover(country2)
            removeHover(country3)
            removeHover(country4)
            document.getElementById(selected).classList.add("correct")
        }else{
            setIsCorrect(false)
            setCounter(0)
            document.getElementById(selected).classList.remove("buttonhov")
            document.getElementById(selected).classList.add("incorrect")
        }
        console.log(isCorrect)
        
    }
    
    
    return ( 
        <div className="cardContainer">
            <h2 className="title">COUNTRY QUIZ</h2>
            <div className="card">
               <div className="counterContainer">
                    <p className="question">{capital} is the capital of</p>
                    <p className="counter">{counter}</p>   
                </div>                    
                <div className="answers">
                    <button type="button" className="buttonhov" onClick={choseAnswer} id={country1}> <span>A </span> {country1}</button>
                    <button type="button" className="buttonhov" onClick={choseAnswer} id={country2}> <span>B </span>{country2}</button>
                    <button type="button" className="buttonhov" onClick={choseAnswer} id={country3}> <span>C </span>{country3}</button>
                    <button type="button" className="buttonhov" onClick={choseAnswer} id={country4}> <span>D </span>{country4}</button>
                </div>
                {isCorrect ? 
                <div className="buttonContainer">
                    <button type="button" className="next">Next</button>
                </div>: ""}
            </div>
        </div>
     );
}
 
export default QuizCard;