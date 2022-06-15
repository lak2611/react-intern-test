import React from 'react'
import { AiFillHeart, AiTwotoneEye } from 'react-icons/ai'

const SmallVideo = ({img}:{img: any}) => {
  return (
    <div className='flex flex-1' style={{height: "90px"}}>
        <img src={img} className='mr-4'/>
        <div className='flex flex-col justify-between text-left'>
            <div className='text-lg'>Turtorial</div>
            <div className='text-xs'>A turtorial video with Motion Trend. Let's Learn Motion Trends.</div>
            <div className='flex text-xs'>
                <div className='flex items-center mr-4'><AiFillHeart size={20}/>18</div>
                <div className='flex items-center'><AiTwotoneEye size={20}/>18</div>
            </div>
        </div>
    </div>
  )
}

export default SmallVideo