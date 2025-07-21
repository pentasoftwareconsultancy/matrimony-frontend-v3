import React from 'react'
import HeroSection from '../../components/public/home/heroSection/HeroSection'
import HomeAbout from '../../components/public/home/homeAbout/HomeAbout'
import HomeAds from '../../components/public/home/homeAds/HomeAds'
import HomeReview from '../../components/public/home/homeReview/HomeReview'
import HomeChart from '../../components/public/home/homeChart/HomeChart'

function HomePage() {
  return (
    <div>
        <HeroSection />
        <HomeAbout />
        <HomeAds />
        <HomeReview />
        <HomeChart />
    </div>
  )
}

export default HomePage