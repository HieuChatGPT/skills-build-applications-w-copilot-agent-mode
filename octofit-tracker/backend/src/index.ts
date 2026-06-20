import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 8000
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit'

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API is running' })
})

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  })
