import React, { createContext, useState, useContext } from 'react';
import { quizData } from './quizData';

const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(quizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleSelectAnswer = (option) => {
    if (selectedAnswer !== null) return; // Allow selecting only once per question
    
    const currentQ = questions[currentQuestionIndex];
    const correct = option === currentQ.correctAnswer;
    
    setSelectedAnswer(option);
    setIsCorrect(correct);
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const goToNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setQuizEnd(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setQuizEnd(false);
  };

  const addQuestion = (newQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  const deleteQuestion = (indexToDelete) => {
    setQuestions((prevQuestions) => prevQuestions.filter((_, index) => index !== indexToDelete));
    // If we delete a question, reset the quiz to avoid index out of bounds
    resetQuiz();
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        selectedAnswer,
        setSelectedAnswer,
        isCorrect,
        setIsCorrect,
        score,
        setScore,
        quizEnd,
        setQuizEnd,
        handleSelectAnswer,
        goToNextQuestion,
        resetQuiz,
        addQuestion,
        deleteQuestion
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
