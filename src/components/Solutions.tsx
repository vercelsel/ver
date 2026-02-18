import { motion } from 'framer-motion'
import {
  Mic,
  Users,
  Mail,
  ShoppingCart,
  Share2,
  Globe,
} from 'lucide-react'

const solutions = [
  {
    icon: Mic,
    title: 'AI Voice Solutions',
    description:
      'Deploy autonomous voice agents that revolutionize customer interactions and deliver human-quality experiences 24/7.',
  },
  {
    icon: Users,
    title: 'Intelligent AI CRM',
    description:
      'Transform customer relationships with AI-driven automation, predictive analytics, and seamless workflow orchestration.',
  },
  {
    icon: Mail,
    title: 'Mass Outreach Automation',
    description:
      'Transform outreach with hyper-personalized campaigns and AI-powered content that converts at scale.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Intelligence',
    description:
      'Elevate your online business with predictive merchandising, dynamic pricing, and AI-driven insights.',
  },
  {
    icon: Share2,
    title: 'Autonomous Social Media',
    description:
      'Amplify your brand presence with intelligent automation and AI-powered engagement strategies.',
  },
  {
    icon: Globe,
    title: 'Next-Gen Web Development',
    description:
      'Build high-performance, AI-enhanced websites that drive engagement and conversions.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function Solutions() {
  return (
    <section id="solutions" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-medium tracking-wider uppercase text-[var(--accent)]">
            What we do
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Our suite of AI automation solutions spans every stage of the
            growth process
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-[var(--muted-foreground)]">
            Explore how we help businesses transform with intelligent
            automation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => {
            const Icon = solution.icon
            return (
              <motion.article
                key={solution.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-colors hover:border-[var(--accent)]/40"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                  <Icon size={20} className="text-[var(--accent)]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--card-foreground)]">
                  {solution.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {solution.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
