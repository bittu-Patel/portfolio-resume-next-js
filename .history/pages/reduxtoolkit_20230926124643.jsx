import React from 'react'
import reduxImg from '../public/assets/skills/redux.png';
import Image from 'next/image'

const reduxtoolkit = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
  <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={reduxImg}
          alt='/'
        />
  <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
    <h2 className='py-2'>Redux Toolkit</h2>
    <h3>Next.JS</h3>
  </div>
</div>
<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 '>
<div className='col-span-4'></div>
<p>Redux</p>
<h2>Over</h2>

</div>
    </div>
  )
}

export default reduxtoolkit