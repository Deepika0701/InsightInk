import React from 'react'

const HomePosts = () => {
  return (
    <div className='w-full flex mt-8 space-x-4'>
      {/* left  */}
      <div className='w-[35%] h-[200px] flex justify-center items-center'>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-get-certified-in-Artificial-Intelligence.jpg" alt="" className='h-full w-full object-cover'/>

      </div>
      {/* right  */}
      <div className='flex flex-col w-[65%]'>
        <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
          10 Uses of Artificial Intelligence in Day to Day Life
        </h1>
        <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4 '>
          <p>deepika@gmail.com</p>
          <div className='flex space-x-2'>
            <p>16/06/2024</p> 
            <p>16:23</p></div>
        </div>
<div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non praesentium similique accusamus veniam sunt eius cupiditate autem voluptatum error, tenetur quas amet, quod, repudiandae quis rerum esse est itaque ut.
  Beatae exercitationem nihil laboriosam reiciendis magnam aspernatur voluptates doloremque minima facilis omnis! Amet omnis necessitatibus quia non nobis consectetur expedita dolor nihil! Rem officia voluptatibus quia ab fugiat possimus non?
</div>
      </div>
    </div>
  )
}

export default HomePosts
