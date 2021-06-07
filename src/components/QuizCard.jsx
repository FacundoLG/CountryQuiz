import React, { useState, useEffect } from 'react';
import '../Themes/whiteTheme.css'
const QuizCard = ({capital,country1,country2,country3,country4}) => {
    return ( 
        <div className="cardContainer">
            <h2 className="title">COUNTRY QUIZ</h2>
            <div className="card">
                <p className="question">{capital} is the capital of</p>
                <div className="answers">
                    <button type="button"> <span>A-</span> {country1}</button>
                    <button type="button"> <span>B-</span>{country2}</button>
                    <button type="button"> <span>C-</span>{country3}</button>
                    <button type="button"> <span>D-</span>{country4}</button>
                </div>
            </div>
        </div>
     );
}
 
export default QuizCard;