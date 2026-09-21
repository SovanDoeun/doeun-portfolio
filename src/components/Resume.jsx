import { Download, Eye } from 'lucide-react'
import Reveal from './Reveal.jsx'
import profile from '../data/profile.js'

export default function Resume() {
  return (
    <section id="resume" className="section-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <div className="module-card rounded-md p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <div className="flex-1">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">Resume</h2>
              <p className="text-[var(--text-muted)] max-w-prose text-sm">
                Get the full picture of my background, education, and experience. Add your PDF at{' '}
                <code className="font-mono text-xs">/public{profile.cvPath}</code>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--accent)] text-[var(--bg)] rounded-md text-sm font-medium hover:bg-[var(--accent-light)] transition-colors focus-ring"
              >
                <Download size={16} /> Download My CV
              </a>
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[var(--line)] rounded-md text-sm font-medium hover:border-[var(--accent)] transition-colors focus-ring"
              >
                <Eye size={16} /> View Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
