import React from 'react'
import HeroImage from '../Images/HeroImage.jpg'
import { MdArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name = "home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold text-white '>I am a Frontend Developer</h2>
                <p className='text-gray-500 py-4 max-w-md '>
                🚀 Visionary Frontend Alchemist 🌟 | Merging code and creativity with JavaScript magic, React sorcery, and Redux wizardry. Let's conjure an enchanting digital realm together! 🎩✨
                </p>
                <div>
                    <button 
                    className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 cursor-pointer hover:scale-105'>
                        Portfolio 
                        <span className='group-hover:rotate-90 transition-all duration-300 '>
                            <MdArrowRight size={30}/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img 
                    src={HeroImage} 
                    alt="my Profile" 
                    className='rounded-2xl mx-auto w-2/3 md:w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default Home