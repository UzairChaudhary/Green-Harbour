"use client"
import React, { useState } from 'react';
import Button from '../../../components/common/button'
import './Questions.css'; // Import CSS file for styling
import GetInTouch from '../../../components/LandingPage/GetInTouch';
export default function Page() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isSubmit, setisSubmit] = useState(false)
    const [questions, setQuestions] = useState([
        "1) What is your occupancy type?",
        "2) What is your main source of heating?",
        "3) Has your property got central heating?",
        "4) Is your boiler older than 18 years?"
        // Add more questions as needed
    ]);

    const [options, setOptions] = useState([
        ["Homeowner", "Private Tenant", "Social Tenant", "Other"],
        ["Gas", "Electricity", "Oil", "Not sure"],
        ["Yes","No"],
        ["Yes","No","Not sure"]
    ]);

    
    const NUM_QUESTIONS = questions.length; // Define NUM_QUESTIONS
    const [answers, setAnswers] = useState(Array(NUM_QUESTIONS).fill(null)); // Use NUM_QUESTIONS
    
    
    
    const updateQuestionAndAnswerAtIndex = (index, newQuestion, newOptions) => {
        // Update question at the specified index
        const updatedQuestions = [...questions];
        updatedQuestions[index] = newQuestion;
        setQuestions(updatedQuestions);
    
        // Update options at the specified index
        const updatedOptions = [...options];
        updatedOptions[index] = newOptions;
        setOptions(updatedOptions);
    };
    


    


  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);

    if(answer==="Social Tenant") //show submit button
    {
        return
    }
    if (answer === "Electricity") {
        updateQuestionAndAnswerAtIndex(2, "What type of property do you live in?", ["Detached House", "Semi-Detached House", "Terraced House", "Flat/Apartment", "Bungalow", "Other"]);
        
    }
    if (answer === "Gas") {
        
        setQuestions([
            "1) What is your occupancy type?",
            "2) What is your main source of heating?",
            "3) Has your property got central heating?",
            "4) Is your boiler older than 18 years?"
            // Add more questions as needed
        ]);
        
        setOptions([
            ["Homeowner", "Private Tenant", "Social Tenant", "Other"],
            ["Gas", "Electricity", "Oil", "Not sure"],
            ["Yes","No"],
            ["Yes","No","Not sure"]
        ]);
    }
    

    if (index < NUM_QUESTIONS - 1) {
        setCurrentQuestion(index + 1);
        }

    }


  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevQuestion = () => {
    if (answers[currentQuestion - 1] !== "Electricity") {
        // Reset questions and options
        setQuestions([
            "1) What is your occupancy type?",
            "2) What is your main source of heating?",
            "3) Has your property got central heating?",
            "4) Is your boiler older than 18 years?"
            // Add more questions as needed
        ]);
        
        setOptions([
            ["Homeowner", "Private Tenant", "Social Tenant", "Other"],
            ["Gas", "Electricity", "Oil", "Not sure"],
            ["Yes","No"],
            ["Yes","No","Not sure"]
        ]);
    }
    setCurrentQuestion(currentQuestion - 1 < 0 ? 0 : currentQuestion - 1);
    
  };
  

  const handleSubmitButton = () => {
      setisSubmit(true)
  }
  return (
    <>
    <div className='mx-20 font-proxima-nova mt-20'>
        <h1 className='flex justify-center font-extrabold text-4xl text-mud_color'> Who Qualifies?</h1>
        <p className='mt-10 text-lg font-bold flex justify-center text-mud_color'>You may qualify for the ECO4 grant if you meet any of the three eligibility criteria:</p>
        <div className='flex justify-center mt-16 gap-3'>
            <div className=' text-white flex flex-col w-80 hover:scale-105 hover:transition-a justify-between bg-mud_color p-8 rounded-xl'>
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
            <div className='flex flex-col hover:scale-105 hover:transition-a w-80 justify-between  p-8 text-white bg-mud_color rounded-xl'>
                <div>
                <h1 className='text-2xl flex justify-center font-bold'>Income</h1>
                <p className=' mt-5'>Household earns less than £31,000 (gross)</p>

                </div>
                <div className='flex flex-col items-center  mt-5'>

                    <Button/>
                </div>
            </div>
            <div className='flex flex-col hover:scale-105 hover:transition-a justify-center items-center w-80 p-8 text-white bg-mud_color rounded-xl'>
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
        
        
        {/* Display this div when he is not eligible */}
        {isSubmit ? (
            <div className='container'>
                <div className='p-10 bg-green_color text-white w-full mx-20  rounded-lg'>
                    <p className='text-2xl font-bold m-5 flex justify-center'>Sorry. It seems like you do not meet the criteria to claim a heating upgrade today.</p>
                    <p className='mt-5 text-2xl flex justify-center font-bold'>Thankyou for checking</p>
                    <p className='mt-5 m-5 text-lg flex justify-center'>If you are still confident you should be eligible, or know someone else that might qualify, please share or give us a call.</p>
                </div>
            </div>
        ):(
            
        <div className="container">
            <div className="question-container bg-green_color text-white">
                <h2 className="question font-bold text-xl">{questions[currentQuestion]}</h2>
                {currentQuestion===3 && (
                    <p className="answer mb-5 text-lg">
                    If unsure if the boiler qualifies, please visit <a href='https://www.homeheatingguide.co.uk/efficiency-tables' target='_blank' className='text-mud_color'>https://www.homeheatingguide.co.uk/efficiency-tables</a> and check that efficiency rating is below 86%
                    </p>
                )}
                <div className="options">
                {options[currentQuestion].map((option, index) => (
                    <label key={index} className={`rounded-lg option ${answers[currentQuestion] === option ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        hidden
                        name={`question-${currentQuestion}`}
                        value={option}
                        checked={answers[currentQuestion] === option}
                        onChange={() => handleAnswer(currentQuestion, option)}
                    />
                    <span className={`option-letter border  rounded-md px-3 p-2 ${answers[currentQuestion] === option ? 'selected' : ''}`}>{String.fromCharCode(65 + index)}</span>
                    {option}
                    </label>
                ))}
                </div>
                {answers[0]==="Social Tenant" ? (
                    <div className="navigation-buttons">
                    <button
                    className="submit-button "
                    
                    onClick={handleSubmitButton}
                    >
                    Submit
                    </button>
                    
                </div>
                ):(

                <div className="navigation-buttons">
                <button
                    className="prev-button "
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
                )}
            </div>
      
        </div>
        )}
        

        
    </div>
    <GetInTouch/>
    </>
  )
}
