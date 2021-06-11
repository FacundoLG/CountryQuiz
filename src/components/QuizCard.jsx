import React, { useState } from 'react';
import '../Themes/whiteTheme.css'


const QuizCard = ({ capital,
    country1,
    country2,
    country3,
    country4,
    correctCountry,
    counter,
    next,
    reset
}) => {
    var [isFinished, setIsFinished] = useState(false)
    var [isCorrect, setIsCorrect] = useState(false)


    const toggleHover = (ids) => {
        for (const id of ids) {
            document.getElementById(id).classList.toggle("buttonhov")
        }
    }

    const choseAnswer = (e) => {
        var selected = e.target.id

        toggleHover([country1, country2, country3, country4])

        if (selected === correctCountry) {
            setIsCorrect(true)

            document.getElementById(selected).classList.add("correct")

        } else {
            setIsCorrect(false)
            document.getElementById(correctCountry).classList.add("correct")
            document.getElementById(selected).classList.add("incorrect")
        }
        setIsFinished(true)
    }
    const nextQuestion = () => {
        resetStyles()
        next()
    }

    const Retry = () => {
        resetStyles()
        setIsFinished(false)
        reset()
    }

    const resetStyles = () => {
        if (document.getElementById(correctCountry).classList.contains("correct")) {
            document.getElementById(correctCountry).classList.remove("correct")
        }
        for (var id of [country1, country2, country3, country4]) {
            if (document.getElementById(id).classList.contains("incorrect")) {
                document.getElementById(id).classList.remove("incorrect")
            }
        }
        toggleHover([country1, country2, country3, country4])
        setIsFinished(false)
    }

    return (
        <div className="cardContainer">
            <h2 className="title">COUNTRY QUIZ</h2>
            <div className="card">
                <div className="counterContainer">
                    <p className="question">{capital} is the capital of</p>
                    <p className="counter">{counter}</p>
                </div>
                {
                    country1 ?
                        <div className="answers">
                            <button type="button" className="buttonhov" onClick={choseAnswer} id={country1}> <span>A </span> {country1}</button>
                            <button type="button" className="buttonhov" onClick={choseAnswer} id={country2}> <span>B </span>{country2}</button>
                            <button type="button" className="buttonhov" onClick={choseAnswer} id={country3}> <span>C </span>{country3}</button>
                            <button type="button" className="buttonhov" onClick={choseAnswer} id={country4}> <span>D </span>{country4}</button>
                        </div>
                        : ""}
                {isCorrect && isFinished ?
                    <div className="buttonContainer">
                        <button type="button" className="next" onClick={nextQuestion}>Next</button>
                    </div> : ""}
                {isCorrect === false && isFinished ?
                    <div className="buttonContainer">
                        <button type="button" className="next retry" onClick={Retry}>Retry</button>
                    </div> : ""
                }
            </div>
        </div>
    );
}

export default QuizCard;