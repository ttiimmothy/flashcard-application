import ReactCardFlip from "react-card-flip";

const Card: React.FC<{
  question: string;
  answer: string;
  flip: boolean;
  setFlip: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ question, answer, flip, setFlip }) => {
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
      <div
        className="h-80 w-96 bg-white rounded-lg border border-gray-200 shadow-lg flex justify-center items-center cursor-pointer visible:false"
        onClick={() => setFlip(!flip)}
      >
        <div className="p-5 overflow-auto">
          <div className="mb-3 font-bold text-gray-700">{question}</div>
        </div>
      </div>
      <div
        className="h-80 w-96 bg-white rounded-lg border border-gray-200 shadow-lg flex justify-center items-center cursor-pointer"
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
