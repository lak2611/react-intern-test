import React from 'react'
import avt from '../../../images/upload-my-profile-3.png'
import locationIcon from '../../../images/location-gray-icon.png'
import premiere from '../../../images/creative-premiere-icon.png'
import photoshop from '../../../images/creative-photoshop-icon.png'
import illustrator from '../../../images/creative-illustrator-icon.png'
import { AiFillHeart, AiTwotoneEye } from 'react-icons/ai'
import { FaCommentAlt } from 'react-icons/fa'
import styled from 'styled-components'
import Button from '../../Shared/Button/Button'
import reportIcon from '../../../images/upload-report-icon.png'
const ModalFooterRight = ({data} : {data:any}) => {
  const Tag = styled.div`
    padding: 2px 8px;
    color: #ff2e43;
    border: 1px solid #ff2e43;
    min-width: fit-content;
    font-weight: bold;
    font-size: 14px;
  `
  return (
    <div style={{flex: 3, paddingTop: "50px", textAlign: "left"}}>
        <div className='px-4 pb-10'>
            <div className='mb-5'>Owner</div>
            <div className='flex'>
                <img className='mr-4' src={avt}/>
                <div>
                    <div>{data.username}</div>
                    <div className='flex items-center '>
                        <img  className='mr-2 h-3 center-icon' src={locationIcon}/>
                        <span>Korea, Republic of</span>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className='px-4 py-10'>
            <div className='font-bold text-base  mb-4'>The first portfolio movement</div>
            <div className='flex gap-4 mb-5'>
                <span className='flex gap-1 items-center'><AiFillHeart className='center-icon'/>18</span>
                <span className='flex gap-1 items-center'><AiTwotoneEye className='center-icon' size={18}/>18</span>
                <span className='flex gap-1 items-center'><FaCommentAlt className='center-icon' size={12}/>18</span>
            </div>
            <div>Publishing date : 2020.10.15</div>
        </div>
        <hr/>
        <div className='px-4 py-10'>
            <div className='mb-4'>Creative field</div>
            <div className='flex gap-1 flex-wrap'>
                <img src={premiere}/>
                <img src={photoshop}/>
                <img src={illustrator}/>
            </div>  
        </div>
        <hr/>
        <div className='px-4 py-10 flex gap-1 flex-wrap'>
            <Tag>Editing</Tag>
            <Tag>Camera action, Angle</Tag>
            <Tag>Sound, Beat</Tag>
            <Tag>Graphical </Tag>
            <Tag>Experimental</Tag>
            <Tag>Editing</Tag>
        </div>
        <hr/>
        <div className='px-4 py-10'>
            <Button variant='primary' width='100%'>
                <img height={12} width={12} src={reportIcon}/>
                <span>Report</span>
            </Button>   
        </div>
    </div>
  )
}

export default ModalFooterRight