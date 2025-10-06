import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Forest Folio',
    desc: 'A serene portfolio template with floating clouds and soft motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Breeze UI Kit',
    desc: 'Composable UI components inspired by hand‑painted skies.',
    tags: ['TypeScript', 'Design System'],
    link: '#',
  },
  {
    title: 'Spirited Notes',
    desc: 'Minimal notes app with focus‑calming animations.',
    tags: ['Vite', 'LocalStorage'],
    link: '#',
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900">Projects showcase</h2>
          <span className="text-sm text-emerald-900/60">selected works</span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-white/70 p-5 shadow-sm backdrop-blur"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50" />
                <motion.div
                  className="absolute -left-10 -top-6 h-28 w-40 rounded-full bg-sky-200/50 blur-2xl"
                  animate={{ x: [0, 15, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 right-6 h-16 w-16 rounded-full bg-emerald-200/60 blur-xl"
                  animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />
                <div className="absolute left-4 top-4 h-6 w-6 rounded-full bg-amber-300 shadow-inner" />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-emerald-900">{p.title}</h3>
                <p className="mt-1 text-sm text-emerald-900/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-emerald-200 bg-white/80 px-2.5 py-1 text-xs text-emerald-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-xs text-emerald-800 ring-1 ring-emerald-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 3 6 6-6-6z"/><path d="M10 14 21 3"/><path d="M15 3h6v6"/></svg>
                <span>open</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
