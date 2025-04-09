import { type Candidate } from "../data/candidates";

interface TopCandidateCardProps {
  rank: number;
  candidateId: string;
  candidate: Candidate;
  alignmentPercentage: number;
}

export const TopCandidateCard = ({
  rank,
  candidate,
  alignmentPercentage,
}: TopCandidateCardProps) => {
  return (
    <div className="p-6 space-y-4 bg-white rounded-xl overflow-hidden">
      {/* Header with rank and score */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0015BC] text-white font-bold text-xl shadow-md">
          #{rank}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#00042E]">{candidate.name}</h3>
          <p className="text-[#001099]">{candidate.current_job}</p>
        </div>
        <div className="text-lg font-semibold text-[#0015BC]">
          Match: {(alignmentPercentage * 100).toFixed(1)}%
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-2">
        <h4 className="font-semibold text-[#000852]">Government Experience</h4>
        <div className="space-y-1">
          {candidate.government_experience.length > 0 ? (
            candidate.government_experience.map((exp, index) => (
              <div key={index} className="text-sm text-[#000C75]">
                {exp.role} ({exp.years})
                {exp.notes && (
                  <span className="text-[#4C59FF]"> - {exp.notes}</span>
                )}
              </div>
            ))
          ) : (
            <div className="text-sm text-[#4C59FF]">
              No previous government experience
            </div>
          )}
        </div>
      </div>

      {/* Top Policy Positions */}
      <div className="space-y-2">
        <h4 className="font-semibold text-[#000852]">Key Policy Positions</h4>
        <div className="space-y-3">
          {candidate.policy_positions.map((position, index) => (
            <div key={index} className="space-y-1 p-3 rounded-lg bg-[#E6E8FF]">
              <h5 className="text-sm font-medium text-[#000852]">
                {position.issue}
              </h5>
              <p className="text-sm text-[#000C75] mb-2">
                {position.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(position.tag_favorability)
                  .sort(([, a], [, b]) => Math.abs(b) - Math.abs(a))
                  .slice(0, 3)
                  .map(([tag, value]) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-full ${
                        value > 0.5
                          ? "bg-[#C7CBFF] text-[#000852]"
                          : value < -0.5
                          ? "bg-[#FFCCD3] text-[#5C0B19]"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tag.replace(/_/g, " ")}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Website Link */}
      <div className="pt-2">
        <a
          href={candidate.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-[#0015BC] hover:text-[#001099] transition-colors"
        >
          Visit Campaign Website
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
