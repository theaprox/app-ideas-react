import React from 'react'

const BinToDec = () => {
  return (
    <div className='flex-1 frow flex flex-col justify-center'>
      <h1 className='flex-none flex justify-center antialiased text-4xl font-black uppercase p-4'>
        Binary to Decimal
      </h1>
      <div className='flex-1 flex flex-col items-center p-4'>
        <div className='flex flex-col'>
          <input type='text' className='' placeholder='binary'></input>
        </div>
      </div>
    </div>
  )
}

export default BinToDec