import React from 'react'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <div className='flex justify-center gap-10 items-center w-[1042px] border-[1px] border-black rounded-full mx-auto mb-5 py-6'>
      <Icon className='text-xl' icon="mdi:linkedin" />
      <Icon className='text-xl' icon="bi:behance" />
      <Icon className='text-xl' icon="foundation:mail" />
    </div>
  )
}

export default Footer