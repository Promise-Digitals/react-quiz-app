import React, { useRef, useState } from "react";
import './Quiz.css';
import { data } from '../../assets/data'

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [questionIndex, setQuestionIndex] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false)

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let OptionArray = [Option1, Option2, Option3, Option4];


    const checkAns = (e, ans) => {
        if(lock === false){
            if(questionIndex.ans === ans){
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1)
            }else{
                e.target.classList.add("wrong");
                setLock(true);
                OptionArray[questionIndex.ans - 1].current.classList.add("correct")
            }
        }
    }

    const next = () => {
        if(lock === true){
            if(index === data.length - 1){
                setResult(true);
                return 0;
            }
            setIndex(++ index);
            setQuestionIndex(data[index]);
            setLock(false);
            OptionArray.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }


    const reset = () => {
        setIndex(0);
        setQuestionIndex(data[0]);
        setScore(0);
        setLock(false);
        setResult(false)
    }


    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            {result ? <>
                <h2>You scored {score} out of {data.length}</h2>
                <button onClick={reset}>Reset</button>
            </> : <>
                <h2>{index + 1}. {questionIndex.question}</h2>
                <ul>
                    <li onClick={(e) => {checkAns(e, 1)}} ref={Option1}>{questionIndex.option1}</li>
                    <li onClick={(e) => {checkAns(e, 2)}} ref={Option2}>{questionIndex.option2}</li>
                    <li onClick={(e) => {checkAns(e, 3)}} ref={Option3}>{questionIndex.option3}</li>
                    <li onClick={(e) => {checkAns(e, 4)}} ref={Option4}>{questionIndex.option4}</li>
                </ul>
                <button onClick={next}>Next</button>
                <div className="index">{index + 1} of {data.length} Questions</div>
            </>}
            
        </div>
    )
}

export default Quiz;