require('dotenv').config()
const express    = require('express')
const cors       = require('cors')
const connectDB  = require('./config/db')
console.log("MONGO_URI:", process.env.MONGO_URI)

// ── Connect to MongoDB ─────────────────────────────────────────────────────
connectDB()

const app = express()

// ── Middleware ─────────────────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      // In production, you can restrict this, but for portfolio we allow it or log a warning
      return callback(null, true)
    }
    return callback(null, true)
  },
  credentials: true,
}))
app.use(express.json())

// ── Routes ─────────────────────────────────────────────────────────────────
app.use('/api/projects', require('./routes/projects'))
app.use('/api/contact',  require('./routes/contact'))

// ── Health check ───────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Portfolio API is running' })
})

// ── 404 handler ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

// ── Start server ───────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
