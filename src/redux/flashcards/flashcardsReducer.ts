import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Flashcard } from "../../interfaces/Flashcard";

export interface IFlashcardsState {
  flashcards: Flashcard[];
}

const initialState: IFlashcardsState = {
  flashcards: [],
};

const flashcardsReducer = createSlice({
  name: "Flashcards",
  initialState,
  reducers: {
    getAllFlashcards: (
      state: IFlashcardsState,
      action: PayloadAction<Flashcard[]>
    ) => {
      state.flashcards = action.payload;
    },

    addFlashcard: (
      state: IFlashcardsState,
      action: PayloadAction<Flashcard>
    ) => {
      state.flashcards.push(action.payload);
    },
  },
});

export const { getAllFlashcards, addFlashcard } = flashcardsReducer.actions;
export default flashcardsReducer.reducer;
