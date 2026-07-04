import React from "react";
import { ShieldCheck, Clock, Wrench, Globe, Check } from "lucide-react";

const TIERS = [
  {
    name: "Essential",
    price: "Included",
    term: "12 months / 12,000 mi",
    features: ["Powertrain coverage", "24/7 roadside assistance", "Nationwide dealer network", "Transferable to next owner"],
  },
  {
    name: "Apex Shield",
    price: "$2,400",
    term: "36 months / 36,000 mi",
    featured: true,
    features: ["Comprehensive bumper-to-bumper", "Electronics & infotainment", "Trip interruption coverage", "Loaner vehicle included", "Zero deductible"],
  },
  {
    name: "Signature",
    price: "$4,900",
    term: "60 months / Unlimited mi",
    features: ["Everything in Apex Shield", "Cosmetic & wheel protection", "Concierge repair pickup", "Global coverage", "Priority service lane"],
  },
];

const PERKS = [
  { icon: ShieldCheck, title: "150-Point Certified", text: "Every vehicle passes our forensic inspection before delivery." },
  { icon: Clock, title: "Fast Claims", text: "Most claims approved within 24 hours, no runaround." },
  { icon: Wrench, title: "Factory-Trained", text: "Repairs performed only by marque-certified technicians." },
  { icon: Globe, title: "Nationwide", text: "Coverage honored at authorized partners across the country." },
];

export default function Warranty() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-6">
      <div className="mb-12 border-b border-steel pb-6">
        <span className="text-ochre font-mono-tech text-sm uppercase tracking-widest">Ownership</span>
        <h1 className="text-5xl font-black mt-2">Warranty</h1>
        <p className="text-foreground/70 mt-2 max-w-2xl">Protection engineered to match the machine. Drive with total peace of mind.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {PERKS.map((p) => (
          <div key={p.title} className="p-6 bg-[#111214] border border-steel">
            <p.icon className="w-6 h-6 text-ochre mb-4" />
            <h3 className="font-bold text-alabaster">{p.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {TIERS.map((t) => (
          <div key={t.name} className={`p-8 border ${t.featured ? "border-ochre bg-[#111214]" : "border-steel bg-[#111214]"}`}>
            {t.featured && (
              <span className="font-mono-tech text-[10px] uppercase tracking-widest text-obsidian bg-ochre px-2 py-1">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold text-alabaster mt-4">{t.name}</h3>
            <p className="font-mono-tech text-3xl font-semibold text-ochre mt-3">{t.price}</p>
            <p className="font-mono-tech text-xs text-foreground/70 mt-1">{t.term}</p>
            <ul className="mt-6 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-alabaster/80">
                  <Check className="w-4 h-4 text-ochre shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full block text-center py-3 font-semibold transition-colors ${
              t.featured ? "bg-ochre text-obsidian hover:bg-ochre/90" : "border border-steel text-alabaster hover:border-ochre"
            }`}>
              Enquire
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}