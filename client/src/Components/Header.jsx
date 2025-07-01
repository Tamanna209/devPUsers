import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
const Header = () => {
  return (
    <div className='flex align-middle h-14 bg-violet-950 text-white justify-between'>
      <div className='flex align-middle ml-2 mt-1'>
        <p className='font-bold text-2xl text-amber-700'>Dev</p><p className='font-semibold text-xl mt-1'>Hub</p>
      </div>
      <div className='flex w-42 justify-around align-middle mt-2'>
        <Link to='/myPosts' className='mt-1 hover:text-gray-400'>My Posts</Link>
        <Link to='/login'><Button variant="outline" className='bg-white text-black hover:bg-amber-900 hover:text-white'>Login</Button></Link>
      </div>
    </div>
  )
}

export default Header
