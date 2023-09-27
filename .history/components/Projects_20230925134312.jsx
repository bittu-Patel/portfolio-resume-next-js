import React from 'react'
import Image from 'next/image';
import reduxImg from '../public/assets/skills/redux.png';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
    <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
    <h2 className='py-4'>What I&#39; ve Built</h2>
    <div className='grid md:grid-cols-2 gap-8'>

        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image className='rounded-xl group-hover:opacity-10 ' src={reduxImg} alt='/' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>Redux Toolkit</h3>
            <p className='pb-4 pt-2'>Next JS</p>
            <Link href='/' >

                <p>More Info</p>
            </Link>
        </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default Projects