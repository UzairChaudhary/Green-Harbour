"use client"
import React, { useState } from 'react';
import Button from '../../../components/common/button'
import './Questions.css'; // Import CSS file for styling
export default function Page() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const questions = [
        "1) What is your favorite color?",
        "2) What is your favorite animal?",
        // Add more questions as needed
      ];
    
    const NUM_QUESTIONS = questions.length; // Define NUM_QUESTIONS
    const [answers, setAnswers] = useState(Array(NUM_QUESTIONS).fill(null)); // Use NUM_QUESTIONS
    
    

  const options = [
    ["Red", "Blue", "Green"],
    ["Dog", "Cat", "Bird"],
    // Add more options for each question as needed
  ];


  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  return (
    <div className='mx-20 font-proxima-nova mt-20'>
        <h1 className='flex justify-center font-extrabold text-4xl text-mud_color'> Who Qualifies?</h1>
        <p className='mt-10 text-lg font-bold flex justify-center text-mud_color'>You may qualify for the ECO4 grant if you meet any of the three eligibility criteria:</p>
        <div className='flex justify-center mt-16 gap-3'>
            <div className=' text-white flex flex-col w-80 justify-between bg-mud_color p-8 rounded-xl'>
                <div className='flex justify-center  flex-col items-center'>
                <h1 className='text-2xl flex justify-center font-bold'> Qualifying Benefits</h1>
                <ul className='list-disc mt-5 pl-5'>
                    <li>Pension Credit</li>
                    <li>Child Tax Credits</li>
                    <li>Working Tax Credits</li>
                    <li>Universal Credit</li>
                    <li>Income Support</li>
                    <li>Housing Benefit</li>
                    <li>Income-Based Employment and Support allowance</li>
                    <li>Income-Based Job Seekers Allowance</li>
                    <li>Child Benefit</li>
                </ul>
                </div>
                <div className='flex justify-center mt-5'>

                    <Button/>
                </div>
            </div>
            <div className='flex flex-col w-80 justify-between  p-8 text-white bg-mud_color rounded-xl'>
                <div>
                <h1 className='text-2xl flex justify-center font-bold'>Income</h1>
                <p className=' mt-5'>Household earns less than £31,000 (gross)</p>

                </div>
                <div className='flex flex-col items-center  mt-5'>

                    <Button/>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-80 p-8 text-white bg-mud_color rounded-xl'>
                <h1 className='text-2xl flex justify-center font-bold'>NHS Referrral</h1>
                <p className=' mt-5'>You may qualify for ECO4 benefits through an NHS referral if you or anyone in the household receive repeated medication or have medical conditions affected by the cold, such as:</p>
                <ul className='list-disc mt-5 pl-5'>
                        <li>Cardiovascular problems</li>
                        <li>Respiratory issues</li>
                        <li>Limited mobility</li>
                        <li>Weakened immunity</li>
                        
                </ul>
                <div className='flex flex-col items-center  mt-10'>

                    <Button/>
                </div>

            </div>
        </div>
        
        
        
        <div className="container">
      <div className="question-container">
        <h2 className="question">{questions[currentQuestion]}</h2>
        <div className="options">
          {options[currentQuestion].map((option, index) => (
            <label key={index} className={`option ${answers[currentQuestion] === option ? 'selected' : ''}`}>
              <input
                type="radio"
                hidden
                name={`question-${currentQuestion}`}
                value={option}
                checked={answers[currentQuestion] === option}
                onChange={() => handleAnswer(currentQuestion, option)}
              />
              <span className="option-letter border p-2">{String.fromCharCode(65 + index)}</span>
              {option}
            </label>
          ))}
        </div>
        <div className="navigation-buttons">
          <button
            className="prev-button"
            disabled={currentQuestion === 0}
            onClick={handlePrevQuestion}
          >
            Previous
          </button>
          <button
            className="next-button"
            disabled={currentQuestion === NUM_QUESTIONS - 1}
            onClick={handleNextQuestion}
          >
            Next
          </button>
        </div>
      </div>
      <div className="selected-answer">
        <h3>Selected Answer:</h3>
        <p>{answers[currentQuestion]}</p>
      </div>
    </div>
    </div>
  )
}
