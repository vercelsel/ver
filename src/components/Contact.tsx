import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-wider uppercase text-[var(--accent)]">
            Get in touch
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Ready to automate your growth?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-[var(--muted-foreground)]">
            Tell us about your business and we will design an AI automation
            strategy tailored to your goals. No commitment required.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:business@wexel.ai"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-medium text-[var(--accent-foreground)] transition-opacity hover:opacity-90"
            >
              Contact us
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:business@wexel.ai"
              className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              business@wexel.ai
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
