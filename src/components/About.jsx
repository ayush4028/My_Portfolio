import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore animi impedit perspiciatis nemo. Veritatis, minus! In corrupti ducimus laboriosam voluptatibus provident ipsam vitae consequuntur! Cumque facilis neque quae! Natus quis repellat mollitia aliquam deserunt maxime placeat quasi aut deleniti libero hic optio, a officiis quisquam illo nulla expedita doloribus quidem?</p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis odit aliquid, eos dolorum sunt autem. Ratione mollitia quidem cum ipsum nobis doloremque illo voluptatum distinctio voluptates amet? Necessitatibus, sapiente iure distinctio ipsam impedit earum eaque consectetur soluta inventore. Necessitatibus sunt sequi tenetur sint impedit odio ipsam distinctio molestiae error?
            </p>
        </div>
    </div>
  )
}

export default About