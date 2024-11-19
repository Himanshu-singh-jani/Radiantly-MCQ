import React from "react";

const NavigationButtons = ({ onPrevious, onNext, currentQuestion, totalQuestions }) => (
  <div className="flex justify-between w-full max-w-xl lg:max-w-2xl mt-8">
    <button
      onClick={onPrevious}
      disabled={currentQuestion === 0}
      className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-lg 
                 hover:bg-blue-800 hover:text-white disabled:opacity-50 transition text-sm md:text-base lg:text-lg"
    >
      Previous
    </button>
    <button
      onClick={onNext}
      className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-lg 
                 hover:bg-blue-800 disabled:opacity-50 transition text-sm md:text-base lg:text-lg"
    >
      {currentQuestion === totalQuestions - 1 ? "Submit" : "Next"}
    </button>
  </div>
);

export default NavigationButtons;
