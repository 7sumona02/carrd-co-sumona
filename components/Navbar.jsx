import { ChevronLeft, ChevronRight, Plus, RefreshCw, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-xs flex w-[32.8vw] relative'>
        <div className='flex gap-1 ml-2'>
            <div className='flex justify-center bg-muted p-1 text-neutral-600 rounded-full cursor-pointer border-2 border-neutral-400'>
                <ChevronLeft size={12} strokeWidth={3} />
            </div>
            <div className='flex justify-center bg-muted p-1 text-neutral-600 rounded-full cursor-pointer border-2 border-neutral-400'>
                <ChevronRight size={12} strokeWidth={3} />
            </div>
            <div className='flex justify-center bg-muted p-1 text-neutral-600 rounded-full cursor-pointer border-2 border-neutral-400'>
                <Plus size={12} strokeWidth={3} />
            </div>
            <div className='flex justify-center bg-muted p-1 text-neutral-600 rounded-full cursor-pointer border-2 border-neutral-400'>
                <RefreshCw size={12} strokeWidth={3} />
            </div>
        </div>
        <div className='searchbar flex items-center border-2 border-neutral-400 rounded-full px-2 pr-14 ml-3'>
              <Link href='/' className='text-neutral-600 font-semibold'>https://sumona.crd.co/</Link>
        </div>
        <div className='absolute right-2'>
          <div className='flex justify-center bg-muted p-1 text-neutral-600 rounded-full cursor-pointer border-2 border-neutral-400'>
                <Search size={12} strokeWidth={3} />
          </div>
        </div>
    </div>
  )
}

export default Navbar
