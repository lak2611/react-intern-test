import React from 'react'
import ModalFooterLeft from './ModalFooterLeft'
import ModalFooterRight from './ModalFooterRight'

const ModalFooter = ({data} : {data:any}) => {
  return (
    <div className='flex lg:flex-col'>
        <ModalFooterLeft/>
        <hr className='hidden lg:block' />
        <ModalFooterRight data={data}/>
    </div>
  )
}

export default ModalFooter