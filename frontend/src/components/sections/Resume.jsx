import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="resume" className="relative py-20 px-4" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,39,0.05) 0%, transparent 80%)',
      }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <motion.p className="section-label"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
            Resume
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.05, margin: '0 0 16px' }}
          >
            <span style={{ color: 'var(--text-primary)' }}>PROFESSIONAL </span>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>CREDENTIALS</span>
          </motion.h2>
          <motion.div className="gold-divider"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2} />
        </div>

        {/* Top Control Panel */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
          className="resume-control-panel"
        >
          <div className="resume-status">
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)',
              boxShadow: '0 0 8px var(--gold)',
            }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Recruiter Hub: Instant PDF & Web view available
            </span>
          </div>

          <div className="resume-buttons">
            {/* View Printable HTML */}
            <motion.a
              href="/Aditya_Dash_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                fontSize: '12px',
                padding: '8px 16px',
                minHeight: '38px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              View Clean Print CV
            </motion.a>

            {/* Print / Save PDF */}
            <motion.a
              href="/Aditya_Dash_Resume.html?print=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                fontSize: '12px',
                padding: '8px 16px',
                minHeight: '38px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              Print / Save PDF
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
