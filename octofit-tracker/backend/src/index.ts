import express from 'express'
import apiRouter from './api'
import { connectDatabase, mongoUri } from './database'

const app = express()
const port = 8000
const codespaceName = process.env.CODESPACE_NAME
const apiUrl = codespaceName
  ? `https://${codespaceName}-8000.githubpreview.dev`
  : `http://localhost:${port}`

app.locals.apiUrl = apiUrl
app.use(express.json())
app.use('/api', apiRouter)

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', apiUrl })
})

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API is running', apiUrl })
})

connectDatabase()
  .then(() => {
    console.log('Connected to MongoDB')
    console.log(`API URL available at ${apiUrl}`)
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  })
