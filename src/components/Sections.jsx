import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code, Brush, Star, Send, Linkedin, Github, Twitter, Instagram, Calendar } from 'lucide-react';

export default function Sections() {
  return (
    <div className="relative">
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-10">
      {eyebrow && (
        <div className="mb-2 text-xs uppercase tracking-widest text-violet-400">{eyebrow}</div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-sky-400">{title}</span>
      </h2>
      {subtitle && <p className="mt-3 text-white/70 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function About() {
  const skills = [
    { name: 'React / Next.js', level: 90 },
    { name: 'UI/UX & Prototyping', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Framer Motion', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Design Systems', level: 80 },
  ];
  const timeline = [
    { year: '2024', title: 'Senior Frontend Engineer', place: 'TechLabs' },
    { year: '2022', title: 'Product Designer', place: 'Studio Pixel' },
    { year: '2020', title: 'B.S. in Computer Science', place: 'State University' },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="Designer-engineer crafting delightful products"
          subtitle="Blending interaction design with modern engineering to ship polished, performant experiences."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500/30 to-sky-500/30 ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-white/80">
              I help teams go from concept to launch — designing intuitive interfaces and building them with
              scalable, accessible code.
            </p>
            <div className="mt-8 space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-white/80">{s.name}</span>
                    <span className="text-white/60">{s.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-sky-500"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-semibold tracking-wide text-white/70">Experience</h3>
              <ol className="mt-4 relative border-l border-white/10 space-y-6">
                {timeline.map((t, idx) => (
                  <li key={idx} className="ml-4">
                    <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-sky-500" />
                    <div className="text-sm text-white/60">{t.year}</div>
                    <div className="font-medium">{t.title}</div>
                    <div className="text-white/60 text-sm">{t.place}</div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-8">
              <a
                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const allProjects = useMemo(() => ([
    {
      id: 1,
      title: 'Fintech Dashboard',
      category: 'Development',
      description: 'Real-time analytics platform with stunning visuals.',
      thumbnail: 'https://images.unsplash.com/photo-1551281044-8b29efa5ff43?q=80&w=1200&auto=format&fit=crop',
      details: {
        challenge: 'Deliver insights across millions of events quickly.',
        solution: 'Optimized data pipeline and virtualized charts for 60fps.',
        tech: ['React', 'Recharts', 'Tailwind', 'Node.js'],
        results: '30% increase in user engagement and faster decisions.',
        images: [
          'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
        ],
      },
    },
    {
      id: 2,
      title: 'Branding System',
      category: 'Branding',
      description: 'A cohesive identity with motion guidelines.',
      thumbnail: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0f3?q=80&w=1200&auto=format&fit=crop',
      details: {
        challenge: 'Unify visual language across platforms.',
        solution: 'Modular tokens and typography scales.',
        tech: ['Figma', 'After Effects'],
        results: 'Consistent brand recall and production speed.',
        images: [
          'https://images.unsplash.com/photo-1524275539700-cf51138f6795?q=80&w=1200&auto=format&fit=crop',
        ],
      },
    },
    {
      id: 3,
      title: 'Marketing Site',
      category: 'Web Design',
      description: 'High-converting landing pages with A/B tests.',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      details: {
        challenge: 'Increase signups without hurting performance.',
        solution: 'Refined IA, persuasive copy, image optimization.',
        tech: ['Next.js', 'Framer Motion'],
        results: '2.3x conversion uplift with sub-second LCP.',
        images: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        ],
      },
    },
  ]), []);

  const categories = ['All', 'Web Design', 'Development', 'Branding'];
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const projects = allProjects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="A mix of product design, development, and brand systems."
        />

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === c
                  ? 'border-transparent bg-gradient-to-r from-violet-500 to-sky-500 text-white'
                  : 'border-white/20 text-white/80 hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${p.thumbnail})` }}
              />
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70 line-clamp-2">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-white/50">{p.category}</span>
                  <button
                    onClick={() => setActive(p)}
                    className="text-sm font-medium text-violet-300 hover:text-violet-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />)
      }
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const images = project.details.images;

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl bg-[#0b0b12] ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h3 className="font-semibold">{project.title}</h3>
          <button onClick={onClose} className="text-white/60 hover:text-white">Close</button>
        </div>
        <div className="p-4 grid gap-6 lg:grid-cols-2">
          <div>
            <div
              className="aspect-video w-full rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${images[index]})` }}
            />
            <div className="mt-3 flex items-center justify-between text-sm text-white/70">
              <button
                onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                className="rounded-md border border-white/20 px-3 py-1 hover:bg-white/10"
              >
                Prev
              </button>
              <div>
                {index + 1} / {images.length}
              </div>
              <button
                onClick={() => setIndex((i) => (i + 1) % images.length)}
                className="rounded-md border border-white/20 px-3 py-1 hover:bg-white/10"
              >
                Next
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <Info label="Challenge" text={project.details.challenge} />
            <Info label="Solution" text={project.details.solution} />
            <Info label="Technologies" text={project.details.tech.join(', ')} />
            <Info label="Results" text={project.details.results} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, text }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-white/50">{label}</div>
      <div className="mt-1 text-white/90">{text}</div>
    </div>
  );
}

function Services() {
  const services = [
    { icon: <Rocket />, title: 'Product Strategy', desc: 'Shape your roadmap and validate quickly.' },
    { icon: <Brush />, title: 'UI/UX Design', desc: 'Design systems, prototypes, and usability.' },
    { icon: <Code />, title: 'Frontend Engineering', desc: 'Accessible, performant web apps.' },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="How I can help"
          subtitle="Flexible engagement from quick sprints to end‑to‑end delivery."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-sky-500 text-white">
                {s.icon}
              </div>
              <div className="font-semibold">{s.title}</div>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Pricing />
          <ServiceInquiryForm />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$1,500+', features: ['Landing page', 'Basic SEO', '1 revision'] },
    { name: 'Pro', price: '$4,500+', features: ['Multi-page site', 'SEO + Analytics', '3 revisions'] },
    { name: 'Custom', price: 'Get a quote', features: ['Bespoke scope', 'Design system', 'Ongoing support'] },
  ];
  return (
    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
      <div className="mb-6 text-lg font-semibold">Pricing</div>
      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-xl border border-white/10 p-4">
            <div className="text-sm text-white/60">{t.name}</div>
            <div className="mt-1 text-2xl font-bold">{t.price}</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              {t.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceInquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', service: 'UI/UX Design', budget: '2k-5k', description: '' });
  const [msg, setMsg] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) {
      setMsg('Please fill out required fields.');
      return;
    }
    setMsg('Thanks! I will reach out shortly.');
  };
  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
      <div className="mb-4 text-lg font-semibold">Service inquiry</div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
        <input className="rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10" placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
        <select className="rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10" value={form.service} onChange={(e)=>setForm({...form, service:e.target.value})}>
          <option>UI/UX Design</option>
          <option>Frontend Engineering</option>
          <option>Product Strategy</option>
        </select>
        <select className="rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10" value={form.budget} onChange={(e)=>setForm({...form, budget:e.target.value})}>
          <option>Under 2k</option>
          <option>2k-5k</option>
          <option>5k-10k</option>
          <option>10k+</option>
        </select>
        <textarea className="sm:col-span-2 min-h-[120px] rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10" placeholder="Project description" value={form.description} onChange={(e)=>setForm({...form, description:e.target.value})} />
      </div>
      {msg && <div className="mt-3 text-sm text-white/80">{msg}</div>}
      <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-5 py-2 font-medium text-white"><Send size={16}/> Submit</button>
    </form>
  );
}

function Testimonials() {
  const items = [
    { name: 'Alex Johnson', role: 'PM at Lumina', rating: 5, quote: 'Delivered beyond expectations — thoughtful, pixel‑perfect, and fast.' },
    { name: 'Priya Patel', role: 'Founder at Orbital', rating: 5, quote: 'A rare hybrid of design and engineering. Our product finally shines.' },
    { name: 'Daniel Kim', role: 'CTO at North', rating: 4, quote: 'Great communicator and strong on performance budgets.' },
  ];
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setIdx((i) => (i + 1) % items.length), 3500);
    return () => clearInterval(intervalRef.current);
  }, [items.length]);

  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Social proof" title="What clients say" />
        <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
          <div className="flex" style={{ transform: `translateX(-${idx * 100}%)`, transition: 'transform 500ms' }}>
            {items.map((t, i) => (
              <div key={i} className="min-w-full p-8">
                <div className="mx-auto max-w-3xl text-center">
                  <div className="mb-3 flex items-center justify-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, j) => <Star key={j} fill="currentColor" size={18} />)}
                  </div>
                  <blockquote className="text-xl text-white/90">“{t.quote}”</blockquote>
                  <div className="mt-3 text-sm text-white/60">{t.name} • {t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus('Please fill required fields.'); return; }
    setStatus('Message sent! Thanks for reaching out.');
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contact" title="Let’s build something great" />
        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={submit} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
              <input className="rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10" placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
              <input className="sm:col-span-2 rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10" placeholder="Subject" value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} />
              <textarea className="sm:col-span-2 min-h-[140px] rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
            </div>
            {status && <div className="mt-3 text-sm text-white/80">{status}</div>}
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-6 py-3 font-medium text-white"><Send size={16}/> Send message</button>
          </form>
          <div className="flex flex-col justify-between rounded-2xl bg-[radial-gradient(1000px_400px_at_20%_0%,rgba(124,58,237,0.15),transparent)] p-6 ring-1 ring-white/10">
            <div>
              <div className="text-lg font-semibold">Find me online</div>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Linkedin /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Github /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Twitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Instagram /></a>
              </div>
            </div>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white hover:bg-white/20"><Calendar size={16}/> Book a consultation</a>
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const submit = (e) => { e.preventDefault(); if (!email.includes('@')) { setMsg('Enter a valid email'); return; } setMsg('Subscribed!'); };
  return (
    <form onSubmit={submit} className="mt-6 flex gap-2">
      <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email" className="flex-1 rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10" />
      <button className="rounded-lg bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-2 text-white">Subscribe</button>
      {msg && <span className="ml-2 self-center text-sm text-white/70">{msg}</span>}
    </form>
  );
}
