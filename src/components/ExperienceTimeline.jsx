import React from 'react';
import { Briefcase, Building2, Calendar } from 'lucide-react';

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
  },
  {
    role: 'Intern, Web',
    org: 'Aurora Digital',
    period: '2018 — 2019',
    desc: 'Learned the ropes, shipped UI polish, and embraced performance budgets.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900">Experience</h2>
          <span className="text-sm text-emerald-900/60">selected roles</span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.role} className="rounded-2xl border border-emerald-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-[0_18px_40px_-20px_rgba(16,185,129,0.45)]">
              <header className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-emerald-900">
                    <Briefcase className="h-4 w-4" />
                    <h3 className="truncate text-base font-semibold">{item.role}</h3>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-emerald-900/80">
                    <Building2 className="h-4 w-4" />
                    <span className="truncate">{item.org}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.period}
                </span>
              </header>
              <p className="mt-4 text-sm leading-relaxed text-emerald-900/80">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
