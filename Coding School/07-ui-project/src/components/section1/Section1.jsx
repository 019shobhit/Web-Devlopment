import React from 'react'
import NavBar from './NavBar'
import Page1Context from './Page1Context'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <NavBar />
      <Page1Context user={props.user}/>
    </div>
  )
}

export default Section1
