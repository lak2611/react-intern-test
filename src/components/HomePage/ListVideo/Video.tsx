import React from 'react'
import { AiFillHeart, AiOutlineDown, AiTwotoneEye } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import profile1 from "../../../images/profile1.png"
import profile2 from "../../../images/profile2.png"
import profile3 from "../../../images/profile3.png"
import profile4 from "../../../images/profile4.png"
import { getVideoWidth, getViewportWidth } from '../../../utils/util'
import { setModalData } from '../../Modal/Modal/modalSlice'
const Video = ({data, index}:{data:any, index: number}) => {
  //profile image
  let profile = undefined;
  switch (index%5) {
    case 0:
        profile=profile1
        break;
  
    case 1:
        profile=profile2
        break;
  
    case 2:
        profile=profile2
        break;
  
    case 3:
        profile=profile3
        break;
    case 4:
        profile=profile4
        break;
  
    default:
        break;
  }
  // name
  const nameList = ['Kim Aeyong', 'Kim Jimin', 'Im Junghang', 'Cayley', 'Hamilton']
  let name = nameList[index%5];
  if (index===1) name = "Mulltiple owner"
  //open modal
  const dispatch = useDispatch()
  const openModal = () => { 
    dispatch(setModalData({title: data.title, username: name, backgroundImage: data.background_image}))
  }
  return (
    <div key={index} style={{minWidth: `${getVideoWidth()}px`, overflow: "hidden"}}>
        <img className='cursor-pointer' onClick={openModal} src={data?.background_image} style={{width: "360px", height: "204px"}}/>
        <div className='flex justify-between mb-11 text-xs mt-2'>
            <div className='flex items-center '>
                <img className='mr-1' src={profile} width="16"/> {name}
                {index===1?<AiOutlineDown className='ml-1'/>:null}
            </div>
            <div className='flex'>
                <div className='flex items-center mr-4'><AiFillHeart size={20}/>18</div>
                <div className='flex items-center'><AiTwotoneEye size={20}/>18</div>
            </div>
        </div>
    </div>
  )
}

export default Video