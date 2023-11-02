import { Card } from "./Card";

export interface Flashcard {
  id: string;
  topic: string;
  cards: Card[];
}
