import { CheckCircle, LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeaturesGrid({ features, columns = 3 }: FeaturesGridProps) {
  const colClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
      ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${colClass} gap-5`}>
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.title}
            className="card-hover p-5 rounded-xl bg-slate-900 border border-slate-800 flex gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
              <Icon size={20} className="text-indigo-400" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-1">{f.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{f.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
