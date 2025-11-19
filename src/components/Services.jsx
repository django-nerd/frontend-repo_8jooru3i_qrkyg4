import React from 'react'
import { Code2, Palette, ShieldCheck, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Building responsive websites using HTML, CSS, JavaScript, and PHP.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Designing user-friendly interfaces with modern design trends.',
  },
  {
    icon: ShieldCheck,
    title: 'Website Maintenance',
    desc: 'Keeping websites updated, secure, and running smoothly.',
  },
  {
    icon: Briefcase,
    title: 'Freelance Consulting',
    desc: 'Helping startups and businesses plan, scope, and ship faster.',
  },
]

function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">End-to-end solutions from design to deployment, tailored to your goals.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-emerald-400/40 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
