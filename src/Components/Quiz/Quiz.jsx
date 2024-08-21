import React, { useState } from "react";
import './Quiz.css';
import { data } from '../../assets/data'

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [questionIndex, setQuestionIndex] = useState(data[index]);


    const checkAns = (e, ans) => {
        if(questionIndex.ans === ans){
            e.target.classList.add("correct");
        }else{
            e.target.classList.add("wrong");
        }
    }

    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            <h2>{index + 1}. {questionIndex.question}</h2>
            <ul>
                <li onClick={(e) => {checkAns(e, 1)}}>{questionIndex.option1}</li>
                <li onClick={(e) => {checkAns(e, 2)}}>{questionIndex.option2}</li>
                <li onClick={(e) => {checkAns(e, 3)}}>{questionIndex.option3}</li>
                <li onClick={(e) => {checkAns(e, 4)}}>{questionIndex.option4}</li>
            </ul>
            <button>Next</button>
            <div className="index">1 of 5 Questions</div>
        </div>
    )
}

export default Quiz;