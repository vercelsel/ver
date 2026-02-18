import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[var(--border)] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-xs font-medium tracking-wider uppercase text-[var(--accent)]">
              About Wexel
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              We build the future of work with AI at the core
            </h2>
            <p className="mt-6 leading-relaxed text-[var(--muted-foreground)]">
              Wexel is an AI-First Automation Agency helping businesses
              streamline operations, engage customers, and scale revenue
              through intelligent technology. We combine deep AI expertise
              with hands-on implementation to deliver solutions that work
              from day one.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
              From autonomous voice agents handling thousands of calls to
              predictive CRM pipelines that close deals faster, our team
              turns complex AI capabilities into simple, powerful tools for
              your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: '50+', label: 'Projects delivered' },
              { value: '10x', label: 'Average ROI' },
              { value: '24/7', label: 'AI availability' },
              { value: '98%', label: 'Client retention' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center"
              >
                <p className="text-3xl font-bold text-[var(--accent)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
