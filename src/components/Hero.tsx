import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 sm:pt-20">
      {/* Radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0, 229, 160, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 inline-block rounded-full border border-[var(--border)] px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-[var(--accent)]">
            AI-First Automation Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Transform your business with{' '}
          <span className="text-[var(--accent)]">intelligent automation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg"
        >
          We build AI-powered voice agents, CRM systems, and marketing
          automation that drive measurable growth. Deploy cutting-edge
          technology without the complexity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-medium text-[var(--accent-foreground)] transition-opacity hover:opacity-90"
          >
            Start a project
            <ArrowRight size={16} />
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-7 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--muted-foreground)]"
          >
            Explore solutions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
