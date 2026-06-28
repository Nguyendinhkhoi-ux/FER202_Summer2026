import React, { useState } from 'react';
import quiz from '../data/quiz';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quiz[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="container my-5">
        <div className="card shadow-lg p-5 text-center">
          <h2 className="mb-4">Quiz Completed!</h2>
          <h3 className="mb-4">Your Score: {score} / {quiz.length}</h3>
          <button className="btn btn-primary btn-lg" onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <div className="mb-3">
          <h5 className="text-muted">Question {currentQuestion + 1} of {quiz.length}</h5>
        </div>
        <h3 className="mb-4">{quiz[currentQuestion].question}</h3>
        <div className="d-grid gap-2">
          {quiz[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`btn btn-outline-primary text-start ${
                selectedAnswer === option ? 'active' : ''
              }`}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          className="btn btn-success btn-lg mt-4"
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
        >
          {currentQuestion + 1 === quiz.length ? 'Finish' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
