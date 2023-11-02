import { Link } from "react-router-dom";

const Flashcard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="p-5">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          topics
        </h3>
        <div className="mb-3 font-normal text-gray-700">description</div>
        <button className="text-violet-400 hover:text-violet-600">
          <Link to="/flashcard/1">View Cards</Link>
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
