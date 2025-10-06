import React from 'react';
import Hero from './components/Hero';
import TechToolkit from './components/TechToolkit';
import ProjectsShowcase from './components/ProjectsShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import { Mail, Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-emerald-950 to-sky-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute right-[-120px] top-1/4 h-[360px] w-[360px] rounded-full bg-sky-500/10 blur-[110px]" />
        <div className="absolute bottom-[-140px] left-10 h-[380px] w-[380px] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.04),transparent_25%)]" />
      </div>

      <main className="relative">
        <Hero />
        <TechToolkit />
        <ProjectsShowcase />
        <ExperienceTimeline />

        <section id="contact" className="relative py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl border border-emerald-800/60 bg-slate-900/60 p-8 shadow-[0_10px_40px_-20px_rgba(16,185,129,0.35)] backdrop-blur">
              <h2 className="text-3xl font-semibold tracking-tight text-emerald-100">Get in touch</h2>
              <p className="mt-3 max-w-prose text-emerald-100/70">
                I’m always excited to chat about front‑end craft, whimsical UI, and opportunities to build delightful experiences.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-5 py-2.5 font-medium text-white shadow hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <Mail className="h-5 w-5" />
                  Email me
                </a>
                <a
                  href="https://github.com/yourname"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-800 bg-slate-950/70 px-5 py-2.5 font-medium text-emerald-100 hover:border-emerald-600 hover:bg-slate-900"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/yourname/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-800 bg-slate-950/70 px-5 py-2.5 font-medium text-emerald-100 hover:border-emerald-600 hover:bg-slate-900"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative pb-10 text-center text-sm text-emerald-200/70">
        <p>© {new Date().getFullYear()} Your Name. Crafted under starry skies.</p>
      </footer>
    </div>
  );
}

export default App;
