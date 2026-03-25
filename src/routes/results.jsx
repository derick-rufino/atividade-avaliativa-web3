import { IconCheckupList } from "@tabler/icons-react";

export default function Results() {
  return (
    <div className="quiz-react p-8 bg-slate-950 min-h-dvh">
      <h1 className="text-3xl font-bold text-slate-50 mb-4">
        Resultados <IconCheckupList className="inline text-green-500" />
      </h1>
      <p className="text-slate-400">Resultados</p>
    </div>
  );
}
