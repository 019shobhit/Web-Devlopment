import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Herotest from './Herotest'
import Arrow from './Arrow'

const   LeftContext = () => {
    return (
        <div className='h-full w-1/3 flex flex-col justify-between'>
            <Herotest/>
            <Arrow/>
        </div>
    )
}

export default LeftContext
