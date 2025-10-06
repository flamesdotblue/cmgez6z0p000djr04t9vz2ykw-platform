import React from 'react';
import { motion } from 'framer-motion';

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

function TimelineCard({ item }) {
  return (
    <div className="rounded-2xl border border-emerald-900/70 bg-slate-900/60 p-5 shadow-sm backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="font-semibold text-emerald-100">{item.role}</h3>
          <p className="text-sm text-emerald-200/70">{item.org}</p>
        </div>
        <span className="rounded-full bg-emerald-900/60 px-3 py-1 text-xs font-medium text-emerald-100 ring-1 ring-emerald-800">{item.period}</span>
      </div>
      <p className="mt-3 text-emerald-200/80">{item.desc}</p>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-100">Experience timeline</h2>
          <span className="text-sm text-emerald-200/60">journey so far</span>
        </div>

        <ul className="space-y-10">
          {items.map((it) => (
            <li key={it.role} className="relative">
              <div className="grid grid-cols-[32px_1fr] items-start gap-4">
                <div className="relative h-full">
                  <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-emerald-700 via-emerald-800 to-transparent" />
                  <div className="absolute left-1/2 top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-emerald-400 ring-4 ring-emerald-900/70" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <TimelineCard item={it} />
                </motion.div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
