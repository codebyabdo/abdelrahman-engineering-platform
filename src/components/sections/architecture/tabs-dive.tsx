"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { tabsDiveContent } from "@/lib/constants/tabsDiveContent";

type TabId =
  | "structure"
  | "state"
  | "performance"
  | "testing";

const colorClasses = {
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
} as const;

export function TabsDive() {
  const [activeTab, setActiveTab] = useState<TabId>("structure");

  return (
    <div className="space-y-6">
      <div className="no-scrollbar flex items-center gap-3 overflow-x-auto border-b border-white/10 pb-2 font-mono text-xs">
        {tabsDiveContent.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as TabId)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "border border-white/10 bg-white/[0.03] text-white/50 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-6 rounded-2xl border border-white/10 bg-[#080808] p-8">
        {activeTab === "structure" && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                {tabsDiveContent.structure.title}
              </h3>

              <p className="text-xs text-white/50">
                {tabsDiveContent.structure.description}
              </p>
            </div>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black p-6 font-mono text-xs leading-relaxed text-blue-400">
              {tabsDiveContent.structure.code}
            </pre>
          </div>
        )}

        {activeTab === "state" && (
          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tight text-white">
              {tabsDiveContent.state.title}
            </h3>

            <div className="grid grid-cols-1 gap-6 text-xs text-white/70 md:grid-cols-2">
              {tabsDiveContent.state.cards.map((card) => (
                <div
                  key={card.title}
                  className="space-y-2 rounded-xl border border-white/5 bg-white/[0.02] p-5"
                >
                  <h4
                    className={`font-mono text-sm font-bold uppercase tracking-wider ${
                      colorClasses[card.color]
                    }`}
                  >
                    {card.title}
                  </h4>

                  <p className="leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "performance" && (
          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tight text-white">
              {tabsDiveContent.performance.title}
            </h3>

            <ul className="space-y-3 text-xs text-white/70">
              {tabsDiveContent.performance.rules.map((rule) => (
                <li
                  key={rule.title}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />

                  <div>
                    <strong className="text-white">
                      {rule.title}:
                    </strong>{" "}
                    {rule.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "testing" && (
          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tight text-white">
              {tabsDiveContent.testing.title}
            </h3>

            <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-3">
              {tabsDiveContent.testing.cards.map((card) => (
                <div
                  key={card.title}
                  className="space-y-2 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <div
                    className={`font-mono font-bold uppercase tracking-wider ${
                      colorClasses[card.color]
                    }`}
                  >
                    {card.title}
                  </div>

                  <p className="text-white/50">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}