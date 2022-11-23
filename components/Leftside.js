import React from 'react'
import Image from 'next/image'
import Twitter from '../assets/Twitter.png'
import {RiHome7Fill} from 'react-icons/ri';
import {BsSearch} from 'react-icons/bs';
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiMessageRounded} from 'react-icons/bi'
import {BsBookmark} from 'react-icons/bs'
import {BsList} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'
import {BsPencilSquare} from 'react-icons/bs'
import profile from '../assets/profile.jpg'
// items-center pb-4 
const Leftside = () => {
  return (
    <div>
        <div className=' fixed flex flex-col justify-between pt-4 w-20  h-screen md:w-40 lg:w-72 lg:pl-20 '>
         <div className=''>
           <ul className='w-full  space-y-5 flex flex-col items-center justify-center lg:justify-start lg:items-start'>
            <li>
             <div className='h-9 w-9'>
                <Image src={Twitter} alt={'logo'}/>
             </div>
            </li>

            <li>
            <div className='flex'>
            <div>
                <RiHome7Fill className='h-7 w-7'/>
             </div>
             <div className='hidden lg:flex'>
               <p className=' pl-5 text-[20px]'>Home</p>
             </div>
            </div> 
            </li>

            <li>
            <div className='flex'>
            <div>
                <BsSearch  className='h-7 w-7 '/>
             </div>
             <div className='hidden lg:flex'>
               <p className = ' pl-5 text-[20px]'>Explore</p>
             </div>
            </div>
            </li>

            <li>
            <div className='flex'>
            <div>
                <IoMdNotificationsOutline className='h-7 w-7'/>
             </div>
             <div className='hidden lg:flex'>
               <p className = ' pl-5 text-[20px]'>Notification</p>
             </div>
            </div>
            
            </li>

            <li>
            <div className='flex'>
            <div>
                <BiMessageRounded className='h-7 w-7 '/>
             </div>
             <div className='hidden lg:flex'>
               <p className = ' pl-5 text-[20px]'>Messages</p>
             </div>
            </div>
            </li>

            <li>
            <div className='flex'>
            <div>
                <BsBookmark className='h-7 w-7 '/>
             </div>
             <div className='hidden lg:flex'>
               <p className = ' pl-5 text-[20px]'>Bookmarks</p>
             </div>
            </div>

            </li>

            <li>
             <div className='flex'>
             <div>
                <BsList className='h-7 w-7 '/>
             </div>
             <div className='hidden lg:flex'>
               <p className = ' pl-5 text-[20px]'>Lits</p>
             </div>
             </div>
            </li>

            <li>
               <div className='flex'>
               <div>
                <CgProfile className='h-7 w-7 '/>
             </div>
             <div className='hidden lg:flex'>
               <p className = 'pl-5 text-[20px]'>Profile</p>
             </div>
               </div>
            
            </li>

            <li>
             <div className='flex'>
             <div>
                <HiOutlineDotsCircleHorizontal className='h-7 w-7 '/>
             </div>
             <div className='hidden lg:flex'>
               <p className = ' pl-5 text-[20px]'>Others</p>
             </div>
             </div>
            </li>

            <li>
             <div>
                <BsPencilSquare className='lg:hidden h-12 w-12 bg-blue-400 rounded-full p-3'/>
             </div>
             <div className='hidden lg:flex w-52 h-10 items-center justify-center'>
             <p className='font-bold text-white bg-blue-400 w-full h-full p-2 rounded-full text-center items-center justify-center flex text-[20px]'>Tweet</p>
             </div>
            </li>

           </ul>
         </div>
         {/* Profile Icon on left Side */}
         <div className='flex items-center justify-center h-14 mb-8 lg:justify-start'>
         <div className='flex rounded-full justify-center lg:justify-start'>
          <Image src={profile} alt={"profile pic"} className=' rounded-full object-cover w-14 h-14'/>
        </div>
        <div className="hidden lg:flex h-full flex-col items-center justify-center pl-8">
         <p className='font-bold'>Created by</p>
         <p>@Niket</p>
        </div>
         </div>
        
        </div>
    </div>
  )
}

export default Leftside