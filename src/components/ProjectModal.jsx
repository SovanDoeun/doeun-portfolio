import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Github, ExternalLink, PlayCircle } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <motion.div
            className="fixed inset-0 bg-black/50"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-2xl my-8 bg-[var(--bg-raised)] border border-[var(--line)] rounded-md shadow-xl"
          >
            <div className="flex items-start justify-between p-6 border-b border-[var(--line)]">
              <h3 id="project-modal-title" className="font-display text-2xl font-semibold pr-8">
                {project.name}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="p-1.5 rounded-full border border-[var(--line)] hover:border-[var(--accent)] focus-ring shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
              {project.overview && (
                <Field label="Overview" text={project.overview} />
              )}
              {project.problem && <Field label="Problem" text={project.problem} />}
              {project.solution && <Field label="Solution" text={project.solution} />}

              {project.roles?.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--accent)] mb-2">Roles</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.roles.map((r) => (
                      <span key={r} className="text-xs px-2.5 py-1 rounded border border-[var(--line)]">{r}</span>
                    ))}
                  </div>
                </div>
              )}

              {project.features?.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--accent)] mb-2">Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-[var(--text-muted)]">— {f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies?.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--accent)] mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded border border-[var(--line)] text-[var(--text-muted)]">{t}</span>
                    ))}
                  </div>
                </div>
              )}

              {project.challenges && <Field label="Challenges" text={project.challenges} />}
              {project.results && <Field label="Results" text={project.results} />}
            </div>

            <div className="flex flex-wrap gap-3 p-6 border-t border-[var(--line)]">
              <ModalLink href={project.demoVideo} icon={PlayCircle} label="Demo video" />
              <ModalLink href={project.github} icon={Github} label="GitHub" />
              <ModalLink href={project.demo} icon={ExternalLink} label="Live demo" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({ label, text }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--accent)] mb-2">{label}</h4>
      <p className="text-sm text-[var(--text-muted)]">{text}</p>
    </div>
  )
}

function ModalLink({ href, icon: Icon, label }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--line)] rounded-md text-sm hover:border-[var(--accent)] transition-colors focus-ring"
    >
      <Icon size={14} /> {label}
    </a>
  )
}
