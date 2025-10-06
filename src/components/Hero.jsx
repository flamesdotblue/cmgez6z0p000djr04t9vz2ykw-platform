import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-semibold tracking-tight text-emerald-900 sm:text-5xl"
          >
            Whimsical Web Craft
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 max-w-prose text-lg text-emerald-900/80"
          >
            I’m a front‑end engineer creating serene, Ghibli‑inspired interfaces—soft gradients, gentle motion, and thoughtful details.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 9 6 6-6 6"/><path d="M20 15H10a6 6 0 0 1-6-6V3"/></svg>
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/70 px-5 py-2.5 font-medium text-emerald-800 hover:border-emerald-400 hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
              Contact
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-square w-full max-w-md rounded-3xl border border-emerald-200/70 bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50 p-1 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.5)] md:ml-auto"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.15),transparent_60%),radial-gradient(circle_at_30%_70%,rgba(14,165,233,0.15),transparent_55%)]" />
            <div className="relative flex h-full w-full items-center justify-center rounded-[22px]">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-40 w-40"
              >
                <div className="absolute inset-0 rounded-full bg-white/90 shadow-lg" />
                <div className="absolute inset-0 rounded-full ring-4 ring-emerald-200/60" />
                <div className="absolute left-10 top-12 h-2 w-2 rounded-full bg-slate-800" />
                <div className="absolute right-10 top-12 h-2 w-2 rounded-full bg-slate-800" />
                <div className="absolute left-1/2 top-[60%] h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-700/80" />
              </motion.div>
            </div>
          </motion.div>

          <motion.svg
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pointer-events-none absolute -left-10 -top-8 h-24 w-36 text-sky-200"
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
            className="pointer-events-none absolute -right-6 bottom-0 h-20 w-32 text-sky-200"
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
