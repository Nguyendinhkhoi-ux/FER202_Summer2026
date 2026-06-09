import React, { Component } from 'react';
import Question from './Question.jsx';
import Score from './Score.jsx';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter"
        }
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswer: null
    };
  }

  handleSelectAnswer = (selectedOption) => {
    const { questions, currentQuestion, score } = this.state;
    const currentQ = questions[currentQuestion];
    
    // Check answer correctness
    const isCorrect = selectedOption === currentQ.answer;
    const newScore = isCorrect ? score + 1 : score;
    const nextQuestionIndex = currentQuestion + 1;

    // Set selection in state first to display selected feedback
    this.setState({
      selectedAnswer: selectedOption,
      score: newScore
    });

    // Brief delay (500ms) to allow user to see their selection before transitioning
    setTimeout(() => {
      if (nextQuestionIndex < questions.length) {
        this.setState({
          currentQuestion: nextQuestionIndex,
          selectedAnswer: null
        });
      } else {
        this.setState({
          quizEnd: true
        });
      }
    }, 500);
  };

  handleRestart = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswer: null
    });
  };

  render() {
    const { questions, currentQuestion, score, quizEnd, selectedAnswer } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        {quizEnd ? (
          <Score score={score} onRestart={this.handleRestart} />
        ) : (
          <Question
            questionNumber={currentQuestion + 1}
            question={questions[currentQuestion]}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={this.handleSelectAnswer}
          />
        )}
      </div>
    );
  }
}

export default QuizApp;
