'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const Rules = ({ isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo('.box', 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.4, ease: "power1.out" }
      );
    }
  }, [isVisible]); // Run animation when isVisible changes

  return (
    <div className='flex cursor-pointer'>
        <div className='flex flex-col  items-center px-2'>
            <img src='/pfp.jpg' alt='pfp' className='w-20 border-2 border-neutral-400 rounded-sm' />
            <p className='text-neutral-600 text-[10px] font-semibold mt-[1.4px]'>@yoake</p>
        </div>
        <div className='text-xs text-neutral-600 flex gap-10 ml-4'>
            <div className='flex flex-col gap-1 box'>
                <p className='font-semibold'>name <span className='font-medium ml-4'>sumona</span></p>
                <p className='font-semibold'>dob <span className='font-medium ml-4'>26 jul</span></p>
                <p className='font-semibold'>pronouns <span className='font-medium ml-4'>she/her</span></p>
                <p className='font-semibold'>country <span className='font-medium ml-4'>india</span></p>
            </div>
            <div className='flex flex-col gap-1 box'>
                <p className='font-semibold'>mbti <span className='font-medium ml-4'>intj</span></p>
                <p className='font-semibold'>zodiac <span className='font-medium ml-4'>scorpio asc,<br /> aquarius moon</span></p>
                <p className='font-semibold'>links <Link href='/' className='font-medium ml-4 underline'>discord</Link> <Link href='/' className='font-medium underline'>instagram</Link><br /> <Link href='/' className='font-medium underline'>pinterest</Link> <Link href='/' className='font-medium underline'>youtube</Link></p>
            </div>
        </div>
    </div>
  );
};

export default Rules;