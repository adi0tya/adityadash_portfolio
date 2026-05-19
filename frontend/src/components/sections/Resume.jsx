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
    <section id="resume" className="relative py-24 px-4" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,39,0.06) 0%, transparent 80%)',
      }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <motion.p className="section-label"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
            Resume
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.05, margin: '0 0 16px' }}
          >
            <span style={{ color: 'var(--text-primary)' }}>PROFESSIONAL </span>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>CREDENTIALS</span>
          </motion.h2>
          <motion.div className="gold-divider"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2} />
        </div>

        {/* Premium Recruiter Hub Card — matches FeaturedCard in Projects.jsx */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'rgba(10,12,20,0.92)',
            border: '1px solid rgba(201,162,39,0.2)',
            boxShadow: '0 28px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(201,162,39,0.1)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            padding: '40px clamp(20px, 5vw, 48px)',
          }}
        >
          {/* Top Decorative Line — matches FeaturedCard top line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--gold) 25%, var(--gold-light) 50%, var(--gold) 75%, transparent)',
          }} />

          {/* Ambient glow inside card */}
          <div style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,162,39,0.09) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}>
            {/* Left Content */}
            <div style={{ flex: '1 1 450px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  boxShadow: '0 0 10px var(--gold)',
                  display: 'inline-block',
                }} />
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--gold-light)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>
                  Interactive Recruiter Hub
                </span>
              </div>
              <h3 style={{
                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '10px',
                lineHeight: 1.2
              }}>
                Looking for my full background?
              </h3>
              <p style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '580px'
              }}>
                Access a beautifully formatted, print-ready version of my professional experience, education, and full-stack technical background. Optimized for recruiters and ATS systems.
              </p>
            </div>

            {/* Right Buttons */}
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              flex: '0 0 auto',
            }} className="resume-buttons">
              {/* View Printable HTML */}
              <motion.a
                href="/Aditya_Dash_Resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  fontSize: '13px',
                  padding: '12px 24px',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
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
                  fontSize: '13px',
                  padding: '12px 24px',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9V2h12v7" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                Print / Save PDF
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
