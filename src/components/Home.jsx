import React from "react";

import myimg from "../assests/my img.jpeg";
import myimg1 from "../assests/me.png";
import { Link } from "react-router-dom";

function Home() {

  const resumedown2 = () => {
    window.open(
      "https://drive.google.com/file/d/1UBgt4cfEWrtO6DkeT8boJlXNJqLDL3kG/view?usp=sharing",
      "_blank"
      
    );
  };



  return (
    <div id="home">

  
      <div className="my-info">
        <h2>Hey there! </h2>
        <h1 id="user-detail-name">I am Mohd Adil</h1>
        <Link
            className="nav-link resume"
            to="https://drive.google.com/uc?export=download&id=1UBgt4cfEWrtO6DkeT8boJlXNJqLDL3kG"
          >
            <button
              id="resume-button-2"
              style={{ border: "none", fontWeight: "bold", fontSize: "20px" }}
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
