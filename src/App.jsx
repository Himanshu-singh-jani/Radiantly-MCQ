import React, { useState } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import NavigationButtons from "./components/NavigationButtons";
import FinalScore from "./components/FinalScore";
import questions from "./data/questions";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    setUserAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowScore(false);
  };

  const score = Object.keys(userAnswers).reduce((total, index) => {
    return userAnswers[index] === questions[index].answer ? total + 1 : total;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center p-4">
      <Header />
      {showScore ? (
        <FinalScore
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
        />
      ) : (
        <>
          <QuestionCard
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            userAnswer={userAnswers[currentQuestion]}
            onSelect={handleAnswer}
          />
          <NavigationButtons
            onPrevious={handlePrevious}
            onNext={handleNext}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />
        </>
      )}
    </div>
  );
};

export default App;

