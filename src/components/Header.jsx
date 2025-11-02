import React, { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // initialize from system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = document.documentElement.classList.contains('dark') || prefersDark;
    setDark(initial);
    if (initial) document.documentElement.classList.add('dark');
  }, []);

  const toggleDark = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur bg-white/70 dark:bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg" onClick={(e)=>handleNavClick(e,'#home')}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">MyPortfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleNavClick(e,item.href)}
                className="text-sm hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="ml-2 rounded-full p-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="rounded-full p-2 bg-black/5 dark:bg-white/10"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleNavClick(e,item.href)}
                className="block py-2 text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
