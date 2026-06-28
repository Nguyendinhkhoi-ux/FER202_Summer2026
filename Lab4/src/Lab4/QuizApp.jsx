import React from 'react';
import { QuizProvider, useQuiz } from './QuizContext';
import Question from './Question';
import Score from './Score';
import QuizCreator from './QuizCreator';
import './QuizApp.css';

function QuizAppContent() {
  const { quizEnd } = useQuiz();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Quiz App</h1>
      </header>

      <main className="app-main">
        <section className="quiz-section"> 
          {quizEnd ? <Score /> : <Question />}
        </section>

        <section className="creator-section">
          <QuizCreator />
        </section>
      </main>
    </div>
  );
}

function QuizApp() {
  return (
    <QuizProvider>
      <QuizAppContent />
    </QuizProvider>
  );
}

export default QuizApp;
