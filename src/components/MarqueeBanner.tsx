import Marquee from 'react-fast-marquee'

const stats = [
  'Voice AI Agents',
  'CRM Automation',
  'Mass Outreach',
  'E-Commerce Intelligence',
  'Social Media Automation',
  'Web Development',
  'Predictive Analytics',
  'Conversational AI',
]

export default function MarqueeBanner() {
  return (
    <section className="border-y border-[var(--border)] py-6">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {stats.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium tracking-wider uppercase text-[var(--muted-foreground)]"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
