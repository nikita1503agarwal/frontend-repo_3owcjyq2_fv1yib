import { useState } from 'react'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto mt-4 max-w-6xl rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="relative">
              <motion.span
                initial={{ rotate: -20, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-lg"
              >
                <Rocket className="h-5 w-5 text-white" />
              </motion.span>
              <Sparkles className="pointer-events-none absolute -right-1 -top-1 h-4 w-4 text-fuchsia-400" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">Geekroom Neo</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="group relative text-sm font-medium text-zinc-200"
              >
                {l.name}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,.35)] transition hover:scale-[1.03]"
            >
              Start a Project
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="px-5 py-3">
                <div className="grid gap-2">
                  {links.map((l) => (
                    <a
                      key={l.name}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-zinc-100 hover:bg-white/5"
                    >
                      {l.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
