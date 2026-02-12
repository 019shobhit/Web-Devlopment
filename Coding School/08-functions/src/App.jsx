import React from 'react'

const App = () => {

  function inputTrack(){
    console.log('Input is changing')
  }

  return (
    <div>
      {/* <h1>Hello World</h1>
      <button onClick={btnClicked} onMouseEnter={mouseEtr}>click me</button>
      <button onClick={mouseEtr}>second Button</button> */}
      <input type="text" placeholder='Enter someting' onChange={inputTrack} />
    </div>
  )
}

export default App
