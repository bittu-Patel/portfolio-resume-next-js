import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Bittu Patel</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/bittu-kumar-98ab54244/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/bittu-Patel'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
         
        </div>
        <p className='font-bold'>Address:</p>
        <p>Dawanpur,Karwandiya,Sasaram,Rohtas (BIHAR)
          <span>PIN CODE []</span>
        </p>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            iarani.ai
            </span>
            <span className='px-2'>|</span>New Delhi / Gurugram
          </p>
          <p className='py-1 italic'>Front End Web Developer (2023- Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
             Learning Web Development
            </span>
            <span className='px-2'>|</span>New Delhi / Gurugram
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2022 I started 
               learning in web development, specifically
              front-end development.
            </li>
            <li>
            This involves creating the user interface and user experience (UI/UX) of a website.
             It encompasses HTML, CSS, JavaScript, and various libraries and frameworks like ReactJS, NextJS.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SASARAM, BIHAR</span>
            <span className='px-2'>|</span>DAWANPUR,SASARAM, PINCODE [821305] ,(BIHAR)
          </p>
          <p className='py-1 italic'>CRICKETER</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            The opening batsman holds a critical position in a cricket team&#39;s 
            batting order. They are entrusted with the responsibility of facing the first ball of the innings, 
            setting the tone,
             and laying the foundation for the rest of the batting lineup.
            </li>
            <li>
            One of the primary responsibilities of an opener is to face the new ball.
             This is a crucial phase of the game where the ball is at its hardest,
              and bowlers are at their freshest. It requires a combination of technical skill,
               focus, and mental fortitude.
            </li>
            <li>
            The opener&#39;s role often extends beyond individual performance.
             They are expected to form a strong opening partnership with their fellow batsman.
              This partnership sets the platform for the middle order to build upon.
            </li>
            <li>
            Opening batsmen frequently encounter challenging conditions,
             including swing, seam movement, and variable bounce.
              It is imperative for them to have a solid technique 
              and quick reflexes to handle these variations effectively.
            </li>
            <li>
            While individual performance is important, openers are also team players.
             They understand the significance of forming strong partnerships and contributing
              to the team&#39;s overall success.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;