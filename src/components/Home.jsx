import React from "react";

import myimg from "../assests/my img.jpeg";
import myimg1 from "../assests/me.png";

function Home() {
  return (
    <div id="home">

  
      <div className="my-info">
        <h2>Hey there! </h2>
        <h1 id="user-detail-name">I am Mohd Adil</h1>
        <a className="nav-link resume" href="">
          <button id="resume-button-2">Resume</button>
        </a>
      </div>
      <div >
        <img className="home-img" src={myimg1} alt="" />
      </div>

    </div>
  );
}

export default Home;
