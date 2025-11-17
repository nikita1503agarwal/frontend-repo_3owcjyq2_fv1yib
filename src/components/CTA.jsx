import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-12"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Got a wild idea?</h3>
            <p className="mt-3 text-zinc-300">Tell us what you want to build and we’ll turn it into something unforgettable.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 grid gap-3 sm:grid-cols-2"
            >
              <input
                required
                placeholder="Your name"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400"
              />
              <textarea
                required
                placeholder="What are you building?"
                className="sm:col-span-2 min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400"
              />
              <button className="sm:col-span-2 rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(168,85,247,.35)] transition hover:scale-[1.02]">
                Send it
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
