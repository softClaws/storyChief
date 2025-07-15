import React from 'react'

export const IdeaForm = ({handleForm}) => {
  return (
    <form action={handleForm} className='flex gap-2 items-center justify-center bg-[#EFEEEA] p-5 h-1/2 '>
      <label htmlFor="storyLine" className='font-playwright text-base
      md:text-md'> Idea  </label>
      <textarea 
      id="storyLine" 
      type="text"
      placeholder='Story story'
      className=" 
      px-1
      mx-1
      flex-grow
      max-w-2/3
      text-center
      font-playwright
      "
    // required
      name="userStory"/>
      

  
      <button className =" rounded-xl 
      my-1 
      bg-gray-50 
      w-20 hover:shadow-lg font-roboto"> Generate </button>
      
      {/* {console.log(userData)} */}
      </form>
  )
}
