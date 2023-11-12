import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Flashcard from "../components/Flashcard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store";
import { getAllFlashcards } from "../redux/flashcards/flashcardsReducer";

const HomePage: React.FC = () => {
  const flashcards = useSelector(
    (state: IRootState) => state.flashcards.flashcards
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("flashcards")) {
      dispatch(
        getAllFlashcards(
          JSON.parse(localStorage.getItem("flashcards") as string)
        )
      );
    }
  }, [dispatch]);

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
        {flashcards &&
          flashcards
            .map((flashcard, index) => ({ ...flashcard, originalIndex: index }))
            .sort((a, b) => b.originalIndex - a.originalIndex)
            .filter((_, index) => index < 3)
            .map((flashcard) => (
              <Flashcard key={flashcard.id} {...flashcard} />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
