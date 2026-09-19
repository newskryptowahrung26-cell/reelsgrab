"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

export default function FaqSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-medium text-white text-sm leading-snug">{faq.q}</span>
            <ChevronDown
              size={18}
              className={`text-slate-400 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
