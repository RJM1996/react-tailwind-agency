import React from 'react'
import Clients from '../widgets/Clients'
import Contact from '../widgets/Contact'
import Footer from '../widgets/Footer'
import Header from '../widgets/Header'
import Hero from '../widgets/Hero'
import Solution from '../widgets/Solution'
import WorkFlow from '../widgets/WorkFlow'

function Index() {
  return (
    <div className='container mx-auto p-4'>
      <Header></Header>
      <main className='mt-20'>
        <Hero />
        <section className='md:p-20'>
          <Solution />
        </section>
        <section className='md:p-20'>
          <WorkFlow />
        </section>
        <section className='md:p-20'>
          <Clients />
        </section>
        <section className='md:p-20'>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Index
