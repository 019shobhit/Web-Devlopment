import React from 'react'
import RightCard from './RightCard'

const RightContext = (props) => {
  console.log(props)
  return (
    <div className='h-full flex flex-nowrap w-2/3 p-6 gap-5 overflow-auto'>
      {props.user.map(function(elem){
        return <RightCard img={elem.img} tag={elem.tag} /> 
      })}
    </div>
  )
}

export default RightContext
