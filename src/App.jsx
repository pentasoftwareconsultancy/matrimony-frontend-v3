import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/publicPages/HomePage'
import PublicNavbar from './components/public/publicNavbar/PublicNavbar'
import PublicFooter from './components/public/publicFooter/PublicFooter'


function App() {
  return (
    <div>
      <PublicNavbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      
    </Routes>
      <PublicFooter />
    </div>
  )
}

export default App