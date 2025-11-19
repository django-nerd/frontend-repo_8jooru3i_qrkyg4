import React, { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you within 24 hours.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-3 text-slate-300">Tell me about your project and I’ll follow up with a tailored plan and quote.</p>
            <ul className="mt-6 space-y-2 text-slate-300">
              <li>• Quick turnaround</li>
              <li>• Clear communication</li>
              <li>• Long-term support available</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:ring-emerald-400 outline-none" placeholder="Your name" required />
              <input type="email" className="w-full rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:ring-emerald-400 outline-none" placeholder="Email address" required />
            </div>
            <input className="w-full rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:ring-emerald-400 outline-none" placeholder="Project type (e.g., website, redesign)" />
            <textarea rows="4" className="w-full rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:ring-emerald-400 outline-none" placeholder="Tell me about your goals"></textarea>
            <button className="w-full rounded-lg bg-emerald-500 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition">Send message</button>
            {status && <p className="text-emerald-300 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
