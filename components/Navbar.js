import React from 'react'
import {BsStars} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className= 'fixed flex items-center justify-between w-[calc(100vw-6rem)] md:w-[40rem] max-w-[40rem] p-3 bg-white/[0.95] h-14 border-r'>
        <p className='font-bold text-[20px] opacity-100'>Home</p>
        <div className='opacity-100'>
        <BsStars  className='w-6 h-6' />
        </div>
        
    </div>
  )
}

export default Navbar