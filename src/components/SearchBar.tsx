import { useState } from "react";
import { addFlashcards } from "../utils/openai";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [lengthError, setLengthError] = useState(false);

  const submitTopic = async () => {
    try {
      if (input.trim() !== "" && input.length > 10) {
        setIsLoading(true);
        await addFlashcards(input);
        setIsLoading(false);
      } else if (input.length <= 10) {
        setLengthError(true);
      } else {
        setInput("");
      }
    } catch (e) {
      setIsLoading(false);
      console.error(e);
      throw e;
    }
  };

  return (
    <div className="flex items-start p-10 gap-8 justify-center">
      <div className="w-9/12">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setLengthError(false);
          }}
          placeholder="Enter a topic to begin generating flashcards"
          className="p-3 rounded-full border-2 border-gray-300 focus:border-violet-400 outline-none transition-colors w-full"
        />
        {lengthError && (
          <div className="text-red-500 mt-2 text-sm font-semibold w-[fit-content]">
            Topic must be at least 10 characters long
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
