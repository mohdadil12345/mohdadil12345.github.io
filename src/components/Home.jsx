import React from 'react'

import myimg from "../assests/my img.jpeg"
import myimg1 from "../assests/me.png"

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>

      <div >
        <img className="home-img" src={myimg1} alt="" />
      </div>

      <div className='my-info'>
     <h3>Hello, I'm </h3>
     <h4 id='user-detail-name'>Mohd Adil</h4>
     <a className='nav-link resume' href=""><button id='resume-button-2'>Resume</button></a>
      </div>

    </div>
  )
}

export default Home