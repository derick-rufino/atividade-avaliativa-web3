import {
  IconFileTypeCss,
  IconBrandJavascript,
  IconCheckupLis,
  IconCheckupList,
} from "@tabler/icons-react";

const icons = {
  iconFileTypeCss: IconFileTypeCss,
  iconBrandJavascript: IconBrandJavascript,
  iconCheckupList: IconCheckupList,
};

export default function QuizCard({ title, description, icon }) {
  const Icon = icons[icon];

  return (
    <div className="quiz-card bg-slate-800 rounded-xl p-6 h-100">
      {Icon && <Icon className="w-12 h-12 mb-4 text-amber-400" />}
      <h3 className="text-xl font-semibold text-slate-50 mb-2">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
    </div>
  );
}
