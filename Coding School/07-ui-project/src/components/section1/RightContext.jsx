import React, { useEffect, useRef } from 'react'
import RightCard from './RightCard'

const RightContext = (props) => {
  const scrollRef = useRef(null)
  
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    
    let scrollAmount = 0
    const cardWidth = 280 + 20 // card width + gap
    const totalWidth = cardWidth * props.user.length
    
    const autoScroll = setInterval(() => {
      scrollAmount += 1
      scrollContainer.scrollLeft = scrollAmount
      
      // Reset when reaching the end
      if (scrollAmount >= totalWidth - scrollContainer.offsetWidth) {
        scrollAmount = 0
      }
    }, 30)
    
    // Pause on hover
    const handleMouseEnter = () => clearInterval(autoScroll)
    const handleMouseLeave = () => {
      const newAutoScroll = setInterval(() => {
        scrollAmount += 1
        scrollContainer.scrollLeft = scrollAmount
        if (scrollAmount >= totalWidth - scrollContainer.offsetWidth) {
          scrollAmount = 0
        }
      }, 30)
      scrollContainer.autoScrollInterval = newAutoScroll
    }
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)
    scrollContainer.autoScrollInterval = autoScroll
    
    return () => {
      clearInterval(autoScroll)
      if (scrollContainer.autoScrollInterval) {
        clearInterval(scrollContainer.autoScrollInterval)
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [props.user.length])
  
  return (
    <div 
      ref={scrollRef}
      id='right' 
      className='h-full flex flex-nowrap w-2/3 p-6 gap-5 overflow-auto scroll-smooth'
      style={{ scrollBehavior: 'smooth' }}
    >
      {props.user.map(function(elem,idx){
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} /> 
      })}
    </div>
  )
}

export default RightContext 
