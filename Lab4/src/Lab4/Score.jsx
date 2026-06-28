import React from 'react';
import { useQuiz } from './QuizContext';

function Score() {
  const { score, questions, resetQuiz } = useQuiz();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="result-container">
      <h1 className="result-title">Quiz Completed!</h1>
      
      <div className="score-display">
        <div className="score-number">{score}/{questions.length}</div>
        <div className="score-percentage">{percentage}%</div>
      </div>
      
      <button onClick={resetQuiz} className="btn-restart">
        Try Again
      </button>
    </div>
  );
}

export default Score;
