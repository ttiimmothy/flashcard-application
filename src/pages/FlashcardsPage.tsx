import Flashcard from "../components/Flashcard";

const FlashcardsPage: React.FC = () => {
  return (
    <div className="max-w-5xl m-auto">
      <div className="text-2xl font-bold mb-4">My Flashcards</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Flashcard />
        <Flashcard />
        <Flashcard />
        <Flashcard />
      </div>
    </div>
  );
};

export default FlashcardsPage;
