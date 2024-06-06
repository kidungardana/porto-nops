import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
			<div className="flex flex-col gap-3 my-3 w-[1042px] mx-auto">
				{children}
			</div>
      <Footer/>
    </>
  )
}

export default Layout