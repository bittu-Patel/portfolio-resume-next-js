import About from '../components/About.jsx'
import Main from '../components/Main.jsx'
import Navbar from '../components/Navbar.jsx'
import React from 'react'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Projects from '../components/Contact.jsx'


const index = () => {
  return (
    <div>
      <Navbar />
     <Main />
     <About />
     <Skills />
     <Projects />
     <Contact />
    </div>
  )
}

export default index