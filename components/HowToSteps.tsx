interface Step {
  title: string;
  description: string;
}

interface HowToStepsProps {
  steps: Step[];
}

export default function HowToSteps({ steps }: HowToStepsProps) {
  return (
    <ol className="space-y-5">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4 items-start">
          {/* Step number */}
          <div className="w-9 h-9 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
            {i + 1}
          </div>
          <div className="flex-1 p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p className="font-semibold text-white text-sm mb-1">{step.title}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
