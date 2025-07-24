import React from 'react'
import AboutHero from '../../components/public/about/aboutHero/AboutHero'
import AboutServices from '../../components/public/about/aboutServices/AboutServices'
import AboutValue from '../../components/public/about/aboutValue/AboutValue'
import AboutJourney from '../../components/public/about/aboutJourney/AboutJourney'

function AboutPage() {
  return (
    <div>
        <AboutHero />
        <AboutServices />
        <AboutValue />
        <AboutJourney />
    </div>
  )
}

export default AboutPage