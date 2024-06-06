import React from 'react'

const About = () => {
  return (
		<>
		<div className='border-black border-[1px] w-[1042px] h-[395px] rounded-xl flex justify-center'
		style={{
			backgroundImage: "url('/&&.png')",
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		}}
		>
			<div className='flex items-center justify-between '>
				<div className='w-[50%] flex item-center justify-center text-6xl font-bold'>About Me</div>
				<div className='w-[50%] flex item-center justify-center pr-[20px]'>Passionate UI/UX Designer whom loves to create an engaging digital experience. Skilled in User Research, System Analysis and Proposing Effective Design Solutions. Also proficient in other areas such as Graphic Design and Digital Imaging.</div>
			</div>
    </div>
		<div className='border-black border-[1px] w-[1042px] h-[196px] rounded-xl flex justify-center items-center'>
			<p className='text-4xl font-bold'>naufalalghifaryid@gmail.com</p>
		</div>
		</>
  )
}

export default About