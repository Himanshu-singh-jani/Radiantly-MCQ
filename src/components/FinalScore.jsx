import React from "react";

const FinalScore = ({ score, totalQuestions, onRestart }) => (
  <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-xl lg:max-w-2xl text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Quiz Completed!</h2>
    <p className="text-lg md:text-xl text-gray-700 mb-4">
      You scored <span className="text-green-700 font-bold text-2xl">{score}</span> out of <span className="text-red-600 font-bold text-2xl">{totalQuestions}</span>.
    </p>
    <button
      onClick={onRestart}
      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition text-sm md:text-base lg:text-lg"
    >
      Restart Quiz
    </button>
  </div>
);

export default FinalScore;
