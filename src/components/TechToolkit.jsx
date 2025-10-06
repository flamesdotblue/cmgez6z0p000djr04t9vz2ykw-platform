import React from 'react';

const tools = [
  { name: 'React', desc: 'components & hooks' },
  { name: 'TypeScript', desc: 'types that guide' },
  { name: 'Tailwind', desc: 'utility‑first styling' },
  { name: 'Framer Motion', desc: 'gentle animation' },
  { name: 'Vite', desc: 'blazing dev' },
  { name: 'Node', desc: 'tooling & scripts' },
];

export default function TechToolkit() {
  return (
    <section id="toolkit" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items/end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900">Tech toolkit</h2>
          <span className="text-sm text-emerald-900/60">crafted with care</span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div key={t.name} className="group rounded-2xl border border-emerald-200/60 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:shadow-[0_12px_30px_-12px_rgba(16,185,129,0.45)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100 text-emerald-800 ring-1 ring-emerald-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <div>
                  <h3 className="font-medium text-emerald-900">{t.name}</h3>
                  <p className="text-sm text-emerald-900/70">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
