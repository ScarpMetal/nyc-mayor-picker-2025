import { create } from "zustand";
import { candidatesData } from "../data/candidates";
import { getAllQuestions, getQuestionById } from "../data/questions";

interface QuizState {
  currentStep: number;
  responses: {
    [questionId: string]: number;
  };
  isComplete: boolean;
  // Quiz navigation actions
  nextStep: () => void;
  previousStep: () => void;
  canGoNext: () => boolean;
  canGoPrevious: () => boolean;
  // Answer handling
  answerQuestion: (questionId: string, userFavorability: number) => void;
  removeAnswer: (questionId: string) => void;
  getCurrentAnswer: (questionId: string) => number | undefined;
  getCandidateAlignments: () => { [candidateId: string]: number };
  resetQuiz: () => void;
}

const calculateCandidateScore = (
  candidateId: string,
  responses: { [questionId: string]: number }
): number => {
  let totalScore = 0;
  let totalWeight = 0;

  Object.entries(responses).forEach(([questionId, userFavorability]) => {
    const question = getQuestionById(questionId);
    if (!question) return;

    const candidate = candidatesData.candidates[candidateId];
    if (!candidate) return;

    // For each tag in the question
    Object.entries(question.tag_relevance).forEach(([tag, relevance]) => {
      // Look through all policy positions for matching tags
      candidate.policy_positions.forEach((position) => {
        if (tag in position.tag_favorability) {
          const tagRelevance =
            relevance * Math.abs(position.tag_favorability[tag]);
          // Convert difference to 0-1 scale where 1 is perfect alignment
          const tagAlignment =
            1 - Math.abs(position.tag_favorability[tag] - userFavorability) / 2;

          totalWeight += tagRelevance;
          totalScore += tagRelevance * tagAlignment;
        }
      });
    });
  });

  // Return normalized score (0 to 1 scale)
  return totalWeight > 0 ? totalScore / totalWeight : 0;
};

export const useQuizStore = create<QuizState>((set, get) => ({
  currentStep: 0,
  responses: {},
  isComplete: false,

  nextStep: () => {
    const questions = getAllQuestions();
    const state = get();
    const nextStep = state.currentStep + 1;

    if (nextStep >= questions.length) {
      set({ isComplete: true });
    } else {
      set({ currentStep: nextStep });
    }
  },

  previousStep: () => {
    const state = get();
    const questions = getAllQuestions();
    const prevStep = Math.max(0, state.currentStep - 1);

    // Remove answer for the current question when going back
    const currentQuestionId = questions[prevStep]?.id;
    if (currentQuestionId) {
      get().removeAnswer(currentQuestionId);
    }

    set({ currentStep: prevStep });
  },

  canGoNext: () => {
    const state = get();
    const questions = getAllQuestions();
    return state.currentStep < questions.length - 1;
  },

  canGoPrevious: () => {
    const state = get();
    return state.currentStep > 0;
  },

  getCurrentAnswer: (questionId: string) => {
    const state = get();
    return state.responses[questionId];
  },

  answerQuestion: (questionId: string, userFavorability: number) => {
    set((state) => ({
      responses: {
        ...state.responses,
        [questionId]: userFavorability,
      },
    }));
  },

  removeAnswer: (questionId: string) => {
    set((state) => {
      const newResponses = { ...state.responses };
      delete newResponses[questionId];
      return { responses: newResponses };
    });
  },

  getCandidateAlignments: () => {
    const state = get();
    // Calculate raw alignment scores which already represent true alignment percentages
    return Object.keys(candidatesData.candidates).reduce(
      (scores, candidateId) => {
        scores[candidateId] = calculateCandidateScore(
          candidateId,
          state.responses
        );
        return scores;
      },
      {} as { [key: string]: number }
    );
  },

  resetQuiz: () =>
    set({
      currentStep: 0,
      responses: {},
      isComplete: false,
    }),
}));
