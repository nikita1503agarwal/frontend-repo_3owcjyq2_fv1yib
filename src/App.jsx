import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
      <CTA />
      <footer className="relative border-t border-white/10 bg-zinc-950 py-10 text-center text-zinc-400">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Geekroom Neo — Crafted with neon, code, and a little bit of chaos.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
