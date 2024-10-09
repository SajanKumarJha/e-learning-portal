import React from 'react'
import Hero from '../components/child/Hero'
import Product from '../components/child/Product'
import WhyChooseUs from '../components/child/WhyChooseUs'
import Features from '../components/child/Features'
import ProductCarousel from '../components/child/ProductCarousel'
const Home = () => {
  return (
    <>
      <Hero />
      <div className="sl-main--area">
        <Features />
        <Product />
        <WhyChooseUs />
      </div>
    </>
  )
}

export default Home