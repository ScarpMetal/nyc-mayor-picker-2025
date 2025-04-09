import { useEffect, useState } from "react";
import { getAllQuestions } from "../data/questions";
import { useQuizStore } from "../stores/quizStore";

export const QuestionStepper = () => {
  const {
    currentStep,
    nextStep,
    previousStep,
    canGoNext,
    canGoPrevious,
    answerQuestion,
    getCurrentAnswer,
    isComplete,
  } = useQuizStore();

  const questions = getAllQuestions();
  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;

  // Local state for the slider value
  const [sliderValue, setSliderValue] = useState(
    getCurrentAnswer(currentQuestion.id) ?? 0
  );

  // Reset slider when question changes
  useEffect(() => {
    setSliderValue(getCurrentAnswer(currentQuestion.id) ?? 0);
  }, [currentQuestion.id, getCurrentAnswer]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    answerQuestion(currentQuestion.id, sliderValue);
    if (canGoNext()) {
      nextStep();
    } else if (isLastQuestion) {
      nextStep(); // This will trigger isComplete in the store
    }
  };

  const getValueLabel = (value: number): string => {
    if (value <= -1) return "Strongly Disagree";
    if (value <= -0.6) return "Disagree";
    if (value <= -0.2) return "Somewhat Disagree";
    if (value < 0.2) return "Neutral";
    if (value < 0.6) return "Somewhat Agree";
    if (value < 1) return "Agree";
    return "Strongly Agree";
  };

  if (isComplete) return null;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 mb-32 bg-white rounded-lg shadow-lg"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Question {currentStep + 1} of {questions.length}
          </h2>
          <p className="text-lg text-gray-600">{currentQuestion.text}</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {[-1, -0.6, -0.2, 0.2, 0.6, 1].map((value) => (
              <button
                key={value}
                type="submit"
                onClick={() => setSliderValue(value)}
                className={`!p-2 !rounded-lg transition-colors text-center text-sm min-h-[4rem] flex items-center justify-center !border-0 ${
                  value === sliderValue
                    ? value > 0.5
                      ? "!bg-[#0015BC] !text-white"
                      : value < -0.5
                      ? "!bg-[#5C0B19] !text-white"
                      : "!bg-gray-600 !text-white"
                    : value > 0.5
                    ? "!bg-[#C7CBFF] !text-[#000852] hover:!bg-[#0015BC] hover:!text-white"
                    : value < -0.5
                    ? "!bg-[#FFCCD3] !text-[#5C0B19] hover:!bg-[#5C0B19] hover:!text-white"
                    : "!bg-gray-200 !text-gray-800 hover:!bg-gray-600 hover:!text-white"
                }`}
              >
                {getValueLabel(value)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={previousStep}
            disabled={!canGoPrevious()}
            className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
        </div>
      </div>
    </form>
  );
};
