import ProjectItem from './ProjectItem'
import React from 'react'
import reduxImg from '../public/assets/skills/redux.png';
import blogImg from '../public/assets/skills/blog.png';
import fullstackImg from '../public/assets/skills/fullstack.png';
import coachingImg from '../public/assets/skills/coaching.png';


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
title='Blog'
 backgroundImg={blogImg}
  projectUrl='/blog'
  />
  <ProjectItem 
title='Redux Toolkit'
 backgroundImg={fullstackImg}
  projectUrl='/redux'
  />
  <ProjectItem 
title='Redux Toolkit'
 backgroundImg={coachingImg}
  projectUrl='/redux'
  />
    </div>
        </div>
    </div>
  )
}

export default Projects