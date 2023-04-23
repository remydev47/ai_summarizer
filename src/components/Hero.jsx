import React from 'react'

import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full justify-center items-center flex-col'>
      <nav className='flex justify-between items-center flex-col'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>
        <button
          type='button' 
          className='black_btn'
          onClick={() => window.open('http://github.com/remydev47')}
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>Open-AI GPT-4 </span>
      </h1>
      <h2 className='desc'>
       Simplify Your Articles with Summarizer, an 
       open source article Summarizer that 
       transforms your Lengthy articles 
       into clear and concise summaries
      </h2>

    </header>
  )
}

export default Hero;