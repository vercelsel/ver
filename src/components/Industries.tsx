import { motion } from 'framer-motion'
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
      'We automated many of the algorithmic and security aspects of the blockchain, facilitating faster development in the meme coin industry—from code to websites—countless times.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Industries that we specialize in...
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {industries.map((industry, i) => {
            const Icon = industry.icon

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-8 hover:border-[var(--accent)]/60 transition-colors"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)]/10">
                  <Icon size={24} className="text-[var(--accent)]" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-[var(--foreground)]">
                  {industry.title}
                </h3>
                <p className="leading-relaxed text-[var(--muted-foreground)]">
                  {industry.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
