import ProjectItem from './ProjectItem'
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

       
<ProjectItem 
title='Redux Toolkit'
 backgroundImg={reduxImg}
  projectUrl='/redux'
  />
  <ProjectItem 
title='Redux Toolkit'
 backgroundImg={blogImg}
  projectUrl='/blog'
  />
  <ProjectItem 
title='Redux Toolkit'
 backgroundImg={reduxImg}
  projectUrl='/redux'
  />
  <ProjectItem 
title='Redux Toolkit'
 backgroundImg={reduxImg}
  projectUrl='/redux'
  />
    </div>
        </div>
    </div>
  )
}

export default Projects