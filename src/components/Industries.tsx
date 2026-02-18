import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, ShoppingBag, HeartPulse, Coins } from 'lucide-react'

const industries = [
  {
    icon: Building2,
    title: 'Real Estate',
    description:
      'Built how people actually buy properties. Leads get routed in seconds, not hours. Lead capture, auto-qualification, and so much more.',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description:
      'From support to complete intelligent self automated E-Commerce platforms. Systems made to keep up with incoming traffic and operations needs.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description:
      'Automated scheduling, intake, patient follow-ups, and documentation. HIPAA-compliant from day one. Your staff stops doing admin work and starts doing the work they were hired for.',
  },
  {
    icon: Coins,
    title: 'Crypto',
    description:
      'We automated many of the algorithmic and security aspects of the blockchain, facilitating faster development in the meme coin industry\u2014from code to websites\u2014countless times.',
  },
]

export default function Industries() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="industries" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-medium tracking-wider uppercase text-[var(--accent)]">
            Industries
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Industries that we specialize in...
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-[var(--muted-foreground)]">
            We know the exact problems in your industry because we have solved
            them before. No generic solutions. Systems built for how your
            business actually works.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            const isOpen = openIndex === i

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-5 text-left transition-colors hover:border-[var(--accent)]/40"
                  aria-expanded={isOpen}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <span className="flex-1 text-base font-semibold text-[var(--card-foreground)]">
                    {industry.title}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-transform duration-300 ${
                      isOpen ? 'rotate-45 border-[var(--accent)]' : ''
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className={`transition-colors duration-300 ${
                        isOpen
                          ? 'text-[var(--accent)]'
                          : 'text-[var(--muted-foreground)]'
                      }`}
                    >
                      <path
                        d="M7 1v12M1 7h12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-3 pl-20">
                        <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                          {industry.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
