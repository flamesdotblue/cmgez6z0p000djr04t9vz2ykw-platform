import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-semibold tracking-tight text-emerald-100 sm:text-5xl"
          >
            Serene Front‑end, Ghibli‑inspired
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 max-w-prose text-lg text-emerald-100/75"
          >
            Building calm, atmospheric interfaces with soft motion, hand‑painted vibes, and a focus on accessibility and performance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 font-medium text-white shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              <Sparkles className="h-5 w-5" />
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-emerald-800 bg-slate-950/70 px-5 py-2.5 font-medium text-emerald-100 hover:border-emerald-600 hover:bg-slate-900">
              Contact
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-square w-full max-w-md rounded-3xl border border-emerald-900/60 bg-gradient-to-br from-slate-900/80 via-emerald-950/70 to-sky-950/70 p-1 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.45)] md:ml-auto"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_70%,rgba(56,189,248,0.16),transparent_55%)]" />
            <div className="relative flex h-full w-full items-center justify-center rounded-[22px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-40 w-40"
              >
                <div className="absolute inset-0 rounded-full bg-slate-100/90 shadow-lg" />
                <div className="absolute inset-0 rounded-full ring-4 ring-emerald-700/60" />
                <div className="absolute left-10 top-12 h-2 w-2 rounded-full bg-slate-900" />
                <div className="absolute right-10 top-12 h-2 w-2 rounded-full bg-slate-900" />
                <div className="absolute left-1/2 top-[60%] h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-800/80" />
              </motion.div>
            </div>
          </motion.div>

          <motion.svg
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pointer-events-none absolute -left-10 -top-8 h-24 w-36 text-sky-200/20"
            viewBox="0 0 200 100"
          >
            <g fill="currentColor">
              <circle cx="40" cy="60" r="20" />
              <circle cx="65" cy="55" r="25" />
              <circle cx="95" cy="60" r="22" />
              <rect x="30" y="60" width="80" height="18" rx="9" />
            </g>
          </motion.svg>
          <motion.svg
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pointer-events-none absolute -right-6 bottom-0 h-20 w-32 text-sky-200/20"
            viewBox="0 0 200 100"
          >
            <g fill="currentColor">
              <circle cx="50" cy="50" r="18" />
              <circle cx="75" cy="45" r="22" />
              <circle cx="100" cy="50" r="18" />
              <rect x="40" y="50" width="70" height="16" rx="8" />
            </g>
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
