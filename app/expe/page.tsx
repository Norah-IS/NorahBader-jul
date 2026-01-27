import React from 'react'
import List from '../components/List'
import Footer from '../components/Footer'

export default function Experience() {
  return (
    <div>
      <br/>
        <div><List/></div>
        <br/>
        <br/>
        <div className='p-3.5 my-3.5 bg-neutral-200 text-2xl hover:bg-neutral-300'>
          <h1>Courses</h1>
        </div>
        <div>
          <h1>Universti Clubes</h1>
        </div>
        <div>
          <h1>Unieversti Counsels</h1>
        </div>
        <div><Footer/></div>
    </div>
    
  )

}

