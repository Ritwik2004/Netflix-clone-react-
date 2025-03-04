import { useState } from 'react'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

function Nav() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full bg-black py-5 px-[6%] flex justify-between fixed text-sm text-gray-300 bg-linear-to-b from-black/70 via-transparent to-transparent font-poppins'>
        <div className='flex items-center gap-[50px]' >
          <img className='w-[90px]' src={logo} alt="Logo" />
          <ul className='flex list-none gap-[20px]'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>TV Shows</li>
            <li className='cursor-pointer'>New & Popular</li>
            <li className='cursor-pointer'>My List</li>
            <li className='cursor-pointer'>Browese by Languages</li>
          </ul>
        </div>
        <div className='flex gap-[20px] items-center'>
          <img src={search_icon} alt="Search" className='w-[20px] cursor-pointer'/>
          <p>Children</p>
          <img src={bell_icon} alt="Bell" className='w-[20px] cursor-pointer'/>
          <div className='flex items-center gap-[10px] cursor-pointer'>
            <img src={profile_img} alt="Profile pic" className='rounded-md'/>
            <img src={caret_icon} alt="" />
            <div className='absolute top-full right-0 w-max bg-[#191919] px-[18px] py-[22px] rounded-sm underline z-[1] hidden'>
              <p className='text-[13px] cursor-pointer'>Sign Out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
