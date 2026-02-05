import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Satisfied',
      color: 'red'
    },
    {
      img: 'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underserved',
      color: 'blue'
    },
    {
      img: 'https://thumbs.dreamstime.com/b/serious-indian-business-man-working-studying-laptop-computer-young-professional-focused-ethnic-male-student-wearing-glasses-214010622.jpg',
      intro: '',
      tag: 'Underbanked',
      color: 'green'
    },
    {
      img: 'https://www.shutterstock.com/image-photo/professional-woman-diligently-working-modern-600nw-2615978875.jpg',
      intro: '',
      tag: 'Bevakoof',
      color: 'yellow'
    },
    {
      img: 'https://img.freepik.com/free-photo/business-woman-working_1303-3856.jpg',
      intro: '',
      tag: 'Noething',
      color: 'pink'
    }
  ]

  return (
    <div>
      <Section1 user={users} />
      <Section2 />
    </div>
  )
}

export default App
