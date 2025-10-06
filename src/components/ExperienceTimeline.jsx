import React from 'react';

const items = [
  {
    role: 'Senior Front‑end Engineer',
    org: 'Windvale Studio',
    period: '2023 — Present',
    desc: 'Leading design systems and motion patterns for calm, accessible UX.'
  },
  {
    role: 'UI Engineer',
    org: 'Sky Lantern Labs',
    period: '2021 — 2023',
    desc: 'Built delightful product surfaces with React and TypeScript.'
  },
  {
    role: 'Front‑end Developer',
    org: 'Meadow & Co.',
    period: '2019 — 2021',
    desc: 'Shipped marketing sites with performance‑minded animations.'
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight text-emerald-900">Experience timeline</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent" />
          <ul className="space-y-8">
            {items.map((it, idx) => (
              <li key={it.role} className="relative ml-10">
                <div className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-200/60" />
                <div className="rounded-2xl border border-emerald-200/60 bg-white/70 p-5 backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-emerald-900">{it.role}</h3>
                      <p className="text-sm text-emerald-900/70">{it.org}</p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200">{it.period}</span>
                  </div>
                  <p className="mt-3 text-emerald-900/80">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
