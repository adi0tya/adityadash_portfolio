import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects as localProjects } from '../../data/portfolio'
import { fetchProjects } from '../../services/api'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const STACK_COLORS = {
  React: '#61DAFB',
  'Node.js': '#339933',
  'Express.js': '#cccccc',
  MongoDB: '#47A248',
  'REST APIs': '#FF6C37',
  'Tailwind CSS': '#06B6D4',
  'JWT Authentication': '#d63aff',
  'Socket.io': '#010101',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#1572B6',
}

function StackBadge({ tech }) {
  const color = STACK_COLORS[tech] || '#c9a227'
  return (
    <motion.span
      whileHover={{ scale: 1.07, transition: { duration: 0.13 } }}
      style={{
        padding: '4px 11px', borderRadius: '6px',
        fontSize: '11px', fontWeight: 500,
        background: color + '12', border: `1px solid ${color}28`,
        color, letterSpacing: '0.02em', cursor: 'default',
        transition: 'background 0.2s',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = color + '20' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = color + '12' }}
    >
      {tech}
    </motion.span>
  )
}

function FeatureItem({ text, delay, inView }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: '9px',
        color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.6,
      }}
    >
      <span style={{
        marginTop: '7px', width: '4px', height: '4px', borderRadius: '50%',
        background: 'var(--gold)', opacity: 0.7, flexShrink: 0,
      }} />
      {text}
    </motion.li>
  )
}

// ── Featured (large) card ──────────────────────────────────────────────────
function FeaturedCard({ project, inView, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index + 2}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      style={{
        position: 'relative', borderRadius: '24px', overflow: 'hidden',
        background: 'rgba(10,12,20,0.92)',
        border: '1px solid rgba(201,162,39,0.2)',
        boxShadow: '0 28px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(201,162,39,0.1)',
        backdropFilter: 'blur(24px)',
        transition: 'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 40px 100px rgba(0,0,0,0.7), 0 0 50px rgba(201,162,39,0.12), inset 0 1px 0 rgba(201,162,39,0.15)'
        e.currentTarget.style.borderColor = 'rgba(201,162,39,0.35)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 28px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(201,162,39,0.1)'
        e.currentTarget.style.borderColor = 'rgba(201,162,39,0.2)'
      }}
    >
      {/* Gold top line */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold) 25%, var(--gold-light) 50%, var(--gold) 75%, transparent)' }} />
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,162,39,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ padding: 'clamp(20px, 4.5vw, 32px) clamp(20px, 4.5vw, 36px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-5" style={{ gap: '32px' }}>
          {/* Left */}
          <div className="lg:col-span-3">
            <div style={{ marginBottom: '18px' }}>
              <span style={{
                padding: '4px 13px', borderRadius: '20px',
                fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
                background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.3)', color: 'var(--gold)',
              }}>
                Featured Project
              </span>
            </div>
            <h3 style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.05, marginBottom: '8px',
              background: 'linear-gradient(135deg, #fff 0%, var(--gold-light) 45%, var(--gold) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              {project.name}
            </h3>
            <p style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--silver)', marginBottom: '18px', opacity: 0.9 }}>
              {project.tagline}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.96rem', marginBottom: '20px' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '26px' }}>
              {project.stack.map((t) => <StackBadge key={t} tech={t} />)}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {project.live && (
                <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="btn-primary" style={{ fontSize: '13px', padding: '10px 20px' }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View Live
                </motion.a>
              )}
              {project.github && (
                <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary" style={{ fontSize: '13px', padding: '10px 20px' }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  View Code
                </motion.a>
              )}
            </div>
          </div>
          {/* Right — features */}
          <div className="lg:col-span-2">
            <div style={{ borderRadius: '16px', padding: '22px', height: '100%', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', fontFamily: "'Space Grotesk', sans-serif" }}>
                Key Features
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                {project.features.map((f, i) => (
                  <FeatureItem key={f} text={f} delay={0.3 + i * 0.05} inView={inView} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Try to load from MongoDB; fall back to local data silently
  const [projects, setProjects] = useState(localProjects)

  useEffect(() => {
    fetchProjects()
      .then((dbProjects) => {
        if (dbProjects && dbProjects.length > 0) {
          // Map MongoDB schema → local schema shape so UI stays identical
          const mapped = dbProjects.map((p) => ({
            id:          p._id,
            name:        p.title,
            tagline:     p.description.split('.')[0],
            description: p.description,
            features:    [],
            stack:       p.techStack || [],
            github:      p.githubLink || null,
            live:        p.liveLink   || null,
            highlight:   true,
          }))
          setProjects(mapped)
        }
      })
      .catch(() => {
        // Backend offline — keep local data, no UI change
      })
  }, [])

  return (
    <section id="projects" className="relative py-24 px-4" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,162,39,0.03) 0%, transparent 70%)',
      }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <motion.p className="section-label"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
            Projects
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.05, margin: '0 0 16px' }}
          >
            <span style={{ color: 'var(--text-primary)' }}>WHAT I'VE </span>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>BUILT</span>
          </motion.h2>
          <motion.div className="gold-divider"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2} />
        </div>

        {/* All projects — both use the same FeaturedCard layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingBottom: '16px' }}>
          {projects.map((p, i) => (
            <FeaturedCard key={p.id} project={p} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
