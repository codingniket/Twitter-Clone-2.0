import React from 'react'
import { BsSearch } from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs'
const Rightside = () => {
  return (
    <div className=' ml-8 mr-8  hidden xl:block w-[20rem] pt-4'>
    <div className='relative flex items-center w-full'>
    <div className='w-full'>
    <input className='w-full h-12 rounded-full pl-[3rem] relative bg-gray-100 outline-blue-400'
        placeholder='Search Twitter'
    />
    </div>

    <div className='absolute pl-4'>
    <BsSearch className=''/>
    </div>

    </div>

     {/* Trends  */}
     <div className='h-[30rem] bg-gray-100 rounded-[1rem]'>
       <div className='mt-6'>
         <p className='font-bold text-[20px] p-4'>Whats Happening</p>
       </div>
      <div className='' >
        <div className='h-12 '>
        <div className='flex items-center justify-between p-2'>

        <p className='text-sm'>Trending in India</p>
          <BsThreeDots/>
        </div>
          

          <div>
           <p className='font-bold text-[16px] pl-2'>Elon Musk</p>
           <p className='text-[10px] pl-2'>52621 Tweets</p>

            {/* Post 2 */}

      <div className='' >
        <div className='h-12 '>
        <div className='flex items-center justify-between p-2'>

        <p className='text-sm pt-5'>Trending in India</p>
          <BsThreeDots/>
        </div>
          

          <div>
           <p className='font-bold text-[16px] pl-2'>KL Rahul</p>
           <p className='text-[10px] pl-2'>4621 Tweets</p>
        </div>
          </div>
          
        </div>
        </div>
          </div>
          
        </div>
        
      </div>

     
    </div>
  )
}

export default Rightside