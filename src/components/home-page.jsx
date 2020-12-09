import React from 'react'
import Layout from './shared/Layout'
import Hero from './hero/Hero'
import FeaturedCollection from './featured-collection/featured-collection'
import MainSection from './main-section/MainSection'

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  )
}

export default HomePage
