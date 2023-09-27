import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
<p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;S build something together</p>
<h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Clint</span>
          </h1>
          <h1 className=' py-2 text-gray-700'>
          A Front-End Web Developer
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>As a frontend developer building a dynamic web application, you&apos;re responsible for creating the user interface and user experience of the application.</p>
        <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
  <FaLinkedinIn />
</div>
<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
  <FaGithub />
</div>
<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
  <AiOutlineMail />
</div>
<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
  <B />
</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Main