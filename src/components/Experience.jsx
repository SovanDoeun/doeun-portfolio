import Reveal from './Reveal.jsx'
import experience from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold mb-2">Experience</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-prose">
            Edit <code className="font-mono text-xs">src/data/experience.js</code> to keep this current.
          </p>
        </Reveal>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-[var(--line)]" aria-hidden="true" />
          <ol className="space-y-10">
            {experience.map((entry, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-8 sm:-left-10 top-1.5 w-3 h-3 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="font-display font-semibold">{entry.position}</h3>
                    <span className="text-sm text-[var(--text-muted)]">{entry.organization}</span>
                    <span className="text-xs font-mono text-[var(--accent)] ml-auto">{entry.date}</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mb-3 max-w-prose">{entry.description}</p>
                  {entry.responsibilities?.length > 0 && (
                    <ul className="space-y-1">
                      {entry.responsibilities.map((r, ri) => (
                        <li key={ri} className="text-sm text-[var(--text-muted)]">— {r}</li>
                      ))}
                    </ul>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
