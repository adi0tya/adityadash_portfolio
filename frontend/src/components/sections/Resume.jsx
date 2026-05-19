import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { personal, about, education, skills, projects } from '../../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [copiedText, setCopiedText] = useState('')
  const [activeTab, setActiveTab] = useState('all')

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(''), 2000)
  }

  // Filter skills based on tab selection
  const categories = Object.keys(skills)

  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,39,0.05) 0%, transparent 80%)',
      }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
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

        {/* Top Control Panel */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '24px',
            padding: '16px 20px',
            borderRadius: '16px',
            background: 'rgba(13,17,23,0.6)',
            border: '1px solid rgba(201,162,39,0.12)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)',
              boxShadow: '0 0 8px var(--gold)',
            }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Recruiter Hub: Instant PDF & Web view available
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
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

        {/* Main Resume Sheet */}
        <motion.div
          variants={scaleIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="glass-gold"
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
            position: 'relative',
          }}
        >
          {/* Top Decorative Border */}
          <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, var(--gold) 20%, var(--gold-light) 50%, var(--gold) 80%, transparent)' }} />

          {/* Interactive Header Area */}
          <div style={{
            padding: '40px clamp(16px, 4vw, 40px) 30px',
            borderBottom: '1px solid rgba(201,162,39,0.12)',
            background: 'linear-gradient(180deg, rgba(201,162,39,0.02) 0%, transparent 100%)',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '24px',
              flexWrap: 'wrap'
            }}>
              <div>
                <h1 style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  fontFamily: "'Space Grotesk', sans-serif",
                  lineHeight: 1.1,
                  marginBottom: '6px'
                }}>
                  {personal.name}
                </h1>
                <p style={{
                  fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                  color: 'var(--gold-light)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>
                  {personal.role}
                </p>
              </div>

              {/* Quick Contacts Panel */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                maxWidth: '480px'
              }}>
                {/* Email */}
                <button
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,162,39,0.2)'; e.currentTarget.style.background = 'rgba(201,162,39,0.04)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {copiedText === 'email' ? 'Copied!' : personal.email}
                </button>

                {/* Phone */}
                <button
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,162,39,0.2)'; e.currentTarget.style.background = 'rgba(201,162,39,0.04)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {copiedText === 'phone' ? 'Copied!' : personal.phone}
                </button>

                {/* Location */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.82rem',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {personal.location}
                </div>

                {/* GitHub */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,162,39,0.2)'; e.currentTarget.style.color = 'var(--gold-light)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,162,39,0.2)'; e.currentTarget.style.color = 'var(--gold-light)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Sheet Content */}
          <div style={{ padding: '32px clamp(16px, 4vw, 40px) 40px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (Skills, Education, Volunteer) - 5 Cols */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                
                {/* Technical Skills group */}
                <div>
                  <h3 style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '18px',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    Technical Skills
                  </h3>

                  {/* Skills category filter tab header */}
                  <div style={{
                    display: 'flex',
                    gap: '4px',
                    flexWrap: 'wrap',
                    marginBottom: '16px',
                    background: 'rgba(255,255,255,0.02)',
                    padding: '3px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.04)'
                  }}>
                    <button
                      onClick={() => setActiveTab('all')}
                      style={{
                        padding: '5px 10px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        background: activeTab === 'all' ? 'var(--gold)' : 'transparent',
                        color: activeTab === 'all' ? '#0a0800' : 'var(--text-secondary)',
                        transition: 'all 0.15s'
                      }}
                    >
                      All
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        style={{
                          padding: '5px 10px',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          border: 'none',
                          cursor: 'pointer',
                          background: activeTab === cat ? 'var(--gold)' : 'transparent',
                          color: activeTab === cat ? '#0a0800' : 'var(--text-secondary)',
                          transition: 'all 0.15s'
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Filtered skill blocks */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <AnimatePresence mode="wait">
                      {categories
                        .filter(cat => activeTab === 'all' || activeTab === cat)
                        .map(cat => (
                          <motion.div
                            key={cat}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            style={{
                              background: 'rgba(255,255,255,0.015)',
                              border: '1px solid rgba(255,255,255,0.04)',
                              borderRadius: '12px',
                              padding: '12px 14px'
                            }}
                          >
                            <p style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: 'var(--text-secondary)',
                              marginBottom: '8px',
                              letterSpacing: '0.04em'
                            }}>
                              {cat}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                              {skills[cat].map(s => (
                                <span
                                  key={s}
                                  className="skill-tag"
                                  style={{
                                    fontSize: '0.72rem',
                                    padding: '4px 10px',
                                    borderRadius: '5px',
                                    border: '1px solid rgba(201,162,39,0.12)',
                                    background: 'rgba(201,162,39,0.03)'
                                  }}
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Education section */}
                <div>
                  <h3 style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '16px',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    Education
                  </h3>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)',
                    border: '1px solid rgba(255,255,255,0.04)',
                    borderRadius: '16px',
                    padding: '18px 20px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-light)' }}>BCA Program</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{education.expected}</span>
                    </div>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {education.degree}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                      {education.institution}, {education.location}
                    </p>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' }}>
                      {education.coursework.map(c => (
                        <span key={c} style={{
                          padding: '3px 8px', borderRadius: '4px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          fontSize: '0.7rem', color: 'var(--text-secondary)'
                        }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Volunteer experience */}
                <div>
                  <h3 style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '16px',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    Volunteer Experience
                  </h3>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)',
                    border: '1px solid rgba(255,255,255,0.04)',
                    borderRadius: '16px',
                    padding: '18px 20px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-light)' }}>Point of Contact</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2026</span>
                    </div>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      Spectra 2026 LAN Tournament
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                      Birla Global University, Bhubaneswar
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      Managed registrations, brackets, and full event logistics for a large-scale gaming tournament with over 150 participants.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column (Summary & Projects) - 7 Cols */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                
                {/* Summary section */}
                <div>
                  <h3 style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '14px',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    Professional Summary
                  </h3>
                  <div style={{
                    position: 'relative',
                    padding: '18px 22px',
                    background: 'rgba(201,162,39,0.02)',
                    borderLeft: '2px solid var(--gold)',
                    borderRadius: '0 16px 16px 0',
                  }}>
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      fontSize: '0.92rem',
                      fontStyle: 'italic',
                      margin: 0,
                    }}>
                      "{about.summary}"
                    </p>
                  </div>
                </div>

                {/* Key Projects section */}
                <div>
                  <h3 style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '16px',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    Featured Projects
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {projects.map(proj => (
                      <div
                        key={proj.id}
                        style={{
                          background: 'rgba(255,255,255,0.015)',
                          border: '1px solid rgba(255,255,255,0.04)',
                          borderRadius: '18px',
                          padding: '20px',
                          transition: 'border-color 0.25s',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,162,39,0.22)' }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)' }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                            {proj.name}
                          </h4>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            {proj.github && (
                              <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                              </a>
                            )}
                            {proj.live && (
                              <a href={proj.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>

                        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                          {proj.tagline}
                        </p>

                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '14px', margin: 0 }}>
                          {proj.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                          {proj.stack.map(st => (
                            <span key={st} style={{
                              fontSize: '0.68rem',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid rgba(255,255,255,0.06)',
                              color: 'var(--text-secondary)',
                            }}>
                              {st}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
