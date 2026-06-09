import React from 'react';

function Score({ score, onRestart }) {
  return (
    <div className="result-container">
      <div className="result-title">Quiz Ended</div>
      <div className="result-score">Your Score: {score}</div>
      <button 
        className="option-link" 
        onClick={onRestart}
        style={{ textAlign: 'center', marginTop: '20px', textDecoration: 'underline' }}
        type="button"
      >
        Play Again
      </button>
    </div>
  );
}

export default Score;
