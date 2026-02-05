import React, { useState } from 'react'
import RightCardContext from './RightCardContext'

const RightCard = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <div 
            className='h-full shrink-0 w-70 overflow-hidden relative rounded-4xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl group'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: isHovered ? 'scale(1.05) translateY(-10px)' : 'scale(1)',
                boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
        >
            <img 
                className='h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110' 
                src={props.img} 
                alt="" 
            />
            <RightCardContext id={props.id} color={props.color} tag={props.tag} isHovered={isHovered} />
        </div>
    )
}

export default RightCard
