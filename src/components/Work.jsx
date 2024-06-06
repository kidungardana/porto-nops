import React from 'react'

const Work = () => {
  return (
    <div className='flex justify-center items-center w-[1042px] h-[881px] mx-auto border-[1px] border-black rounded-xl p-5'>
			<div className='flex flex-col items-center gap-5'>
        <div>
            <img src="/laptop.png" alt="" />
        </div>
        <div className='flex justify-between px-14'>
					<div className='w-[50%]'>
						<p className='text-[3rem] text-[#F6511D]'>Gadang Berlian Platform Redesign</p>
						<p className='font-bold'>UX Rsearcher, UI Designer</p>
						<p className='font-bold'>Jan 2023 - May 2023</p>
					</div>
					<div className='w-[50%] flex flex-col gap-2'>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, tenetur. Vero consequuntur aspernatur itaque tempore quo eum alias iure, veniam, fugit nemo sit laborum vel at expedita doloribus, ullam culpa!</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, tenetur. Vero consequuntur aspernatur itaque tempore quo eum alias iure, veniam, fugit nemo sit laborum vel at expedita doloribus, ullam culpa!</p>
					</div>
        </div>
			</div>
    </div>
  )
}

export default Work