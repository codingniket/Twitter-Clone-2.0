import React from 'react'
import Input from './Input'
import Post from './Post'
import Post1 from './Post1'
import Post2 from './Post2'
import Navbar from './Navbar'
const Feed = () => {
  return (
    <div className='w-screen  mb-12 border max-w-[40rem] ml-20 md:ml-32 lg:ml-[25rem]'>
        {/* NavBar */}
         <Navbar/>
        {/* Input Field or the Compose Part of Tweet */}

        <div className='mt-14'>
        <Input />
        </div>

        {/* Post */}

        <Post1  />
        <Post2  />
        <Post  />

        {/* Right Side */}

       
    </div>
  )
}

export default Feed