import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Hero() {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, amount: 0.5 });
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });

  useEffect(() => {
    if (inView) {
      const targets = { projects: 50, clients: 20, years: 7 };
      const duration = 1500;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / duration);
        setCounters({
          projects: Math.round(p * targets.projects),
          clients: Math.round(p * targets.clients),
          years: Math.round(p * targets.years),
        });
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [inView]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b12]/40 to-[#0b0b12] mix-blend-soft-light" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span className="block text-white">Your Name</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">Product Designer & Frontend Engineer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 max-w-xl text-lg text-white/80"
          >
            I craft delightful, high-performance digital experiences that connect brands with people.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/30 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              Let's Work Together <ArrowRight size={18} />
            </button>
            <a
              href="#projects"
              onClick={(e)=>{e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'});}}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20"
            >
              View Portfolio
            </a>
          </motion.div>

          <div ref={statsRef} className="mt-10 grid grid-cols-3 gap-6 text-white/90">
            <Stat label="Projects" value={`${counters.projects}+`} />
            <Stat label="Happy Clients" value={`${counters.clients}+`} />
            <Stat label="Years Experience" value={`${counters.years}+`} />
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/30 hover:opacity-90"
        aria-label="Let's Work Together"
      >
        Let's Work Together
      </button>

      <style>{`
        /* Animated grainy gradient backdrop for subtle motion */
        @keyframes gradientMove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .animated-gradient { background: radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.25), transparent), radial-gradient(1200px 600px at 90% 90%, rgba(56,189,248,0.25), transparent); background-size: 200% 200%; animation: gradientMove 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md ring-1 ring-white/15">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );
}
