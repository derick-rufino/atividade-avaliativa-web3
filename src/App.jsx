import { useState } from "react";
import "./App.css";

import QuizCard from "./components/ui/quizCard";



function App() {
  const [count, setCount] = useState(0);

  const quizzes = [
    {
      id: 1,
      title: "CSS",
      description: "This is a brief description of Quiz 1.",
      route: "/quiz-css",
      icon: "iconFileTypeCss",
    },
    {
      id: 2,
      title: "JavaScript",
      description: "This is a brief description of Quiz 2.",
      route: "/quiz-javascript",
      icon: "iconBrandJavascript",
    },
    {
      id: 3,
      title: "ReactJS",
      description: "This is a brief description of Quiz 3.",
      route: "/quiz-react",
      icon: "iconBrandReact",
    },
  ];

  return (
    <div className="App py-8 px-16 bg-slate-950 min-h-dvh flex flex-col gap-4">
      <div className="header">
        <div className="text-wrapper gap-0.5 flex flex-col">
          <h1 className="text-4xl font-black text-slate-50">Quiz</h1>
          <h2 className="text-xl font-medium text-slate-400">
            Atividade avaliativa - web III
          </h2>
        </div>
      </div>
      <div className="quiz-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            icon={quiz.icon}
            title={quiz.title}
            description={quiz.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
