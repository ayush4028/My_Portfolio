import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs' 

const Sociallinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/ayush-singh-33721224a/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/ayush4028'
      
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto: ayushsingh00030@gmail.com',
      
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true
    }
    
    
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
      <ul>
        {links.map(({id,child,href,style,download}) =>(
          <li key={id} className={"flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300" + " " + style}>
            <a 
              href={href} 
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel='noreferrer'
            > 
              {child}
            </a>
          </li>
        ))}
        
      </ul>
    </div>
  )
}

export default Sociallinks