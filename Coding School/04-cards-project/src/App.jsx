import React from 'react'
import Cards from './components/Cards'
const App = () => {
  const arr = [
    {
      user: 'shobhit',
      age: 24
    },
    {
      user: 'john',
      age: 30
    }, {
      user: 'doe',
      age: 22
    },
    {
      user: 'smith',
      age: 28
    }
  ];

  arr.map(function (elem) {
    console.log(elem.user);
  })
  return (
    <div className='parent' >

    </div>
  )
}

export default App
