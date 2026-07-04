import React from "react";
import { Check, Droplets, Gauge, Sparkles } from "lucide-react";

const PACKAGES = [
  {
    icon: Droplets,
    name: "Maintenance",
    price: "$399 / yr",
    features: ["Synthetic oil & filter service", "Multi-point inspection", "Fluid top-ups", "Tire rotation & balance"],
  },
  {
    icon: Gauge,
    name: "Performance",
    price: "$899 / yr",
    featured: true,
    features: ["Everything in Maintenance", "Brake system service", "Alignment & suspension check", "Dyno diagnostic report", "Priority booking"],
  },
  {
    icon: Sparkles,
    name: "Detailing",
    price: "$649 / yr",
    features: ["Quarterly full detail", "Ceramic coating refresh", "Paint correction touch-ups", "Interior deep clean"],
  },
];

export default function Service() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-6">
      <div className="mb-12 border-b border-steel pb-6">
        <span className="text-ochre font-mono-tech text-sm uppercase tracking-widest">Ownership</span>
        <h1 className="text-5xl font-black mt-2">Service Packages</h1>
        <p className="text-foreground/70 mt-2 max-w-2xl">Keep your machine at its apex. Prepaid service plans handled by marque-certified technicians.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PACKAGES.map((p) => (
          <div key={p.name} className={`p-8 border ${p.featured ? "border-ochre" : "border-steel"} bg-[#111214]`}>
            <p.icon className="w-8 h-8 text-ochre" />
            <h3 className="text-2xl font-bold mt-5 text-alabaster">{p.name}</h3>
            <p className="font-mono-tech text-3xl font-semibold text-ochre mt-2">{p.price}</p>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-alabaster/80">
                  <Check className="w-4 h-4 text-ochre shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full block text-center py-3 font-semibold transition-colors ${
              p.featured ? "bg-ochre text-obsidian hover:bg-ochre/90" : "border border-steel text-alabaster hover:border-ochre"
            }`}>
              Book Service
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}