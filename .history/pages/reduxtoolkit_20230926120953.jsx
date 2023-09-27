import React from 'react'
import reduxImg from '../public/assets/skills/redux.png';
import Image from 'next/image'

const reduxtoolkit = () => {
  return (
    <div className='w-full'>
<div className='w-screen h-[30vh] lg:w-[40vh] relative'>
  <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
  <Image className='absolute z-1' layout='fill'  objectFit='cover' src={reduxImg} alt='/' />
  <div>
    <h2>Redux Toolkit</h2>
    <h3>next</h3>
  </div>
</div>
    </div>
  )
}

export default reduxtoolkit