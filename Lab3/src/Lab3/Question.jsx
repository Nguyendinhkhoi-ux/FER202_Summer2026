import React from 'react';

function Question({ questionNumber, question, selectedAnswer, onSelectAnswer }) {
  if (!question) return null;

  return (
    <div className="quiz-container">
      <h2 className="question-title">Question {questionNumber}</h2>
      <p className="question-text">{question.question}</p>
      
      <ul className="options-box">
        {question.options.map((option, index) => {
          const isSelected = option === selectedAnswer;
          return (
            <li 
              key={index} 
              className="option-item"
              style={isSelected ? { backgroundColor: '#f3f4f6' } : {}}
            >
              <button 
                className="option-link" 
                onClick={() => onSelectAnswer(option)}
                type="button"
                style={isSelected ? { fontWeight: 'bold' } : {}}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
