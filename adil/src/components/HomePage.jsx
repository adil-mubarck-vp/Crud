import React from 'react'
import Nav from './Nav'
import bodyimg from '../fanta-left.png'
import "./css/body.css"


function HomePage() {
  return (
    <div>
      <Nav />
      <div className='body-parent'>

        <div className='body-left'>
          <h1>Dream. <span>Build </span>.Launch </h1>
          <p>We Are Fantacode,the right destination to build your dreams into reality.We build your dream product integrating our services. </p>
          <button className='btn'>LETS BUILD</button>
        </div>


        <div className='body-right'>
        <img src={bodyimg} alt="Loading...." />
        </div>
        
      </div>

      <div className='body-down'>
      <h1>About Us</h1>
        <p>Started from the hostel room of our college, Fantacode have been actively involved in bringing ideas into products. Having brilliant ideas is not always enough. Meeting the right people with passion for executing it is also very important. Building products is a strenuous but satisfying activity. You need the right team for executing it in an end to end manner. Fantacode helps its partners to perfect this execution in the world of DevOps, i.e. Development, Quality Assurance and operations. Want to know more? Check out the services that we offer to our valuable customers.</p>


      </div>


    </div>
  )
}

export default HomePage
