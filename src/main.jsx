import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import App from "./App.jsx";
import QuizCss from "./routes/quizCss.jsx";
import QuizJavascript from "./routes/quizJavascript.jsx";
import QuizReact from "./routes/quizReact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz/css" element={<QuizCss />} />
        <Route path="/quiz/javascript" element={<QuizJavascript />} />
        <Route path="/quiz/react" element={<QuizReact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
