import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-10 items-center w-[1042px] border-[1px] border-black rounded-full mx-auto mt-5'>
      <p>Work</p>
      <img className='w-[50px]' src="/logo.png" alt="" />
      <p>About</p>
    </div>
  )
}

export default Navbar