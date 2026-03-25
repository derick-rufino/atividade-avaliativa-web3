import "./App.css";

import QuizCard from "./components/ui/quizCard";

import { Link } from "react-router";

function App() {
  const quizzes = [
    {
      id: 1,
      title: "CSS",
      description: "Teste seus conhecimentos em estilização de páginas web.",
      route: "/quiz/css",
      icon: "iconFileTypeCss",
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Teste seus conhecimentos sobre JavaScript e sua sintaxe.",
      route: "/quiz/javascript",
      icon: "iconBrandJavascript",
    },
    {
      id: 3,
      title: "Resultados",
      description: "Veja os resultados dos quizzes respondidos.",
      route: "/quiz/results",
      icon: "iconCheckupList",
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
      <div className="quiz-cards mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <Link key={quiz.id} to={quiz.route}>
            <QuizCard
              title={quiz.title}
              description={quiz.description}
              icon={quiz.icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
