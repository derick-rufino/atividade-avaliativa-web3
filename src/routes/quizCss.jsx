import { useState, useEffect } from "react";

import QuestionCard from "../components/ui/questionCard";
import { IconFileTypeCss } from "@tabler/icons-react";
import BackButton from "../components/ui/backButton";

export default function QuizCSS() {

  const [answers, setAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem("quiz-css-answers");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("quiz-css-answers", JSON.stringify(answers));
  }, [answers]);

  const questions = [
    {
      id: 1,
      question:
        "Qual é a diferença entre 'display: none' e 'visibility: hidden'?",
      options: [
        {
          id: "a",
          label: "Não há diferença, ambos ocultam o elemento da mesma forma",
        },
        {
          id: "b",
          label:
            "display: none remove o elemento do fluxo; visibility: hidden oculta mas mantém o espaço",
        },
        {
          id: "c",
          label:
            "visibility: hidden remove o elemento do fluxo; display: none mantém o espaço",
        },
        { id: "d", label: "display: none só funciona em elementos inline" },
      ],
      correct: "b",
    },
    {
      id: 2,
      question:
        "No modelo de box do CSS, qual propriedade faz com que padding e border sejam incluídos na largura total do elemento?",
      options: [
        { id: "a", label: "box-sizing: border-box" },
        { id: "b", label: "box-sizing: content-box" },
        { id: "c", label: "width: auto" },
        { id: "d", label: "overflow: auto" },
      ],
      correct: "a",
    },
    {
      id: 3,
      question: "Qual seletor CSS tem maior especificidade?",
      options: [
        { id: "a", label: ".card p" },
        { id: "b", label: "p.card" },
        { id: "c", label: "#main p" },
        { id: "d", label: "p:first-child" },
      ],
      correct: "c",
    },
    {
      id: 4,
      question:
        "O que a propriedade 'z-index' requer para funcionar corretamente?",
      options: [
        { id: "a", label: "O elemento precisa ter display: flex" },
        {
          id: "b",
          label: "O elemento precisa ter position diferente de static",
        },
        { id: "c", label: "O elemento precisa ter overflow: hidden" },
        { id: "d", label: "O elemento precisa ter width definido" },
      ],
      correct: "b",
    },
    {
      id: 5,
      question:
        "Qual valor de 'position' remove o elemento do fluxo normal do documento e o posiciona em relação à viewport?",
      options: [
        { id: "a", label: "relative" },
        { id: "b", label: "absolute" },
        { id: "c", label: "fixed" },
        { id: "d", label: "sticky" },
      ],
      correct: "c",
    },
  ];

  return (
    <div className="quiz-css py-8 px-16 bg-slate-950 min-h-dvh">
      <header>
        <BackButton />
        <h1 className="text-3xl font-bold text-slate-50 mb-2 flex items-center gap-6">
          Quiz CSS{" "}
          <IconFileTypeCss className="inline text-purple-500 scale-150" />
        </h1>
        <p className="text-slate-400">
          Teste seus conhecimentos sobre de estilização
        </p>
      </header>
      <main className="mt-6 flex flex-col gap-8">
        <div className="questions-container flex flex-row overflow-x-auto gap-6 max-w-150 no-scrollbar">
          {questions.map((q) => (
            <QuestionCard
              key={q.id}
              q={q}
              selected={answers[q.id]}
              onAnswer={(optId) =>
                setAnswers((prev) => ({ ...prev, [q.id]: optId }))
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}
