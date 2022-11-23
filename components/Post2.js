import React from 'react'
import {AiFillMessage} from 'react-icons/ai'
import Image from 'next/image'
import Profile from '../assets/profile.jpg'
import Pro from '../assets/Pro.jpg'
import {BsChat} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineRetweet} from 'react-icons/ai'
import {AiOutlineShareAlt} from 'react-icons/ai'

const Post2 = () => {
  return (
    <div className=' hover:bg-gray-200 ease-out duration-200 px-6 border'>
      <div className='flex'>
      <div className=''>
        <div className='flex items-center p-3 ml-3'>
          <AiFillMessage className=''/>
          <p className='pl-3'>Popular images</p>
        </div>
      </div>
    </div>

     {/* Actual Post  */}

     <div className=' flex items-center space-x-3 pt-4'>
      <div className='ml-1 flex w-12 h-12'>
        <Image src={Profile} alt={"pic"} className='object-cover rounded-full'/>
      </div>
      <div className=''>
      <div className='flex'>
       <p className='font-bold'>Niket</p>
       <p className='pl-2'>@createdby</p>
       <span className='pl-2 pr-2 text-gray-500'>&#8226;</span>
       <p className='text-gray-500'>1hr</p>
      </div>
      <div className=''>
        <p>Mujhe sa achha batting ki acting kaun karaga</p>
      </div>
      </div>
     
    </div>
     {/* The Image of the post */}

     <div className='pt-5 px-6 pl-12'>
      <div className=''>
        <Image src={Pro} alt={"post"} className='rounded border'/>
      </div>
    </div>

     {/* Post Button */}
     <div className='pb-5'>
      <ul className='flex justify-between px-12 pt-4'>
        <li className='flex justify-between items-center'>
          <BsChat className='w-4 h-4 shrink-0'/>
          <p className='pl-3'>10k</p>
        </li>
        <li className='flex justify-between items-center'>
          <AiOutlineHeart className='w-4 h-4  shrink-0'/>
          <p className='pl-3'>55k</p>
        </li>
        <li className='flex justify-between items-center'>
          <AiOutlineRetweet className='w-4 h-4  shrink-0'/>
          <p className='pl-3'>1.4M</p>
        </li>
        <li className='flex justify-between items-center'>
          <AiOutlineShareAlt className='w-4 h-4  shrink-0'/>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Post2