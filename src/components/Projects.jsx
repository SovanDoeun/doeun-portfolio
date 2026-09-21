import { Github, ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { projects, featuredProject } from '../data/projects.js'

export default function Projects({ onViewDetails }) {
  return (
    <section id="projects" className="section-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold mb-2">Projects</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-prose">
            A selection of systems and applications I've built for coursework and practice.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.06}>
              <article className="module-card rounded-md overflow-hidden h-full flex flex-col">
                <div className="aspect-video bg-[var(--bg)] flex items-center justify-center border-b border-[var(--line)]">
                  {project.image ? (
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <span className="text-[var(--text-muted)] font-mono text-xs">no image yet</span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm text-[var(--text-muted)] mb-4 flex-1">{project.short}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((t) => (
                      <span key={t} className="text-xs font-mono px-2 py-0.5 rounded border border-[var(--line)] text-[var(--text-muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <button
                      onClick={() => onViewDetails(project.id === featuredProject.id ? featuredProject : toDetail(project))}
                      className="font-medium text-[var(--accent)] hover:underline focus-ring rounded"
                    >
                      View details
                    </button>
                    <span className="text-[var(--line)]">|</span>
                    <MiniLink href={project.github} icon={Github} label="GitHub" />
                    <MiniLink href={project.demo} icon={ExternalLink} label="Demo" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects without full case-study content yet still open the modal,
// showing whatever fields are filled in.
function toDetail(project) {
  return {
    ...project,
    overview: project.short,
    problem: '',
    solution: '',
    roles: [],
    features: [],
    challenges: '',
    results: '',
    screenshots: project.image ? [project.image] : [],
  }
}

function MiniLink({ href, icon: Icon, label }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1 text-[var(--text-muted)]/50 cursor-not-allowed">
        <Icon size={13} /> {label}
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors focus-ring rounded"
    >
      <Icon size={13} /> {label}
    </a>
  )
}
