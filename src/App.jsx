import React, { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/publicPages/HomePage'
import PublicNavbar from './components/public/publicNavbar/PublicNavbar'
import PublicFooter from './components/public/publicFooter/PublicFooter'
import AboutPage from './pages/publicPages/AboutPage'
import RegisterPage from './pages/publicPages/RegisterPage'
import Login from './components/public/login/Login'
import AboutCommittee from './components/public/about/aboutHero/AboutCommittee'
import FirstAnimation from './components/firstAnimation/FirstAnimation'

function App() {
  const [splashDone, setSplashDone] = useState(false)
  const location = useLocation()

  // Routes where we hide navbar/footer
  const hideLayoutRoutes = ['/login', '/register']
  const hideLayout = hideLayoutRoutes.includes(location.pathname)

  if (!splashDone) {
    return <FirstAnimation onFinish={() => setSplashDone(true)} />
  }

  return (
    <div>
      {!hideLayout && <PublicNavbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutcommittee" element={<AboutCommittee />} />
      </Routes>

      {!hideLayout && <PublicFooter />}
    </div>
  )
}

export default App
