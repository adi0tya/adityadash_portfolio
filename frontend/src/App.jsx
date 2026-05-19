import { lazy, Suspense } from 'react'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import ShardTransition from './components/ui/ShardTransition'
import Footer from './components/ui/Footer'

// Lazy-loaded sections below the fold for instantaneous initial page speed
const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Resume = lazy(() => import('./components/sections/Resume'))
const Contact = lazy(() => import('./components/sections/Contact'))

// Thin gold/neutral divider line
const Divider = ({ gold }) => (
  <div
    aria-hidden="true"
    style={{
      width: '100%', height: '1px',
      background: gold
        ? 'linear-gradient(90deg, transparent, rgba(201,162,39,0.16), transparent)'
        : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
    }}
  />
)

// Silent translucent loading skeletons to prevent cumulative layout shift (CLS)
const LazySpacer = ({ height }) => (
  <div style={{ minHeight: height, width: '100%', opacity: 0 }} />
)

export default function App() {
  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100svh', overflowX: 'hidden' }}>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        {/* Instant visual fold components */}
        <Hero />
        <ShardTransition id="shard-1" />
        
        {/* Lazy and progressively loaded sections */}
        <Suspense fallback={<LazySpacer height="400px" />}>
          <About />
        </Suspense>
        
        <Divider />
        
        <Suspense fallback={<LazySpacer height="400px" />}>
          <Skills />
        </Suspense>
        
        <ShardTransition id="shard-2" />
        
        <Suspense fallback={<LazySpacer height="500px" />}>
          <Projects />
        </Suspense>
        
        <Divider />
        
        <Suspense fallback={<LazySpacer height="200px" />}>
          <Resume />
        </Suspense>
        
        <Divider gold />
        
        <Suspense fallback={<LazySpacer height="400px" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
