import React from 'react';
import { motion } from 'framer-motion';
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

function TimelineCard({ item }) {
  return (
    <div className="rounded-2xl border border-emerald-200/70 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-3">
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
      </div>
      <p className="mt-3 text-sm leading-relaxed text-emerald-900/80">{item.desc}</p>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900">Experience</h2>
          <span className="text-sm text-emerald-900/60">a path through the meadow</span>
        </div>

        <div className="relative">
          {/* Center rail */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent md:block" style={{ width: 2 }} />

          <ul className="space-y-8">
            {items.map((it, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li key={it.role} className="relative">
                  {/* Dot on the rail */}
                  <div className="pointer-events-none absolute left-1/2 top-9 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-emerald-600 ring-4 ring-emerald-200/70 md:top-1/2 md:-translate-y-1/2" />

                  <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
                    {/* Left column */}
                    <div className={`relative ${isLeft ? 'md:pr-12 md:order-none' : 'md:order-2 md:pl-12'}`}>
                      {isLeft && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                          <TimelineCard item={it} />
                        </motion.div>
                      )}

                      {/* Connector from rail to card */}
                      {isLeft && (
                        <div className="pointer-events-none absolute right-0 top-1/2 hidden h-0.5 w-10 -translate-y-1/2 bg-emerald-300 md:block" />
                      )}
                    </div>

                    {/* Right column */}
                    <div className={`relative ${isLeft ? 'md:order-2 md:pl-12' : 'md:order-none md:pr-12'}`}>
                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                          <TimelineCard item={it} />
                        </motion.div>
                      )}

                      {/* Connector from rail to card */}
                      {!isLeft && (
                        <div className="pointer-events-none absolute left-0 top-1/2 hidden h-0.5 w-10 -translate-y-1/2 bg-emerald-300 md:block" />
                      )}
                    </div>
                  </div>

                  {/* Mobile single-column: place card full width */}
                  <div className="md:hidden">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      <TimelineCard item={it} />
                    </motion.div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Start/End caps */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-400 md:block" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-200 md:block" />
        </div>
      </div>
    </section>
  );
}
