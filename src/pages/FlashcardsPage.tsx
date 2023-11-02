import { useEffect, useState } from "react";
import Flashcard from "../components/Flashcard";
import { Flashcard as FlashcardType } from "../interfaces/Flashcard";

const FlashcardsPage: React.FC = () => {
  const [flashcards, setFlashCards] = useState<FlashcardType[]>([]);

  useEffect(() => {
    if (localStorage.getItem("flashcards")) {
      setFlashCards(JSON.parse(localStorage.getItem("flashcards") as string));
    }
  }, []);

  return (
    <div className="max-w-5xl m-auto">
      <div className="text-2xl font-bold mb-4 text-violet-700">
        My Flashcards
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flashcards
          .map((flashcard, index) => ({ ...flashcard, originalIndex: index }))
          .sort((a, b) => b.originalIndex - a.originalIndex)
          .map((flashcard) => (
            <Flashcard key={flashcard.id} {...flashcard} />
          ))}
      </div>
    </div>
  );
};

export default FlashcardsPage;
