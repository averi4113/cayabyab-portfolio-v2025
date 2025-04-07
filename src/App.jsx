import React from 'react'
import GreetingsSection from './components/Greetings Section/GreetingsSection'
import OTYSection from './components/OTY Section/OTYSection'
import RolesSection from './components/Roles Section/RolesSection'
import EndPageSection from './components/End Page Section/EndPageSection'
import Navbar from './components/Navbar'
import './styles/index.css'

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start min-h-screen">
          <GreetingsSection />
        </section>
        <section className="snap-start min-h-screen">
          <OTYSection />
        </section>
        <section className="snap-start min-h-screen">
          <RolesSection />
        </section>
        <section className="snap-start min-h-screen">
          <EndPageSection />
        </section>
      </div>
    </div>
  )
}

export default App