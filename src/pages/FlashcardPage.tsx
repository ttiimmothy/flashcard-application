import { useState } from "react";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const FlashcardPage: React.FC = () => {
  const {
    state: { topic, cards },
  } = useLocation();

  const [cardIndex, setCardIndex] = useState<number>(0);
  const [flip, setFlip] = useState<boolean>(false);

  const handlePrevious = () => {
    if (cardIndex >= 1) {
      setCardIndex(cardIndex - 1);
    }
    setFlip(false);
  };

  const handleNext = () => {
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
    }
    setFlip(false);
  };

  return (
    <>
      <div className="text-3xl font-bold mb-4 text-center py-10">{topic}</div>
      <div className="flex justify-center">
        <Card {...cards[cardIndex]} flip={flip} setFlip={setFlip} />
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
          disabled={cardIndex >= cards.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FlashcardPage;
