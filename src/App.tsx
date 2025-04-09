import { CandidateResultsFinal } from "./components/CandidateResultsFinal";
import { CandidateResultsPreview } from "./components/CandidateResultsPreview";
import { Header } from "./components/Header";
import { QuestionStepper } from "./components/QuestionStepper";
import { useQuizStore } from "./stores/quizStore";

function App() {
  const { isComplete } = useQuizStore();

  return (
    <div className="min-h-screen bg-[#F5F7FF] flex flex-col flex-1">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        {isComplete ? (
          <CandidateResultsFinal />
        ) : (
          <>
            <QuestionStepper />
            <CandidateResultsPreview />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
