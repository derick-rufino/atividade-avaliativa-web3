import {
  IconFileTypeCss,
  IconBrandJavascript,
  IconBrandReact,
} from "@tabler/icons-react";

export default function QuizCard({ title, description, icon }) {
  return (
    <div className="quiz-card bg-slate-800 rounded-xl p-6">
      <IconFileTypeCss
        className={`w-12 h-12 mb-4 ${icon === "iconFileTypeCss" ? "block" : "hidden"} text-amber-400`}
      />
      <IconBrandJavascript
        className={`w-12 h-12 mb-4 ${icon === "iconBrandJavascript" ? "block" : "hidden"} text-amber-400`}
      />
      <IconBrandReact
        className={`w-12 h-12 mb-4 ${icon === "iconBrandReact" ? "block" : "hidden"} text-amber-400`}
      />
      <h3 className="text-xl font-semibold text-slate-50 mb-2">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
    </div>
  );
}
