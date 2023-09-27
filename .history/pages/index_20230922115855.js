import { Main } from 'import React from 'react'

export const Component = (props) => {
  return(
    <div>
      {props.children}
    </div>
  )
}

export default Component/'
import Navbar from '../components/Navbar.jsx'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar />
    
    </div>
  )
}

export default index