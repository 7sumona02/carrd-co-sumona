import { AlignJustify, Minus, X } from 'lucide-react'
import React from 'react'

const IconTab = () => {
  return (
    <div className='flex justify-end items-center gap-2'>
      <div className='flex justify-center bg-muted p-1 text-neutral-600 rounded-sm cursor-pointer'>
        <Minus size={12} strokeWidth={3} />
      </div>
      <div className='flex justify-center bg-muted p-1 text-neutral-600 rounded-sm cursor-pointer'>
        <AlignJustify size={12} strokeWidth={3} />
      </div>
      <div className='flex justify-center bg-muted p-1 text-neutral-600 rounded-sm cursor-pointer'>
        <X size={12} strokeWidth={3} />
      </div>
    </div>
  )
}

export default IconTab
