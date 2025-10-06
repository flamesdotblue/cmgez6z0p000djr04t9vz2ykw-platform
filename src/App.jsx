import React from 'react';
import Hero from './components/Hero';
import TechToolkit from './components/TechToolkit';
import ProjectsShowcase from './components/ProjectsShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-100 via-emerald-50 to-amber-50 text-slate-800">
      {/* Decorative sky elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute top-20 -right-16 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-amber-200/50 blur-3xl" />
      </div>

      <main className="relative">
        <Hero />
        <TechToolkit />
        <ProjectsShowcase />
        <ExperienceTimeline />

        {/* Contact Section */}
        <section id="contact" className="relative py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl border border-emerald-200/60 bg-white/60 p-8 shadow-[0_10px_40px_-20px_rgba(16,185,129,0.4)] backdrop-blur">
              <h2 className="text-3xl font-semibold tracking-tight text-emerald-900">Get in touch</h2>
              <p className="mt-3 max-w-prose text-emerald-900/80">
                I’m always excited to chat about front‑end craft, whimsical UI, and opportunities to build delightful experiences.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"></path><path d="m22 6-10 7L2 6"></path></svg>
                  Email me
                </a>
                <a
                  href="https://github.com/yourname"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/70 px-5 py-2.5 font-medium text-emerald-800 hover:border-emerald-400 hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.8s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.6 0C4 1.1 2.9 1.4 2.9 1.4A5 5 0 0 0 2.8 5.2 5.4 5.4 0 0 0 1.3 9c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"></path></svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/yourname/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/70 px-5 py-2.5 font-medium text-emerald-800 hover:border-emerald-400 hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative pb-10 text-center text-sm text-emerald-900/70">
        <p>© {new Date().getFullYear()} Your Name. Crafted with a gentle breeze.</p>
      </footer>
    </div>
  );
}

export default App;
