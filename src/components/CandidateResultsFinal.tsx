import { candidatesData } from "../data/candidates";
import { getAllQuestions } from "../data/questions";
import { useQuizStore } from "../stores/quizStore";
import { CandidateResultItem } from "./CandidateResultItem";
import { TopCandidateCard } from "./TopCandidateCard";

export const CandidateResultsFinal = () => {
  const { responses, getCandidateAlignments } = useQuizStore();
  const totalQuestions = getAllQuestions().length;

  if (Object.keys(responses).length < totalQuestions) {
    return null; // Only show when all questions are answered
  }

  // Get all candidates sorted by score
  const alignments = getCandidateAlignments();
  const sortedCandidates = Object.entries(alignments)
    .map(([candidateId, alignmentPercentage]) => ({
      candidateId,
      alignmentPercentage,
      name: candidatesData.candidates[candidateId].name,
      website: candidatesData.candidates[candidateId].website,
      currentJob: candidatesData.candidates[candidateId].current_job,
    }))
    .sort((a, b) => b.alignmentPercentage - a.alignmentPercentage);

  return (
    <div className="max-w-3xl mx-auto my-8">
      <h2 className="text-4xl font-bold text-center text-[#00042E] mb-12">
        Your Best Matches
      </h2>
      <div className="space-y-6">
        {/* Top 3 Candidates */}
        {sortedCandidates.slice(0, 3).map((candidate, index) => (
          <div
            key={candidate.candidateId}
            className={`overflow-hidden rounded-xl shadow-lg ${
              index === 0
                ? "border-2 border-[#0015BC] shadow-[#E6E8FF]"
                : index === 1
                ? "border-2 border-[#4C59FF] shadow-[#E6E8FF]"
                : "border-2 border-[#757FFF]"
            }`}
          >
            <TopCandidateCard
              rank={index + 1}
              candidateId={candidate.candidateId}
              candidate={candidatesData.candidates[candidate.candidateId]}
              alignmentPercentage={candidate.alignmentPercentage}
            />
          </div>
        ))}

        {/* Remaining Candidates */}
        {sortedCandidates.length > 3 && (
          <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-[#E6E8FF]">
            <h3 className="text-xl font-semibold text-[#000852] mb-6">
              Other Matches
            </h3>
            <div className="space-y-3">
              {sortedCandidates.slice(3).map((candidate, index) => (
                <CandidateResultItem
                  key={candidate.candidateId}
                  rank={index + 4}
                  name={candidate.name}
                  alignmentPercentage={candidate.alignmentPercentage}
                  websiteUrl={candidate.website}
                  currentJob={candidate.currentJob}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
