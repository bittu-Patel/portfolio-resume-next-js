import { Main  from 'next/document.js'
import Navbar from '../components/Navbar.jsx'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar />
     <Main />
    </div>
  )
}

export default index