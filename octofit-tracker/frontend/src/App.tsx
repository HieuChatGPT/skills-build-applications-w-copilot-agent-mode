import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="container py-5">
      <h1 className="display-5">OctoFit Tracker</h1>
      <p className="lead">React 19 + Vite frontend initialized on port 5173.</p>
    </div>
  )
}

function About() {
  return (
    <div className="container py-5">
      <h2>About</h2>
      <p>Frontend is ready to connect to the backend API on port 8000.</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit
          </Link>
          <div>
            <Link className="nav-link d-inline" to="/">
              Home
            </Link>
            <Link className="nav-link d-inline" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
