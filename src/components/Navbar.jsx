import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur-lg px-4 py-3">
          <a href="#home" className="text-white font-semibold tracking-tight">Subhan Irfan</a>
          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg bg-emerald-500 px-4 py-2 text-white text-sm font-medium shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition">Hire Me</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
