import { motion } from 'framer-motion'
import { Code2, Layout, Zap, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Web Experiences',
    desc: 'High-impact sites with immersive visuals and buttery-smooth interactions.',
  },
  {
    icon: Code2,
    title: 'Apps & Platforms',
    desc: 'From MVP to scale — performant, accessible, and delightful products.',
  },
  {
    icon: Zap,
    title: 'Brand & Motion',
    desc: 'Identity systems, 3D, and micro-interactions that stand out.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-zinc-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(168,85,247,0.1),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-fuchsia-400" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What We Do</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 p-2">
                <s.icon className="h-6 w-6 text-fuchsia-300" />
              </div>
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-zinc-300">{s.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl transition duration-700 group-hover:opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
