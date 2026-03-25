import { useState } from "react";
import QuestionCard from "../components/ui/questionCard";
import { IconBrandJavascript } from "@tabler/icons-react";
import BackButton from "../components/ui/backButton";

export default function QuizJavascript() {
  const questions = [
    {
      id: 1,
      question: "Qual é a diferença entre '==' e '===' no JavaScript?",
      options: [
        { id: "a", label: "Não há diferença, ambos comparam valor e tipo" },
        {
          id: "b",
          label: "'==' compara valor e tipo; '===' compara apenas valor",
        },
        {
          id: "c",
          label:
            "'===' compara valor e tipo; '==' compara apenas valor com coerção de tipo",
        },
        { id: "d", label: "'==' só funciona com números" },
      ],
      correct: "c",
    },
    {
      id: 2,
      question: "O que o método Array.prototype.reduce() retorna por padrão?",
      options: [
        { id: "a", label: "Sempre retorna um array" },
        {
          id: "b",
          label: "O valor acumulado após percorrer todos os elementos",
        },
        { id: "c", label: "O último elemento do array" },
        { id: "d", label: "Um novo array filtrado" },
      ],
      correct: "b",
    },
    {
      id: 3,
      question: "O que é o Event Loop no JavaScript?",
      options: [
        { id: "a", label: "Um loop que percorre todos os elementos do DOM" },
        {
          id: "b",
          label: "Um método nativo para iterar sobre eventos do teclado",
        },
        {
          id: "c",
          label:
            "O mecanismo que permite JavaScript executar código assíncrono mesmo sendo single-thread",
        },
        {
          id: "d",
          label: "Uma API do navegador para registrar eventos de clique",
        },
      ],
      correct: "c",
    },
    {
      id: 4,
      question: "Qual é o resultado de 'typeof null' no JavaScript?",
      options: [
        { id: "a", label: "'null'" },
        { id: "b", label: "'undefined'" },
        { id: "c", label: "'object'" },
        { id: "d", label: "'boolean'" },
      ],
      correct: "c",
    },
    {
      id: 5,
      question: "O que diferencia 'let' de 'var' em relação ao escopo?",
      options: [
        {
          id: "a",
          label: "'var' tem escopo de bloco; 'let' tem escopo de função",
        },
        {
          id: "b",
          label:
            "'let' tem escopo de bloco; 'var' tem escopo de função ou global",
        },
        {
          id: "c",
          label: "Ambos têm escopo de bloco, mas 'var' permite redeclaração",
        },
        { id: "d", label: "Não há diferença de escopo entre eles" },
      ],
      correct: "b",
    },
  ];

  const [answers, setAnswers] = useState({});

  return (
    <div className="quiz-javascript py-8 px-16 bg-slate-950 min-h-dvh">
      <header>
        <BackButton />
        <h1 className="text-3xl font-bold text-slate-50 mb-2 flex items-center gap-6">
          Quiz JavaScript
          <IconBrandJavascript className="inline text-amber-300 scale-150" />
        </h1>
        <p className="text-slate-400">
          Teste seus conhecimentos sobre JavaScript
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
