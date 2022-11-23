import React from 'react'
import Image from 'next/image'
import Profile from '../assets/profile.jpg'
import {BsImages} from 'react-icons/bs'
import {AiOutlineFileGif} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {BsFillEmojiLaughingFill} from 'react-icons/bs'

const Input = () => {
  return (
    <div>
      <div className='flex items-center p-4 pt-4'>
      <div className='w-14 h-14 flex ml-2'>
        <Image src={Profile} alt={"kuch nahi"} className='object-cover rounded-full' />
      </div>
      {/* To display "Tell us something" */}
      <div className='pl-4'>
        <input type="text"
          placeholder="What's Happening ?" className="text-[18px]"
        />
      </div>
      </div>
      <div className='pl-20 flex items-center border-b justify-between pr-4 pb-4'>
         <ul className='flex space-x-4'>
           <li><BsImages className='text-blue-400'/></li>
           <li><AiOutlineFileGif className='text-blue-400' /></li>
           <li><FaMapMarkerAlt className='text-blue-400' /></li>
           <li><BsFillEmojiLaughingFill className='text-blue-400'/></li>
         </ul>
      <div className=''>
        <button className='bg-blue-300 text-white rounded-full p-2 px-5'>Tweet</button>
      </div>
    </div>
    </div>
    
  )
}

export default Input