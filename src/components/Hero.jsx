import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import profile from '../data/profile.js'
import SchematicIllustration from './SchematicIllustration.jsx'

const badges = ['Flutter', 'Dart', 'React', 'JavaScript', 'Node.js', 'Express.js', 'MySQL']

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p variants={item} className="text-[var(--accent)] font-mono text-sm mb-4">
            Hi, I'm {profile.name} <span className="text-[var(--text-muted)]">({profile.fullName})</span>
          </motion.p>
          <motion.h1 variants={item} className="font-display font-semibold text-4xl sm:text-5xl leading-[1.1] mb-6">
            {profile.role}
          </motion.h1>
          <motion.p variants={item} className="text-[var(--text-muted)] text-lg max-w-prose mb-8">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--accent)] text-[var(--bg)] rounded-md text-sm font-medium hover:bg-[var(--accent-light)] transition-colors focus-ring"
            >
              View my projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--line)] rounded-md text-sm font-medium hover:border-[var(--accent)] transition-colors focus-ring"
            >
              Contact me <Mail size={16} />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--line)] rounded-md text-sm font-medium hover:border-[var(--accent)] transition-colors focus-ring"
            >
              Download CV <Download size={16} />
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="text-xs font-mono px-3 py-1.5 rounded border border-[var(--line)] text-[var(--text-muted)]"
              >
                {b}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="hidden sm:block"
        >
          <SchematicIllustration />
        </motion.div>
      </div>
    </section>
  )
}
