import { useNavigate } from "react-router";

export default function QuestionCard({ q, selected, onAnswer }) {
  return (
    <div
      className="question mb-6 bg-slate-800 p-6 rounded-xl min-w-150 max-w-150 flex flex-col gap-5"
      id={`q${q.id}`}
    >
      <h2 className="text-xl font-semibold text-slate-50">{q.question}</h2>
      <ul className="space-y-2">
        {q.options.map((option) => (
          <li
            key={option.id}
            className="flex items-center gap-2 bg-slate-900 p-4 rounded-lg"
          >
            <input
              type="radio"
              id={`${q.id}-${option.id}`}
              name={`question-${q.id}`}
              value={option.id}
              checked={selected === option.id}
              onChange={() => onAnswer(option.id)}
              className="appearance-none min-w-5 min-h-5 aspect-square border-2 border-slate-400 rounded-sm checked:bg-amber-400 checked:border-amber-400 cursor-pointer"
            />
            <label
              htmlFor={`${q.id}-${option.id}`}
              className="text-slate-400 cursor-pointer"
            >
              {option.label}
            </label>
          </li>
        ))}
      </ul>
      <button
        className="bg-cyan-600 hover:opacity-70 text-slate-900 font-semibold py-2 px-8 rounded-lg transition-colors w-fit self-end cursor-pointer"
        onClick={() =>
          document.getElementById(`q${q.id + 1}`)?.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
          })
        }
      >
        {q.id < 5 ? "Próximo" : "Finalizar"}
      </button>
    </div>
  );
}
