import Reveal from './Reveal.jsx'
import profile from '../data/profile.js'

const focusAreas = [
  'Mobile Application Development',
  'Web Development',
  'Backend Development',
  'Database Systems',
  'IT Support',
  'Software Engineering',
]

const statEntries = [
  { label: 'Projects completed', value: profile.stats.projectsCompleted },
  { label: 'Technologies', value: profile.stats.technologies },
  { label: 'Years learning', value: profile.stats.yearsLearning },
  { label: 'Main project', value: profile.stats.mainProject },
]

export default function About() {
  return (
    <section id="about" className="section-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <Reveal>
            <div className="aspect-[4/5] rounded-md border border-[var(--line)] bg-[var(--bg-raised)] overflow-hidden flex items-center justify-center">
              <img
                src={profile.profileImage}
                alt={`Portrait of ${profile.name}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-[var(--text-muted)] text-sm font-mono">
                add photo: /public{profile.profileImage}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold mb-6">About Me</h2>
              <p className="text-[var(--text-muted)] text-lg max-w-prose mb-8">
                I am a Computer Science student with a strong interest in software development,
                mobile application development, and information technology. I enjoy building
                practical applications that solve real-world problems.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2 mb-10">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="text-sm px-3 py-1.5 rounded border border-[var(--line)] text-[var(--text-muted)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[var(--line)]">
                {statEntries.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-[var(--text-muted)] text-xs mb-1">{stat.label}</dt>
                    <dd className="font-mono text-xl font-medium">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
