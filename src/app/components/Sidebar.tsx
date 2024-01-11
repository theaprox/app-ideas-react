import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex-1 grow flex flex-col bg-black w-64 sidebar'>

      <div className='flex-none flex-col pb-8'>
        <h1 className='flex-none flex text-md uppercase antialiased font-black tracking-wide justify-center items-center h-20'>Project List</h1>
        <p className='flex-1 flex flex-col items-center text-fade-black-400'>
            Link tree to all projects
            <span className='text-fade-black-100 font-black text-3xl'>WIP</span>
        </p>
      </div>

      <div className='flex-1 flex-col flex items-center pl-4 pr-4'>
        <ul>
          <li><Link href='/'>- 🛖 Home</Link></li>
          <li><Link href='/page/BinToDec'>- 🔣 Binatry Decimal Translator</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar