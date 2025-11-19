import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />

      {/* Simple Work section placeholder so nav works; can be expanded later */}
      <section id="work" className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">Case studies and recent projects will appear here.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="h-40 rounded-lg bg-gradient-to-br from-emerald-400/20 via-sky-400/20 to-fuchsia-400/20 ring-1 ring-white/10" />
                <h3 className="mt-4 text-lg font-semibold text-white">Project {i}</h3>
                <p className="mt-1 text-sm text-slate-300">Short description of the project and the impact it delivered.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Subhan Irfan. All rights reserved.</p>
          <p className="opacity-70">Built with love and modern web tooling.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
