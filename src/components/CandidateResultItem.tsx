interface CandidateResultItemProps {
  rank: number;
  name: string;
  alignmentPercentage: number;
  isPreview?: boolean;
  websiteUrl?: string;
  currentJob?: string;
}

export const CandidateResultItem = ({
  rank,
  name,
  alignmentPercentage,
  isPreview = false,
  websiteUrl,
  currentJob,
}: CandidateResultItemProps) => {
  return (
    <div
      className={`flex ${
        isPreview ? "items-center gap-2" : "items-center gap-4"
      } p-4 hover:bg-[#E6E8FF] transition-colors rounded-lg`}
    >
      <div
        className={`flex items-center justify-center ${
          !isPreview ? "w-8 h-8" : "w-8 h-8"
        } min-w-[2rem] min-h-[2rem] rounded-full bg-[#0015BC] text-white font-semibold`}
      >
        #{rank}
      </div>
      <div className={`${!isPreview ? "flex-1" : ""} space-y-1`}>
        <div className="font-medium text-[#000852]">{name}</div>
        {!isPreview && currentJob && (
          <div className="text-sm text-[#001099]">{currentJob}</div>
        )}
      </div>
      <div className="text-sm text-[#001099]">
        {(alignmentPercentage * 100).toFixed(1)}%
      </div>
      {!isPreview && websiteUrl && (
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 text-sm text-white bg-[#0015BC] rounded hover:bg-[#001099] transition-colors"
        >
          Visit Website
        </a>
      )}
    </div>
  );
};
