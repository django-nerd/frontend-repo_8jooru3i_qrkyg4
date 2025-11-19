import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen w-full overflow-hidden flex items-center">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-200">Available for freelance projects</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            I craft modern, responsive websites that convert
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-200/90 max-w-2xl">
            Hi, I’m your full‑stack web partner. From concept to launch — design, development, and ongoing care in one place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition">
              Explore Services
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white font-medium ring-1 ring-white/15 hover:bg-white/15 transition">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
