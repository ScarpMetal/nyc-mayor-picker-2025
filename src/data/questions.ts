interface Question {
  id: string;
  text: string;
  tag_relevance: {
    [key: string]: number; // Weight of how relevant this tag is to the question (0 to 1)
  };
}

interface QuestionsData {
  questions: Question[];
}

export const questionsData: QuestionsData = {
  questions: [
    {
      id: "law_enforcement_funding",
      text: "Should the city increase funding and resources for law enforcement?",
      tag_relevance: {
        police_funding: 1.0,
        transit_police: 0.7,
        law_enforcement: 1.0,
        police_oversight: 0.8,
        data_driven_policing: 0.6,
      },
    },
    {
      id: "affordable_housing_expansion",
      text: "The city should significantly expand affordable housing options in NYC.",
      tag_relevance: {
        affordable_housing: 1.0,
        housing_development: 1.0,
        public_housing: 0.9,
        zoning_reform: 0.8,
        housing_preservation: 0.7,
      },
    },
    {
      id: "public_transit_investment",
      text: "Should the city invest more in public transportation and bike infrastructure?",
      tag_relevance: {
        public_transit: 1.0,
        transit_safety: 0.8,
        parking_reform: 0.7,
        traffic_safety: 0.9,
        transit_police: 0.6,
      },
    },
    {
      id: "childcare_education",
      text: "The city should expand childcare and early education programs.",
      tag_relevance: {
        childcare: 1.0,
        education_funding: 1.0,
        afterschool_programs: 0.9,
        education_equity: 0.8,
        youth_employment: 0.6,
      },
    },
    {
      id: "climate_action",
      text: "Should the city take stronger action on climate change and environmental issues?",
      tag_relevance: {
        climate_action: 1.0,
        green_infrastructure: 1.0,
        environmental_justice: 0.9,
        housing_sustainability: 0.7,
        public_transit: 0.6,
      },
    },
    {
      id: "homelessness_mental_health",
      text: "How should the city address homelessness and mental health services?",
      tag_relevance: {
        homeless_services: 1.0,
        mental_health_services: 1.0,
        right_to_shelter: 1.0,
        housing_enforcement: 0.7,
        public_services: 0.6,
      },
    },
    {
      id: "landlord_oversight",
      text: "Should the city increase oversight and regulation of landlords?",
      tag_relevance: {
        tenant_rights: 1.0,
        housing_enforcement: 1.0,
        landlord_accountability: 1.0,
        rent_control: 0.8,
        housing_preservation: 0.7,
      },
    },
    {
      id: "government_transparency",
      text: "The city should prioritize increasing government transparency and fiscal responsibility.",
      tag_relevance: {
        government_transparency: 1.0,
        fiscal_responsibility: 1.0,
        government_accountability: 1.0,
        participatory_budgeting: 0.8,
        anti_corruption: 0.9,
      },
    },
    {
      id: "hate_crime_prevention",
      text: "Should the city expand programs to prevent hate crimes and discrimination?",
      tag_relevance: {
        hate_crime_prevention: 1.0,
        antisemitism_prevention: 1.0,
        law_enforcement: 0.8,
        community_investment: 0.7,
        police_funding: 0.6,
      },
    },
    {
      id: "food_security",
      text: "The city should establish new programs to improve food security and access.",
      tag_relevance: {
        food_access: 1.0,
        public_services: 1.0,
        government_retail: 0.9,
        community_investment: 0.8,
        affordable_housing: 0.5,
      },
    },
  ],
};

// Export types for use in other files
export type { Question, QuestionsData };

// Helper function to get all questions
export const getAllQuestions = (): Question[] => {
  return questionsData.questions;
};

// Helper function to get a question by ID
export const getQuestionById = (id: string): Question | undefined => {
  return questionsData.questions.find((question) => question.id === id);
};
