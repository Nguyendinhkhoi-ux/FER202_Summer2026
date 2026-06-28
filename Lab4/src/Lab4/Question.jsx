import React from 'react';
import { useQuiz } from './QuizContext';

function Question() {
  const {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    isCorrect,
    handleSelectAnswer,
    goToNextQuestion
  } = useQuiz();

  const currentQ = questions[currentQuestionIndex];
  
  if (!currentQ) {
    return (
      <div className="quiz-container">
        <p className="no-questions">No questions available.</p>
      </div>
    );
  }

  const hasSelected = selectedAnswer !== null;

  return (
    <div className="quiz-container">
      <div className="question-progress">
        {currentQuestionIndex + 1} / {questions.length}
      </div>
      
      <h2 className="question-text">{currentQ.question}</h2>

      <div className="options-box">
        {currentQ.answers.map((option, index) => {
          const isSelected = option === selectedAnswer;
          const isOptionCorrect = option === currentQ.correctAnswer;
          
          let optionClass = "option-item";

          if (hasSelected) {
            if (isSelected) {
              optionClass += isCorrect ? " correct" : " incorrect";
            } else if (isOptionCorrect) {
              optionClass += " correct";
            }
          }

          return (
            <button
              key={index}
              className={optionClass}
              disabled={hasSelected}
              onClick={() => handleSelectAnswer(option)}
            >
              {option}
            </button>
          );
        })}
      </div>

      {hasSelected && (
        <button
          onClick={goToNextQuestion}
          className="btn-next"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      )}
    </div>
  );
}

export default Question;
