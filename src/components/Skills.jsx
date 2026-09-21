import * as Icons from 'lucide-react'
import Reveal from './Reveal.jsx'
import skillGroups from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold mb-2">Skills</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-prose">
            Technologies I use across mobile, web, and backend systems.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.06}>
              <div className="module-card rounded-md p-6 h-full">
                <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--accent)] mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((skill) => {
                    const Icon = Icons[skill.icon] || Icons.Code
                    return (
                      <li key={skill.name} className="flex items-center gap-3 text-sm">
                        <Icon size={16} className="text-[var(--text-muted)] shrink-0" aria-hidden="true" />
                        <span>{skill.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
