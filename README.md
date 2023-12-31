# Flashcard Application
[![ci](https://github.com/ttiimmothy/flashcard-application/actions/workflows/ci.yml/badge.svg)](https://github.com/ttiimmothy/flashcard-application/actions/workflows/ci.yml)
[![cd](https://github.com/ttiimmothy/flashcard-application/actions/workflows/cd.yml/badge.svg)](https://github.com/ttiimmothy/flashcard-application/actions/workflows/cd.yml)

A flashcard application uses `Typescript`, `React` amd `Vite`. It uses `Tailwind CSS` for simplifying CSS usage. The application uses `react-router` to navigate between pages and `@reduxjs/toolkit` to perform state management. It also connects to `OpenAI ChatGPT 3.5` api to generate the flashcards.

## 🎯 Features

- generate flashcards according to the topic that user type
- flip the flashcards to show the questions and answers

## 🖥 Prerequisites

- Node.js (version 12.0 or above)
- npm (which comes with Node.js) or Yarn (version 1.22.0 or above)

## 🔧 Usage
### Build packages and Run

```TypeScript
npm install
npm run dev
```

## :scroll: Environment Variables

#### details see the `.env.example` files

- `OpenAI` api key

If you use `github pages` for static page deployment, you need to set these environmental variables in github action`secrets`.

## License

Flashcard Application is licensed under [GNU General Public License v3.0](LICENSE).