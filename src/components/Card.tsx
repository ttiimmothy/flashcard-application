import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [flip, setFlip] = useState<boolean>(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
      <div
        className="h-80 w-96 bg-white rounded-lg border border-gray-200 shadow-md flex justify-center items-center cursor-pointer visible:false"
        onClick={() => setFlip(!flip)}
      >
        <div className="p-5 overflow-auto">
          <div className="mb-3 font-bold text-gray-700">{question}</div>
        </div>
      </div>
      <div
        className="h-80 w-96 bg-white rounded-lg border border-gray-200 shadow-md flex justify-center items-center cursor-pointer"
        onClick={() => setFlip(!flip)}
      >
        <div className="p-5 overflow-auto">
          <div className="mb-3 font-bold text-gray-700">{answer}</div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
