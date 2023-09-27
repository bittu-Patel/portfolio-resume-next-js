import About from '../components/About.jsx'
import Main from '../components/Main.jsx'
import Navbar from '../components/Navbar.jsx'
import React from 'react'
import Skills from '../components'

const index = () => {
  return (
    <div>
      <Navbar />
     <Main />
     <About />
     <Skills />
    </div>
  )
}

export default index