import React from 'react'
import heroImg from './assets/dream_card.jpg'

const HomePage = () => {
  return (
    <main className='
    flex
    flex-col
    md:flex-row
    mt-3 
    justify-between
    '>
        <div className='
        flex
        w-full 
        md:w-1/2
        h-1/2
        flex-col
        p-16
        md:p-32
        '>
                <p className='
                flex 
                justify-center
                '>Frontend Developer</p>
                
                <p className='flex mt-1/2 justify-center text-xsm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam sit est doloribus harum quas sequi minus nam. Quis aliquid asper
                </p>
        </div>
        <div className='
        w-full 
        p-8
        md:w-1/2
        max-h-screen
        md:h-screen
        
        '
        >
        <img className =' 
        h-full 
        w-full
        mx-auto
        my-auto
        object-container
        ' src= {heroImg} alt="hero_image" />
        </div>
      
    </main>
  )
}

export default HomePage