import { useState } from 'react'
import Nav from '../../components/Navbar/nav'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/Titlecards/TitleCard'
import Footer from '../../components/Footer/Footer'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='h-screen w-full p-0 m-0 bg-black box-border' style={{ backgroundColor: 'black' }}>
                <Nav />
                <div className='relative bg-black'>
                    <img src={hero_banner} alt="" className='w-full [mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,0.75))] [-webkit-mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,0.75))]' />
                    <div className='absolute w-full pl-[6%] bottom-0'>
                        <img src={hero_title} alt="" className='w-[90%] max-w-[420px] mb-[30px]' />
                        <p className='text-white max-w-[700px] text-[17px] mb-[20px]'>Discovering his ties to a sector ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                        <div className='flex gap-[10px] mb-[50px]'>
                            <button className='h-[50px] border-0 outline-0 py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] bg-white rounded-[5px] cursor-pointer hover:bg-[#ffffffbf]'><img className='w-[25px]' src={play_icon} alt="Play icon" />Play</button>
                            <button className='h-[50px] border-0 outline-0 py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] rounded-2xl cursor-pointer text-white bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]'><img className='w-[25px]' src={info_icon} alt="info icon" />More info</button>
                        </div>
                        <TitleCard/>
                    </div>
                </div>
                <div className='pl-[6%] bg-black'>
                <TitleCard title={"Blockbuster Movies"}/>
                <TitleCard title={"Only on Netflix"}/>
                <TitleCard title={"Upcoming"}/>
                <TitleCard title={"Top Pics for you"}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Home
