"use client"
import React, { useState } from 'react';

function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  const questions = [
    {
      text: "What type of home do you live in?",
      options: ["Apartment", "House"],
      customQuestion: (response) => {
        if (response === "House") {
          return {
            text: "How many bedrooms does your house have?",
            options: ["1", "2", "3+"]
          };
        }
        return null;
      }
    },
    // Define other questions similarly
  ];

  const handleResponse = (response) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = response;
    setResponses(updatedResponses);

    const currentQuestion = questions[currentQuestionIndex];
    const customQuestion = currentQuestion.customQuestion && currentQuestion.customQuestion(response);
    if (customQuestion) {
      questions.splice(currentQuestionIndex + 1, 0, customQuestion);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div>
        <h2>{currentQuestion.text}</h2>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>
              <button onClick={() => handleResponse(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {renderQuestion()}
      <button onClick={previousQuestion}>Previous</button>
    </div>
  );
}

export default Questionnaire;
