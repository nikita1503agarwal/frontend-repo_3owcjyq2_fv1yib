import { motion } from 'framer-motion'
import { Sparkles, ArrowUpRight } from 'lucide-react'

const items = [
  {
    title: 'AI SaaS Dashboard',
    tag: 'Web App',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Motion',
    tag: 'Shop',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Brand Microsite',
    tag: 'Marketing',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-zinc-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-fuchsia-400" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Selected Work</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <motion.a
              key={card.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-end p-5">
                <div>
                  <div className="text-xs text-zinc-300">{card.tag}</div>
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    {card.title}
                    <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
