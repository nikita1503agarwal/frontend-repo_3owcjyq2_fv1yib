import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.08),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950/90" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
            Now in cyber mode
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Build bold digital experiences
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            A radical redesign concept for Geekroom — blending retro-futurism, neon gradients, and interactive 3D to showcase your work with attitude.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="pointer-events-auto rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(168,85,247,.35)] transition hover:scale-[1.03]"
            >
              See the Work
            </a>
            <a
              href="#contact"
              className="pointer-events-auto rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
