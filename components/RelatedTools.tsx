import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedTool {
  label: string;
  href: string;
  description: string;
  emoji: string;
}

export default function RelatedTools({ tools }: { tools: RelatedTool[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tools.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className="card-hover group p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3"
        >
          <span className="text-2xl">{t.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white text-sm group-hover:text-indigo-400 transition-colors truncate">
              {t.label}
            </p>
            <p className="text-xs text-slate-500 truncate">{t.description}</p>
          </div>
          <ArrowRight size={16} className="text-slate-600 group-hover:text-indigo-400 flex-shrink-0 transition-colors" />
        </Link>
      ))}
    </div>
  );
}
