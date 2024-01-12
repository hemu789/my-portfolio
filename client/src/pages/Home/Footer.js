import React from 'react'

function Footer() {
  return (
    <div className='py-10'>

        {/* line  */}
      <div className='h-[1px] w-full bg-gray-700'>
      </div>

      {/* text  */}
      <div className='flex items-center justify-center flex-col mt-10 opacity-80'>
      <h1 className='text-white '>Designed & Developed By</h1>
        <h1 className='text-secondary'>Hemant Singh Bisht</h1>
      </div>
    </div>
  )
}

export default Footer
