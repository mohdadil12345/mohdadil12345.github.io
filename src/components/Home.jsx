import React from "react";

import myimg from "../assests/my img.jpeg";
import myimg1 from "../assests/me.png";
import { Link } from "react-router-dom";

function Home() {

  const resumedown2 = () => {
    // window.open(
    //   // "https://drive.google.com/file/d/1MOjwRy3Jf7xX_UGYeSOhJzJOiCAZmTPE/view?usp=drive_link"
    //   "https://drive.google.com/file/d/1W2lUx0ty6bVhrldi1DYSFVTylpIIRZb8/view?usp=sharing"
      
    // );

    window.open(
      "https://drive.google.com/file/d/1W2lUx0ty6bVhrldi1DYSFVTylpIIRZb8/view?usp=sharing",
      "_blank"
      
    );



  };

  return (
    <div id="home">
      {/* <img className="backk" src="https://moneer-portfolio.netlify.app/static/media/fogtree.950d4c4e05476e6c70bb.jpg" alt="" /> */}

  
      <div className="my-info">
        <h2>Hey there! </h2>
        <h1 id="user-detail-name">I am Mohd Adil</h1>
        <Link
            className="nav-link resume"
            to="https://drive.google.com/uc?export=download&id=1W2lUx0ty6bVhrldi1DYSFVTylpIIRZb8"
          
          >
            <button
              id="resume-button-2"
              
              onClick={resumedown2}
            >
              Resume
            </button>
          </Link>
      </div>
      <div >
        <img className="home-img" src={myimg1} alt="" />
      </div>

    </div>
  );
}

export default Home;
