import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Flashcard from "../components/Flashcard";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col max-w-5xl m-auto">
      <SearchBar />
      <div className="flex justify-between px-10 items-center mb-4">
        <div className="text-2xl font-bold">Top Flashcards</div>
        <Link
          to="/flashcards"
          className="text-violet-400 hover:text-violet-600"
        >
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
        <Flashcard />
        <Flashcard />
        <Flashcard />
      </div>
    </div>
  );
};

export default HomePage;
