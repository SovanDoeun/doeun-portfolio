import { Github, ExternalLink, PlayCircle, Users, Layers } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { featuredProject } from '../data/projects.js'

export default function FeaturedProject({ onViewDetails }) {
  const p = featuredProject

  return (
    <section id="featured-project" className="section-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-[var(--accent)] mb-3">
            Featured Project
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            {p.emoji} {p.name}
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-prose mb-10">{p.short}</p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <Reveal delay={0.05}>
            <div className="module-card rounded-md overflow-hidden aspect-video flex items-center justify-center bg-[var(--bg-raised)]">
              {p.screenshots.length > 0 ? (
                <img src={p.screenshots[0]} alt={`${p.name} screenshot`} className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <div className="text-center text-[var(--text-muted)] font-mono text-sm px-6">
                  add screenshots to /public/images/projects/ and list them in data/projects.js
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="module-card rounded-md p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4 text-sm text-[var(--text-muted)]">
                <Users size={16} />
                <span>{p.roles.join(' · ')}</span>
              </div>
              <div className="flex items-center gap-2 mb-6 text-sm text-[var(--text-muted)]">
                <Layers size={16} />
                <span>{p.features.length} core features</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {p.technologies.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded border border-[var(--line)] text-[var(--text-muted)]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <button
                  onClick={() => onViewDetails(p)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--accent)] text-[var(--bg)] rounded-md text-sm font-medium hover:bg-[var(--accent-light)] transition-colors focus-ring"
                >
                  View full details
                </button>
                <div className="flex gap-3">
                  <ProjectLink href={p.demoVideo} label="Demo video" icon={PlayCircle} />
                  <ProjectLink href={p.github} label="GitHub" icon={Github} />
                  <ProjectLink href={p.demo} label="Live demo" icon={ExternalLink} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {p.features.slice(0, 8).map((feature) => (
              <div key={feature} className="border border-[var(--line)] rounded-md px-4 py-3 text-sm">
                {feature}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProjectLink({ href, label, icon: Icon }) {
  if (!href) {
    return (
      <span
        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 border border-[var(--line)] rounded-md text-xs text-[var(--text-muted)]/50 cursor-not-allowed"
        title={`${label} link not added yet`}
      >
        <Icon size={14} /> {label}
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 border border-[var(--line)] rounded-md text-xs hover:border-[var(--accent)] transition-colors focus-ring"
    >
      <Icon size={14} /> {label}
    </a>
  )
}
