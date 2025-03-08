import React from 'react'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'



const Footer = ()=>{
    return(
        <div className='px-[4%] py-[30px] max-w-[1000px] mx-auto my-0'>
            <div className='flex gap-[20px] mx-0 my-[40px]'>
                <img className='w-[30px] h-[30px] cursor-pointer' src={facebook_icon} alt="" />
                <img className='w-[30px] h-[30px] cursor-pointer' src={instagram_icon} alt="" />
                <img className='w-[30px] h-[30px] cursor-pointer' src={twitter_icon} alt="" />
                <img className='w-[30px] h-[30px] cursor-pointer' src={youtube_icon} alt="" />
            </div>
            <ul className='grid '>
                <li className='text-white'>Audio Description</li>
                <li className='text-white'>Help Center</li>
                <li className='text-white'>Gift Cards</li>
                <li className='text-white'>Media Center</li>
                <li className='text-white'>Investor Relations</li>
                <li className='text-white'>Jobs</li>
                <li className='text-white'>Terms of Use</li>
                <li className='text-white'>Legal Notices</li>
                <li className='text-white'>Cookie Preferences</li>
                <li className='text-white'>Corporate Information</li>
                <li className='text-white'>Contact Us</li>
            </ul>
            <p className='text-white'>© 1997-2023 Netflix, Inc.</p>
        </div>
    )
}

export default Footer 