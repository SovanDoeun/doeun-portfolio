import { Smartphone, Globe, School, Monitor, Wrench, Paintbrush } from 'lucide-react'
import Reveal from './Reveal.jsx'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Flutter mobile applications for Android and iOS.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern responsive websites.',
  },
  {
    icon: School,
    title: 'School Management Systems',
    description: 'Custom school management solutions.',
  },
  {
    icon: Monitor,
    title: 'Software Development',
    description: 'Desktop and business applications.',
  },
  {
    icon: Wrench,
    title: 'IT Support',
    description: 'Computer, software, printer, and network troubleshooting.',
  },
  {
    icon: Paintbrush,
    title: 'UI Design',
    description: 'Clean and modern application interfaces.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold mb-2">Services</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-prose">What I can help you build.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.06}>
              <div className="module-card rounded-md p-6 h-full">
                <service.icon size={22} className="text-[var(--accent)] mb-4" aria-hidden="true" />
                <h3 className="font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
