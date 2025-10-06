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
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-100">Projects showcase</h2>
          <span className="text-sm text-emerald-200/60">selected works</span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-900/70 bg-slate-900/60 p-5 shadow-sm backdrop-blur"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-sky-950" />
                <motion.div
                  className="absolute -left-10 -top-6 h-28 w-40 rounded-full bg-sky-400/20 blur-2xl"
                  animate={{ x: [0, 15, 0], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 right-6 h-16 w-16 rounded-full bg-emerald-400/20 blur-xl"
                  animate={{ y: [0, -6, 0], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />
                <div className="absolute left-4 top-4 h-6 w-6 rounded-full bg-amber-300/60 shadow-inner" />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-emerald-100">{p.title}</h3>
                <p className="mt-1 text-sm text-emerald-200/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-emerald-900 bg-slate-950/60 px-2.5 py-1 text-xs text-emerald-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-1 text-xs text-emerald-200 ring-1 ring-emerald-900">
                <span>open</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
