import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal.jsx'
import profile from '../data/profile.js'

export default function Education() {
  return (
    <section id="education" className="section-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold mb-12">Education</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="module-card rounded-md p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-12 h-12 rounded-md bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
              <GraduationCap size={22} className="text-[var(--accent)]" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-lg">{profile.university}</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">{profile.department}</p>
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <dt className="text-[var(--text-muted)] text-xs mb-1">Degree</dt>
                  <dd>— add degree —</dd>
                </div>
                <div>
                  <dt className="text-[var(--text-muted)] text-xs mb-1">University</dt>
                  <dd>{profile.university}</dd>
                </div>
                <div>
                  <dt className="text-[var(--text-muted)] text-xs mb-1">Year</dt>
                  <dd>{profile.year}</dd>
                </div>
                <div>
                  <dt className="text-[var(--text-muted)] text-xs mb-1">Relevant courses</dt>
                  <dd>MIS, Mobile App Advanced</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
