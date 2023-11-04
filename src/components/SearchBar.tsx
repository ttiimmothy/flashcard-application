import { useState } from "react";
import { addFlashcards } from "./utils/openai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store";
import { addFlashcard } from "../redux/flashcards/flashcardsReducer";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [lengthError, setLengthError] = useState(false);
  const [serverError, setServerError] = useState(false);

  const navigate = useNavigate();

  const flashcards = useSelector(
    (state: IRootState) => state.flashcards.flashcards
  );

  const dispatch = useDispatch();

  const submitTopic = async () => {
    try {
      if (input.trim() !== "" && input.length > 10) {
        setIsLoading(true);

        const newFlashcard = await addFlashcards(input);
        const flashcardsNew = [...flashcards, newFlashcard];
        dispatch(addFlashcard(newFlashcard));
        localStorage.setItem("flashcards", JSON.stringify(flashcardsNew));

        setInput("");
        setIsLoading(false);

        navigate(`/flashcard/${newFlashcard.id}`, {
          state: { topic: newFlashcard.topic, cards: newFlashcard.cards },
        });
      } else if (input.length <= 10) {
        setLengthError(true);
      } else {
        setInput("");
      }
    } catch (e) {
      setIsLoading(false);
      setServerError(true);
      console.error(e);
      throw e;
    }
  };

  return (
    <div className="flex items-start p-10 gap-6 justify-center">
      <div className="w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setLengthError(false);
            setServerError(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitTopic();
            }
          }}
          placeholder="Enter a topic to begin generating flashcards"
          className="p-3 rounded-full border-2 border-gray-300 focus:border-violet-400 outline-none transition-colors w-full"
        />
        {lengthError && (
          <div className="text-red-500 mt-2 text-sm font-semibold w-[fit-content]">
            Topic must be at least 10 characters long.
          </div>
        )}
        {serverError && (
          <div className="text-red-500 mt-2 text-sm font-semibold w-[fit-content]">
            Server is broken, so the flashcards cannot be generated now.
          </div>
        )}
      </div>
      <button
        className="px-6 py-4 bg-violet-400 text-white rounded-full hover:bg-violet-600 transition-colors whitespace-nowrap"
        onClick={submitTopic}
      >
        {isLoading ? "Generating" : "Generate"}
      </button>
    </div>
  );
};

export default SearchBar;
