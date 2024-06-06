import React from 'react'
import { Icon } from '@iconify/react'

const Intro = () => {
  return (
    <div 
    	className='w-[1042px] h-[650px] mx-auto border-[1px] border-black rounded-xl p-10 flex flex-col justify-end'
			style={{
        backgroundImage: "url('/&.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
		>
			
			
			<p className='text-[5rem] flex items-center'>
			<Icon className='mt-2 text-[#F6511D]' icon="uim:arrow-up-right" /> 
				Naufal Alghifary
			</p>
			<p className='text-[4rem]'>A <span className='text-[#F6511D]'>User Interface</span> Designer</p>
		</div>

		
  )
}

export default Intro