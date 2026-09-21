import { useState } from 'react'
import { Github, Linkedin, Facebook, Send as TelegramIcon, Mail, Send } from 'lucide-react'
import Reveal from './Reveal.jsx'
import profile from '../data/profile.js'

const socials = [
  { key: 'github', icon: Github, label: 'GitHub' },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'facebook', icon: Facebook, label: 'Facebook' },
  { key: 'telegram', icon: TelegramIcon, label: 'Telegram' },
  { key: 'email', icon: Mail, label: 'Email' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sent

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name'
    if (!form.email.trim()) next.email = 'Enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.message.trim()) next.message = 'Enter a message'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // Frontend UI only — wire this up to your backend/API or an email
    // service (e.g. Formspree, EmailJS) to actually send messages.
    console.log('Contact form submitted:', form)
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const activeSocials = socials.filter((s) => profile.links[s.key])

  return (
    <section id="contact" className="section-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold mb-2">Let's Work Together</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-prose">
            If you have a project, business idea, or opportunity, feel free to contact me.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10">
          <Reveal delay={0.05}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  error={errors.email}
                />
              </div>
              <Field
                label="Subject"
                value={form.subject}
                onChange={(v) => setForm({ ...form, subject: v })}
              />
              <Field
                label="Message"
                textarea
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                error={errors.message}
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--accent)] text-[var(--bg)] rounded-md text-sm font-medium hover:bg-[var(--accent-light)] transition-colors focus-ring"
              >
                Send Message <Send size={16} />
              </button>

              {status === 'sent' && (
                <p className="text-sm text-[var(--accent)] pt-1" role="status">
                  Message ready — connect this form to your backend or email service to deliver it.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="module-card rounded-md p-6">
              <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--accent)] mb-4">Connect</h3>
              {activeSocials.length > 0 ? (
                <ul className="space-y-3">
                  {activeSocials.map((s) => (
                    <li key={s.key}>
                      <a
                        href={profile.links[s.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm hover:text-[var(--accent)] transition-colors focus-ring rounded"
                      >
                        <s.icon size={16} /> {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[var(--text-muted)]">
                  Add your links in <code className="font-mono text-xs">src/data/profile.js</code>.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, error, type = 'text', textarea = false }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <label className="block">
      <span className="block text-sm mb-1.5">{label}</span>
      <Tag
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={`w-full rounded-md border bg-[var(--bg-raised)] px-3.5 py-2.5 text-sm focus-ring outline-none ${
          error ? 'border-red-400' : 'border-[var(--line)] focus:border-[var(--accent)]'
        }`}
      />
      {error && <span className="block text-xs text-red-400 mt-1">{error}</span>}
    </label>
  )
}
