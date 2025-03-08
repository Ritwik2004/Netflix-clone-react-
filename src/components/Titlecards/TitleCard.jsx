import React, { useEffect, useRef } from 'react'
import cards_data from '../../assets/cards/Cards_data'


const TitleCard = ({title,catagory})=>{

    const cardsRef = useRef();
const handlewheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handlewheel);
},[])
    return(
        <div className='mt-[50px] mb-[30px]'>
            <h2 className='mb-[8px] text-white'>{title?title:"Popular on Netflix"}</h2>
            <div className='flex gap-[10px] overflow-scroll card-list' ref={cardsRef}>
                {cards_data.map((card,index)=>{
                    return <div className='relative' key={index}>
                        <img className='max-w-[240px] rounded-[4px] cursor-pointer' src={card.image} alt="" />
                        <p className='text-white absolute b-[10px] r-[10px]'>{card.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCard