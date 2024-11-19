import React from "react";

const QuestionCard = ({ question, options, userAnswer, onSelect }) => (
  <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-xl lg:max-w-2xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{question}</h2>
    <div className="space-y-4">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className={`w-full py-3 px-4 rounded-lg transition text-sm md:text-base lg:text-lg
            ${
              userAnswer === option
                ? "bg-green-700 text-white"
                : "bg-blue-500 text-white hover:bg-blue-800"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default QuestionCard;
