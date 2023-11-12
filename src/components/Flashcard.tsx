import { Link, useNavigate } from "react-router-dom";
import { Flashcard as FlashcardType } from "../interfaces/Flashcard";

const Flashcard: React.FC<FlashcardType> = ({ id, topic, cards }) => {
  const navigate = useNavigate();

  const navigateToTheCard = () => {
    navigate(`/flashcard/${id}`, {
      state: { topic, cards },
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md">
      <div
        className="p-5 cursor-pointer hover:opacity-70"
        onClick={navigateToTheCard}
      >
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {topic}
        </h3>
        <div className="mb-3 font-normal text-gray-700">{topic}</div>
        <button className="text-violet-400 hover:text-violet-600">
          <Link to={`/flashcard/${id}`} state={{ topic, cards }}>
            View Cards
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
