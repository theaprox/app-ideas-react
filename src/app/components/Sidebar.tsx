import Link from 'next/link'
import React from 'react'


const Sidebar = () => {
  return (
    <>
    
      <div className='flex-1 grow hidden md:flex flex-col bg-black w-64 sidebar'>

        <div className='flex-none flex-col pb-8'>
          <h1 className='flex-none flex text-md uppercase antialiased font-black tracking-wide justify-center items-center h-20'>Project List</h1>
          <p className='flex-1 flex flex-col items-center text-fade-black-400'>
              Link tree to all projects
              <span className='text-fade-black-100 font-black text-3xl'>WIP</span>
          </p>
        </div>

        <div className='flex-1 flex-col flex items-center p-0 text-fade-white-400'>
          <ul className='w-full'>
            <li className='pl-4 pr-2'><Link href='/'>🛖 Home</Link></li>
            <hr className='relative w-full mt-4 mb-4 border-fade-black-100'></hr>
            <p className='m-4 text-sm uppercase'>Level 1 - beginner</p>
            <li className='pl-4 pr-2'><Link href='/page/BinToDec'>🔣 Bin 2 Dec</Link></li>
          </ul>
        </div>

      </div>

      <div className='flex flex-1 flex-col md:hidden'>
        small sidebar
      </div>

    </>
  )
}

export default Sidebar