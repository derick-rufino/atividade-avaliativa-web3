import { Link } from "react-router";
import { IconArrowLeft } from "@tabler/icons-react";

export default function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors font-medium mb-4"
    >
      <IconArrowLeft className="inline" />
      Voltar para o início
    </Link>
  );
}
