import React from 'react'

const Card = (props) => {
    console.log(props);
    return (
        <div className='card'>
            <img src={props.img} alt="" />
            <h1>{props.user}</h1>
            <p>My age is {props.age} </p>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque corrupti mollitia molestiae unde.</p> */}
            <button>View Profile</button>
        </div>
    )
}

export default Card
