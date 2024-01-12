import Link from 'next/link'
import React from 'react'


const Sidebar = () => {
  return (
    <>
    
      <div className='tw-flex-1 tw-grow tw-hidden md:tw-flex tw-flex-col tw-bg-black tw-w-64 sidebar'>

        <div className='tw-flex-none tw-flex-col tw-pb-8'>
          <h1 className='tw-flex-none tw-flex tw-text-md tw-uppercase tw-font-black tw-tracking-wide tw-justify-center tw-items-center tw-h-20'>Project List</h1>
          <p className='tw-flex-1 tw-flex tw-flex-col tw-items-center tw-text-fade-black-400'>
              Link tree to all projects
              <span className='tw-text-fade-black-100 tw-font-black tw-text-3xl'>WIP</span>
          </p>
        </div>

        <div className='tw-flex-1 tw-flex-col tw-flex tw-items-center tw-p-0'>
          <ul className='tw-w-full'>
            <li className='tw-pl-4 tw-pr-2'><Link href='/'>🛖 Home</Link></li>
            <hr className='tw-relative tw-w-full tw-mt-4 tw-mb-4 tw-border-fade-black-100'></hr>
            <p className='tw-m-4 tw-text-sm tw-uppercase'>Level 1 - beginner</p>
            <li className='tw-pl-4 tw-pr-2'><Link href='/page/BinToDec'>🔣 Bin 2 Dec</Link></li>
          </ul>
        </div>

      </div>

    </>
  )
}

export default Sidebar