import { candidatesData } from "../data/candidates";
import { useQuizStore } from "../stores/quizStore";
import { CandidateResultItem } from "./CandidateResultItem";

export const CandidateResultsPreview = () => {
  const { responses, getCandidateAlignments } = useQuizStore();

  // Don't show anything if no questions answered yet
  if (Object.keys(responses).length === 0) {
    return null;
  }

  // Get sorted candidates by score
  const alignments = getCandidateAlignments();
  const sortedCandidates = Object.entries(alignments)
    .map(([candidateId, alignmentPercentage]) => ({
      candidateId,
      alignmentPercentage,
      name: candidatesData.candidates[candidateId].name,
      website: candidatesData.candidates[candidateId].website,
      currentJob: candidatesData.candidates[candidateId].current_job,
    }))
    .sort((a, b) => b.alignmentPercentage - a.alignmentPercentage)
    .slice(0, 3); // Get top 3

  return (
    <div className="flex flex-col flex-1 fixed bottom-0 left-0 right-0">
      <div className="flex-1"></div>
      <div className="bg-white shadow-lg border-t border-gray-200 mt-0  w-full mx-0">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Current Leaders
          </h3>
          <div className="overflow-x-auto">
            <div className="flex justify-around items-start gap-4 min-w-[600px]">
              {sortedCandidates.map((candidate, index) => (
                <CandidateResultItem
                  key={candidate.candidateId}
                  rank={index + 1}
                  name={candidate.name}
                  alignmentPercentage={candidate.alignmentPercentage}
                  isPreview={true}
                  websiteUrl={candidate.website}
                  currentJob={candidate.currentJob}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
