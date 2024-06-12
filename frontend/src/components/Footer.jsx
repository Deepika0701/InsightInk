import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='mt-8 w-full bg-black px-8 md:px-[500px] md:flex-row flex-col space-y-4 md:space-y-0 items-start  flex justify-between text-sm md:text-md py-8'>
      <div className='flex flex-col text-white '>
        <p>Featured blogs</p>
        <p>Most viewed</p>
        <p>Readers choice</p>
      </div>
      <div className='flex flex-col text-white '>
        <p>Forum</p>
        <p>Supports</p>
        <p>Recent Posts</p>
      </div>
      <div className='flex flex-col text-white '>
        <p>Privacy Policy</p>
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Terms of Services</p>
      </div>
    </div>
    <p className='py-2 pb-2 text-center text-white bg-black'>
      All rights reserved &copy; Insight Ink
    </p>
    </>

  )
}

export default Footer
