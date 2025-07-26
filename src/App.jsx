import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/publicPages/HomePage'
import PublicNavbar from './components/public/publicNavbar/PublicNavbar'
import PublicFooter from './components/public/publicFooter/PublicFooter'
import AboutPage from './pages/publicPages/AboutPage'
import RegisterPage from './pages/publicPages/RegisterPage'
import Login from './components/public/login/Login'
import AboutCommittee from './components/public/about/aboutHero/AboutCommittee'

function App() {
  return (
    <div>
      <PublicNavbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/aboutcommittee" element={<AboutCommittee/>}/>
      </Routes>
      <PublicFooter />
    </div>
  )
}
           
export default App