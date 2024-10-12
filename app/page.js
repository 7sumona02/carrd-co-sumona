import IconTab from '@/components/IconTab'
import Pagination from '@/components/Pagination'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full bg-white'>
      <div className='flex justify-center items-center'>
        <div className='bg-neutral-600 h-[30vh] w-[34vw] mt-[34vh] rounded-sm'>
          <div className='mt-2 mr-2'>
            <IconTab />
          </div>
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
