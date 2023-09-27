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
<div className='col-span-4'>
<p>Project</p>
<h2>Overview</h2>
<p>Redux Toolkit is a library that simplifies and streamlines the process of managing state in a React application.
   It&#39;s particularly well-suited for use with Next.
   js, a popular framework for building server-rendered React applications.
   </p>
   <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
   <button className='px-8 py-2 mt-4 '>Code</button>
   </div>
   <div className='col-span-4 md:'>
    <div>

    </div>
   </div>
</div>
    </div>
  )
}

export default reduxtoolkit