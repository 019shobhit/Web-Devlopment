import React from 'react'
import LeftContext from './LeftContext'
import RightContext from './RightContext'

const Page1Context = (props) => {
  return (
    <div className='py-10 flex justify-between gap-5 px-18 h-[90vh] '>
      <LeftContext/>
      <RightContext user={props.user} />
    </div>
  )
}

export default Page1Context
