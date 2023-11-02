import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import App from "./App";
import HomePage from "./pages/HomePage";
import FlashcardsPage from "./pages/FlashcardsPage";
import FlashcardPage from "./pages/FlashcardPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: "flashcards", element: <FlashcardsPage /> },
        { path: "flashcard/:id", element: <FlashcardPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
