import React from 'react';

const tools = [
  { name: 'React', desc: 'components & hooks', icon: 'https://icon.icepanel.io/Technology/svg/React.svg' },
  { name: 'TypeScript', desc: 'types that guide', icon: 'https://icon.icepanel.io/Technology/svg/TypeScript.svg' },
  { name: 'Tailwind CSS', desc: 'utility‑first styling', icon: 'https://icon.icepanel.io/Technology/svg/TailwindCSS.svg' },
  { name: 'Framer Motion', desc: 'gentle animation', icon: 'https://icon.icepanel.io/Technology/svg/Framer.svg' },
  { name: 'Vite', desc: 'blazing dev', icon: 'https://icon.icepanel.io/Technology/svg/Vite.svg' },
  { name: 'Node.js', desc: 'tooling & scripts', icon: 'https://icon.icepanel.io/Technology/svg/Node.js.svg' },
];

export default function TechToolkit() {
  return (
    <section id="toolkit" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-100">Tech toolkit</h2>
          <span className="text-sm text-emerald-200/60">crafted with care</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div
              key={t.name}
              className="group flex items-start gap-4 rounded-2xl border border-emerald-900/70 bg-slate-900/60 p-5 shadow-sm backdrop-blur transition hover:shadow-[0_12px_30px_-12px_rgba(16,185,129,0.45)]"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-950 to-slate-950 ring-1 ring-emerald-900">
                <img
                  src={t.icon}
                  alt={`${t.name} icon`}
                  width={28}
                  height={28}
                  className="h-7 w-7 select-none"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <h3 className="truncate font-medium text-emerald-100">{t.name}</h3>
                <p className="text-sm text-emerald-200/70">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
