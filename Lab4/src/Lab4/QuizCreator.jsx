import React, { useState } from 'react';
import { useQuiz } from './QuizContext';

function QuizCreator() {
  const { addQuestion } = useQuiz();
  const [questionText, setQuestionText] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');
  const [correctOption, setCorrectOption] = useState('A'); // default option A
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!questionText.trim()) {
      setError('Please enter a question.');
      setSuccess(false);
      return;
    }
    if (!optionA.trim() || !optionB.trim() || !optionC.trim()) {
      setError('Please fill in all three answer options.');
      setSuccess(false);
      return;
    }

    let correctText = '';
    if (correctOption === 'A') correctText = optionA.trim();
    else if (correctOption === 'B') correctText = optionB.trim();
    else correctText = optionC.trim();

    const newQ = {
      question: questionText.trim(),
      answers: [optionA.trim(), optionB.trim(), optionC.trim()],
      correctAnswer: correctText
    };

    addQuestion(newQ);

    // Reset form states
    setQuestionText('');
    setOptionA('');
    setOptionB('');
    setOptionC('');
    setCorrectOption('A');
    setError('');
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="creator-container">
      <div className="creator-card">
        <h2 className="section-title">Create a New Question</h2>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Question added successfully!</div>}

        <form onSubmit={handleSubmit} className="creator-form">
          <div className="form-group">
            <label htmlFor="qText" className="form-label">Question Text:</label>
            <input
              id="qText"
              type="text"
              className="form-input"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="e.g. What is the syntax for creating a component?"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Answer Options (Select the correct one):</label>

            <div className="option-input-group">
              <input
                type="radio"
                name="correctChoice"
                id="choiceA"
                checked={correctOption === 'A'}
                onChange={() => setCorrectOption('A')}
                className="correct-radio"
              />
              <input
                type="text"
                className="form-input option-text-input"
                value={optionA}
                onChange={(e) => setOptionA(e.target.value)}
                placeholder="Option A"
                aria-label="Option A"
              />
            </div>

            <div className="option-input-group">
              <input
                type="radio"
                name="correctChoice"
                id="choiceB"
                checked={correctOption === 'B'}
                onChange={() => setCorrectOption('B')}
                className="correct-radio"
              />
              <input
                type="text"
                className="form-input option-text-input"
                value={optionB}
                onChange={(e) => setOptionB(e.target.value)}
                placeholder="Option B"
                aria-label="Option B"
              />
            </div>

            <div className="option-input-group">
              <input
                type="radio"
                name="correctChoice"
                id="choiceC"
                checked={correctOption === 'C'}
                onChange={() => setCorrectOption('C')}
                className="correct-radio"
              />
              <input
                type="text"
                className="form-input option-text-input"
                value={optionC}
                onChange={(e) => setOptionC(e.target.value)}
                placeholder="Option C"
                aria-label="Option C"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Add Question</button>
        </form>
      </div>
    </div>
  );
}

export default QuizCreator;
