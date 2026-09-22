import { Github, Linkedin, Facebook, Send as TelegramIcon, Mail } from 'lucide-react'
import profile from '../data/profile.js'

const socials = [
  { key: 'github', icon: Github, label: 'GitHub' },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'facebook', icon: Facebook, label: 'Facebook' },
  { key: 'telegram', icon: TelegramIcon, label: 'Telegram' },
  { key: 'email', icon: Mail, label: 'Email' },
]

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const activeSocials = socials.filter((s) => profile.links[s.key])

  return (
    <footer className="section-rule">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="text-sm text-[var(--text-muted)]">{profile.role}</p>
        </div>

        <ul className="flex flex-wrap gap-6 text-sm text-[var(--text-muted)]">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[var(--text)] transition-colors focus-ring rounded">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {activeSocials.length > 0 && (
          <div className="flex gap-4">
            {activeSocials.map((s) => (
              <a
                key={s.key}
                href={profile.links[s.key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors focus-ring rounded"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-8 text-xs text-[var(--text-muted)]">
        © 2026 {profile.fullName}. All rights reserved.
      </div>
    </footer>
  )
}
