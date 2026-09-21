import { motion } from 'framer-motion'

// Abstract line-art schematic — connected system modules, echoing the
// architecture of the systems Doeun builds (client / API / database).
export default function SchematicIllustration() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { delay: 0.4 + i * 0.15, duration: 0.9, ease: 'easeInOut' }, opacity: { delay: 0.4 + i * 0.15, duration: 0.3 } },
    }),
  }

  const nodeFade = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: 0.6 + i * 0.15, duration: 0.4 } }),
  }

  return (
    <svg viewBox="0 0 420 420" className="w-full h-auto max-w-md mx-auto" role="img" aria-label="Diagram of connected application modules">
      {/* connectors */}
      <motion.line x1="80" y1="90" x2="210" y2="180" className="schematic-line" strokeWidth="1.5" fill="none" custom={0} initial="hidden" animate="visible" variants={draw} />
      <motion.line x1="340" y1="70" x2="210" y2="180" className="schematic-line" strokeWidth="1.5" fill="none" custom={1} initial="hidden" animate="visible" variants={draw} />
      <motion.line x1="210" y1="180" x2="120" y2="300" className="schematic-line" strokeWidth="1.5" fill="none" custom={2} initial="hidden" animate="visible" variants={draw} />
      <motion.line x1="210" y1="180" x2="300" y2="320" className="schematic-line" strokeWidth="1.5" fill="none" custom={3} initial="hidden" animate="visible" variants={draw} />
      <motion.line x1="120" y1="300" x2="300" y2="320" className="schematic-line" strokeWidth="1.5" fill="none" custom={4} initial="hidden" animate="visible" variants={draw} />

      {/* module nodes */}
      <motion.g custom={0} initial="hidden" animate="visible" variants={nodeFade}>
        <rect x="45" y="60" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
        <circle cx="80" cy="90" r="3" fill="var(--accent)" />
      </motion.g>
      <motion.g custom={1} initial="hidden" animate="visible" variants={nodeFade}>
        <rect x="305" y="40" width="70" height="60" rx="4" fill="none" stroke="var(--brass)" strokeWidth="1.5" />
        <circle cx="340" cy="70" r="3" fill="var(--brass)" />
      </motion.g>
      <motion.g custom={2} initial="hidden" animate="visible" variants={nodeFade}>
        <rect x="175" y="150" width="70" height="60" rx="4" fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeWidth="2" />
        <circle cx="210" cy="180" r="4" fill="var(--accent)" />
      </motion.g>
      <motion.g custom={3} initial="hidden" animate="visible" variants={nodeFade}>
        <rect x="85" y="270" width="70" height="60" rx="4" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="120" cy="300" r="3" fill="currentColor" fillOpacity="0.6" />
      </motion.g>
      <motion.g custom={4} initial="hidden" animate="visible" variants={nodeFade}>
        <rect x="265" y="290" width="70" height="60" rx="4" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="300" cy="320" r="3" fill="currentColor" fillOpacity="0.6" />
      </motion.g>
    </svg>
  )
}
