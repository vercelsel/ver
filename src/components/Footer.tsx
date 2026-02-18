import { Link } from 'react-router-dom'

const footerLinks = [
  {
    heading: 'Solutions',
    links: [
      { label: 'AI Voice Agents', href: '#solutions' },
      { label: 'AI CRM', href: '#solutions' },
      { label: 'Mass Outreach', href: '#solutions' },
      { label: 'E-Commerce AI', href: '#solutions' },
      { label: 'Social Media', href: '#solutions' },
      { label: 'Web Development', href: '#solutions' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'business@wexel.ai', href: 'mailto:business@wexel.ai' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-[var(--foreground)]"
            >
              Wexel
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
              AI-First Automation Agency. Transform your business with
              intelligent automation.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="mb-4 text-sm font-semibold text-[var(--foreground)]">
                {group.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} Wexel. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            AI-First Automation Agency
          </p>
        </div>
      </div>
    </footer>
  )
}
