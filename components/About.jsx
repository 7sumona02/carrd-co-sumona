import React from 'react'

const About = () => {
  return (
    <div className='flex'>
        <div className='flex flex-col  items-center px-2'>
            <img src='/pfp.jpg' alt='pfp' className='w-20 border-2 border-neutral-400 rounded-sm' />
            <p className='text-neutral-600 text-[10px] font-semibold mt-[1.4px]'>@yoake</p>
        </div>
        <div className='text-xs text-neutral-600 flex gap-10 ml-4'>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold'>name <span className='font-medium ml-4'>sumona</span></p>
                <p className='font-semibold'>age <span className='font-medium ml-4'>twenty two</span></p>
                <p className='font-semibold'>pronouns <span className='font-medium ml-4'>she/her</span></p>
                <p className='font-semibold'>country <span className='font-medium ml-4'>india</span></p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold'>mbti <span className='font-medium ml-4'>intj</span></p>
                <p className='font-semibold'>links <span className='font-medium ml-4 underline'>instagram</span> <span className='font-medium underline'>spotify</span><br /> <span className='font-medium underline'>pinterest</span> <span className='font-medium underline'>youtube</span></p>
                <p className='font-semibold'>credits <span className='font-medium ml-4'>lovjbini</span></p>
            </div>
        </div>
    </div>
  )
}

export default About
