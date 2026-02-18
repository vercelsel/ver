import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We audit your current workflows, identify bottlenecks, and map out the highest-impact automation opportunities.',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description:
      'Our team architects a tailored AI solution with clear milestones, tech stack decisions, and ROI projections.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description:
      'We develop and seamlessly integrate your AI systems with existing tools, ensuring zero disruption to operations.',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description:
      'Go live with full support. We continuously monitor performance and iterate to maximize your results.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-[var(--border)] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-medium tracking-wider uppercase text-[var(--accent)]">
            How it works
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            From idea to impact in four clear steps
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col bg-[var(--card)] p-8"
            >
              <span className="mb-6 text-3xl font-bold text-[var(--accent)]">
                {step.number}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-[var(--card-foreground)]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
