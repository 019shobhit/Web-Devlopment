import React from 'react'

const RightCardContext = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500'>
            <h2 
                className='bg-white text-2xl font-bold rounded-full h-15 w-15 flex justify-center items-center transition-all duration-500 hover:rotate-360 hover:scale-110 shadow-lg'
                style={{
                    transform: props.isHovered ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                    animation: props.isHovered ? 'pulse 1s infinite' : 'none'
                }}
            >
                {props.id+1}
            </h2>
            <div className='transform transition-all duration-500' style={{
                transform: props.isHovered ? 'translateY(-10px)' : 'translateY(0)'
            }}>
                <p className='text-xl leading-normal text-white mb-10 transition-all duration-500 opacity-90 hover:opacity-100'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, necessitatibus.
                </p>
                <div className='flex justify-between gap-3'>
                    <button 
                        style={{backgroundColor: props.color}} 
                        className='text-white font-medium px-8 py-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:-translate-y-1 active:scale-95'
                    >
                        {props.tag}
                    </button>
                    <button 
                        style={{backgroundColor: props.color}} 
                        className='text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:translate-x-2 active:scale-95 group'
                    >
                        <i className='ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContext
