import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flashcardsReducer, {
  IFlashcardsState,
} from "./redux/flashcards/flashcardsReducer";

export interface IRootState {
  flashcards: IFlashcardsState;
}

const reducer = combineReducers<IRootState>({
  flashcards: flashcardsReducer,
});

export default configureStore({
  reducer,
});
