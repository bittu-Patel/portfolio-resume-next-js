import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2  flex items-center py-16'>
        <div className='max-w-[1240] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>

                <h2 className='py-4'>Who I Am</h2>

                <p className='py-2 text-gray-600'>I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.</p>
            <p className='uppercase py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
            <p className='py-2 text-gray-600'>
            I started web developement in 2023 managing multiple e-commerce
            websites on CMS platforms  
            . I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
          <p>Check out of my some latest project</p>
    </div>
            <div>
              <img src='https://a.ilovecoding.org/thumb/api2-2-crud.png' alt='/' /
            </div>
        </div>
    </div>
  )
}

export default About