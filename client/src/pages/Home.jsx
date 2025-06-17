import React from 'react'
import Hero from '../components/HomePage/Hero'
import Highlights from '../components/HomePage/Highlights'
import MenuSpecialities from '../components/HomePage/MenuSpecialities'
import OfferingsShourtcuts from '../components/HomePage/OfferingsShourtcuts'
import About from '../components/HomePage/About'

function Home() {
  return (
    <div  className="text-3xl font-bold">
    <Hero />
    <Highlights />
    <MenuSpecialities />
    <OfferingsShourtcuts />
    <About />
    </div>
  )
}

export default Home