import React from 'react'
import style from './style.module.css'
import turtorialImg from '../../../images/tutorial-img-1.png'
import SmallVideo from './SmallVideo'
import turtorialImg2 from '../../../images/tutorial-img-2.png'
import turtorialImg3 from '../../../images/tutorial-img-3.png'
import turtorialImg4 from '../../../images/tutorial-img-4.png'
import playIcon from '../../../images/play-icon.png'
import liveBox from '../../../images/live-box.png'
import { getViewportWidth } from '../../../utils/util'
const Turtorial = () => {
  return (
    <div className='flex py-16 px-10 items-center gap-5 absolute left-0' style={{backgroundColor: "#efefef", position: getViewportWidth()<1024?"static":"absolute", minWidth: "100vw", flexDirection: getViewportWidth()<1024?"column":"row"}}>
        <div className='flex-1 flex-col items-start text-left justify-between' style={{maxWidth: getViewportWidth()<1024?"526px":"1000px"}}>
            <div className='text-lg'>TURTORIAL</div>
            <div className='text-4xl'>Let's look at 7 ways to use motion trend more effectively in the first turtorial.</div>
            <div><button className={style.btn}>Watch now</button></div>
        </div>
        <div className='flex-1 flex justify-center' >
            <div className='w-fit relative'>
                <img src={turtorialImg} className='relative'/>
                <img src={playIcon} className='center-position'/>
                <img src={liveBox} className='absolute' style={{top: "10px", left: "-10px"}}/>
                <div className='bg-black w-fit text-white px-1 absolute right-2 bottom-2'>02:33</div>
            </div>
        </div>
        <div className='flex-1 flex flex-col justify-between h-full gap-2'>
            <SmallVideo img={turtorialImg2}/>
            <SmallVideo img={turtorialImg3}/>
            <SmallVideo img={turtorialImg4}/>
        </div>
    </div>
  )
}

export default Turtorial