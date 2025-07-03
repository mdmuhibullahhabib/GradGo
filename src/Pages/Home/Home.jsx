import React from 'react'
import HomeBanner from './HomeBanner'
import HowItWorks from './HowItWorks'
import TopConsultants from './TopConsultants'
import StudentTestimonials from './StudentTestimonials'
import CallToAction from './CallToAction'

const Home = () => {
  return (
    <div>
        <HomeBanner></HomeBanner>
        <HowItWorks></HowItWorks>
        <TopConsultants></TopConsultants>
        <StudentTestimonials></StudentTestimonials>
        <CallToAction></CallToAction>
    </div>
  )
}

export default Home