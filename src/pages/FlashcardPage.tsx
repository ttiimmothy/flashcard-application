import { useState } from "react";
import Card from "../components/Card";

const FlashcardPage: React.FC = () => {
  const cards = [
    { question: "Question1", answer: "Answer1" },
    { question: "Question2", answer: "Answer2" },
    { question: "Question3", answer: "Answer3" },
  ];
  const [cardIndex, setCardIndex] = useState<number>(0);

  const handlePrevious = () => {
    if (cardIndex >= 1) {
      setCardIndex(cardIndex - 1);
    }
  };

  const handleNext = () => {
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };

  return (
    <>
      <div className="text-3xl font-bold mb-4 text-center py-10">Topic</div>
      <div className="flex justify-center">
        <Card {...cards[cardIndex]} />
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="mr-2 px-4 py-2 text-white bg-violet-400 rounded hover:bg-violet-600 disabled:bg-violet-200"
          onClick={handlePrevious}
          disabled={cardIndex == 0}
        >
          Previous
        </button>
        <button
          className="mr-2 px-4 py-2 text-white bg-violet-400 rounded hover:bg-violet-600 disabled:bg-violet-200"
          onClick={handleNext}
          disabled={cardIndex == cards.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FlashcardPage;
