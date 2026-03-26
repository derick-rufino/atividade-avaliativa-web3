// ! Arquivo criado completamente por IA

import { useState, useEffect } from "react";
import BackButton from "../components/ui/backButton";
import {
  IconCheckupList,
  IconFileTypeCss,
  IconBrandJavascript,
  IconCircleCheck,
  IconCircleX,
  IconCircleDashed,
  IconTrophy,
  IconTargetArrow,
  IconBook2,
  IconBulb,
} from "@tabler/icons-react";

// ─── Dados ────────────────────────────────────────────────────────────────────
const CSS_QUESTIONS = [
  {
    id: 1,
    question: "Diferença entre 'display: none' e 'visibility: hidden'",
    correct: "b",
  },
  {
    id: 2,
    question: "Propriedade que inclui padding e border na largura total",
    correct: "a",
  },
  { id: 3, question: "Seletor CSS com maior especificidade", correct: "c" },
  {
    id: 4,
    question: "Requisito para 'z-index' funcionar corretamente",
    correct: "b",
  },
  {
    id: 5,
    question: "Valor de 'position' relativo à viewport",
    correct: "c",
  },
];

const JS_QUESTIONS = [
  {
    id: 1,
    question: "Diferença entre '==' e '===' no JavaScript",
    correct: "c",
  },
  {
    id: 2,
    question: "Retorno padrão de Array.prototype.reduce()",
    correct: "b",
  },
  { id: 3, question: "O que é o Event Loop no JavaScript", correct: "c" },
  { id: 4, question: "Resultado de 'typeof null'", correct: "c" },
  { id: 5, question: "Diferença de escopo entre 'let' e 'var'", correct: "b" },
];

// ─── Barra de progresso animada ───────────────────────────────────────────────
function ScoreBar({ score, total, color }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(
      () => setWidth(total > 0 ? (score / total) * 100 : 0),
      120,
    );
    return () => clearTimeout(t);
  }, [score, total]);

  const bar =
    color === "purple"
      ? "bg-purple-500"
      : color === "yellow"
        ? "bg-yellow-400"
        : "bg-slate-600";

  return (
    <div
      className="w-full h-0.75 bg-slate-800 rounded-full overflow-hidden"
      aria-label="Barra de progresso"
    >
      <div
        className={`h-full rounded-full ${bar} transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
        aria-valuenow={width}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      />
    </div>
  );
}

// ─── Linha de questão ─────────────────────────────────────────────────────────
function QuestionRow({ index, question, answered, correct }) {
  const notAnswered = !answered;
  const isCorrect = answered === correct;

  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-slate-800/50 last:border-0">
      {/* Ícone de status */}
      <div className="mt-px shrink-0">
        {notAnswered ? (
          <IconCircleDashed size={15} className="text-slate-600" />
        ) : isCorrect ? (
          <IconCircleCheck size={15} className="text-green-500" />
        ) : (
          <IconCircleX size={15} className="text-red-400" />
        )}
      </div>

      {/* Número */}
      <span className="font-mono text-xs text-slate-600 shrink-0 mt-px w-5">
        {String(index).padStart(2, "0")}
      </span>

      {/* Texto */}
      <p
        className={`text-sm leading-snug flex-1 ${
          notAnswered
            ? "text-slate-600 italic"
            : isCorrect
              ? "text-slate-300"
              : "text-slate-400"
        }`}
      >
        {question}
      </p>

      {/* Label removida para não exibir ✓ ou ✗ */}
    </div>
  );
}

// ─── Card por quiz ────────────────────────────────────────────────────────────
function QuizResultCard({ title, Icon, questions, answers, color }) {
  const notTaken = Object.keys(answers).length === 0;
  const score = notTaken
    ? 0
    : questions.filter((q) => answers[q.id] === q.correct).length;
  const total = questions.length;

  const accent =
    color === "purple"
      ? { text: "text-purple-400", border: "border-purple-900/60" }
      : { text: "text-yellow-400", border: "border-yellow-900/60" };
  return (
    <div
      className={`rounded-2xl bg-slate-900 border ${accent.border} flex flex-col overflow-hidden`}
    >
      {/* Cabeçalho do card */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <div className="flex items-center gap-2.5">
          {Icon && <Icon size={18} className={accent.text} />}
          <h2 className={`text-sm font-semibold tracking-wide ${accent.text}`}>
            {title}
          </h2>
        </div>
        {notTaken ? (
          <span className="text-xs text-slate-600 font-mono">
            não realizado
          </span>
        ) : (
          /* Placar: "4 / 5" */
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-2xl font-bold text-slate-100 leading-none">
              {score}
            </span>
            <span className="font-mono text-sm text-slate-600 leading-none">
              / {total}
            </span>
          </div>
        )}
      </div>
      {/* Barra de progresso */}
      <div className="px-5 pb-4">
        <ScoreBar
          score={score}
          total={notTaken ? 0 : total}
          color={notTaken ? "none" : color}
        />
      </div>
      {/* Lista de questões */}
      <div className="px-5 pb-5">
        {notTaken ? (
          <p className="text-sm text-slate-600 italic py-2">
            Responda o quiz para ver os resultados aqui.
          </p>
        ) : (
          questions.map((q) => (
            <QuestionRow
              key={q.id}
              index={q.id}
              question={q.question}
              answered={answers[q.id]}
              correct={q.correct}
            />
          ))
        )}
      </div>
    </div>
  );
}

// ─── Resumo geral ─────────────────────────────────────────────────────────────
function OverallSummary({ cssScore, jsScore }) {
  const total = 5 + 5; // Sempre 5 questões em cada quiz
  const score = cssScore + jsScore;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  let Icon = IconBulb;
  let iconClass = "text-slate-500";
  let message = "Complete os quizzes para ver seu desempenho.";

  if (total > 0) {
    if (pct === 100) {
      Icon = IconTrophy;
      iconClass = "text-yellow-400";
      message = "Perfeito. Dominou os dois tópicos.";
    } else if (pct >= 70) {
      Icon = IconTargetArrow;
      iconClass = "text-green-400";
      message = "Bom desempenho. Alguns pontos ainda valem revisão.";
    } else if (pct >= 40) {
      Icon = IconBook2;
      iconClass = "text-blue-400";
      message = "Começo sólido. Vale rever os erros com calma.";
    } else {
      Icon = IconBulb;
      iconClass = "text-slate-400";
      message = "Ainda há espaço pra crescer — e tudo bem com isso.";
    }
  }

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 px-6 py-5 flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
          Desempenho geral
        </p>
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-4xl font-bold text-slate-50 leading-none">
            {score}
          </span>
          <span className="font-mono text-lg text-slate-600 leading-none">
            / {total}
          </span>
          {total > 0 && (
            <span className="font-mono text-sm text-slate-500 ml-1">
              ({pct}%)
            </span>
          )}
        </div>
        <p className="text-sm text-slate-400 mt-0.5">{message}</p>
      </div>

      <Icon size={40} className={`${iconClass} shrink-0`} />
    </div>
  );
}

// ─── Tela principal ───────────────────────────────────────────────────────────
export default function Results() {
  const [cssAnswers, setCssAnswers] = useState({});
  const [jsAnswers, setJsAnswers] = useState({});

  useEffect(() => {
    let css = null;
    let js = null;
    try {
      css = localStorage.getItem("quiz-css-answers");
      js = localStorage.getItem("quiz-js-answers");
    } catch {
      // Se der erro ao acessar localStorage, ignora
    }
    // Evita renderização em cascata usando microtask
    if (css) Promise.resolve().then(() => setCssAnswers(JSON.parse(css)));
    if (js) Promise.resolve().then(() => setJsAnswers(JSON.parse(js)));
  }, []);

  const cssScore = CSS_QUESTIONS.filter(
    (q) => cssAnswers[q.id] === q.correct,
  ).length;
  const jsScore = JS_QUESTIONS.filter(
    (q) => jsAnswers[q.id] === q.correct,
  ).length;

  return (
    <div className="py-8 px-8 md:px-16 bg-slate-950 min-h-dvh">
      <BackButton />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-50 flex items-center gap-3 mb-1">
          Resultados
          <IconCheckupList size={28} className="text-green-500" />
        </h1>
        <p className="text-slate-500 text-sm">Resumo das suas respostas</p>
      </div>

      <div className="max-w-4xl flex flex-col gap-5">
        <OverallSummary cssScore={cssScore} jsScore={jsScore} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <QuizResultCard
            title="Quiz CSS"
            Icon={IconFileTypeCss}
            questions={CSS_QUESTIONS}
            answers={cssAnswers}
            color="purple"
          />
          <QuizResultCard
            title="Quiz JavaScript"
            Icon={IconBrandJavascript}
            questions={JS_QUESTIONS}
            answers={jsAnswers}
            color="yellow"
          />
        </div>
      </div>
    </div>
  );
}
