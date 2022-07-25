import React from "react";
import "../App.css";

import image1 from "../components/images/1.jpg";
import image2 from "../components/images/2.jpg";
import image3 from "../components/images/3.png";
import image4 from "../components/images/4.png";
import image5 from "../components/images/5.jpg";
import image6 from "../components/images/6.jpg";
import image7 from "../components/images/7.jpg";
import image8 from "../components/images/8.png";
import image9 from "../components/images/9.jpg";
import image10 from "../components/images/10.jpg";
import image11 from "../components/images/11.jpg";
import image12 from "../components/images/12.png";

const gallery = () => {
  return (
    <div>
      <h2>Project Gallery</h2>
      <section style={{ display: "block" }}>
        <div className="grid-container">
          <div className="image">
            <img src={image1} alt="" />
            <p>The Experience Center Project</p>
            <img src={image2} alt="" />
            <p>The Talent Tech Bootcamp Project</p>
            <img src={image3} alt="" />
            <p>The PwC Trade Booth Project</p>
          </div>
          <div className="image">
            <img src={image4} alt="" />
            <p>The PwC BookCase Project</p>
            <img src={image5} alt="" />
            <p>The PwC Interior Design Project</p>
            <img src={image6} alt="" />
            <p>The PwC Digital Tech Project</p>
          </div>
          <div className="image">
            <img src={image7} alt="" />
            <p>The PwC Solar Project</p>
            <img src={image8} alt="" />
            <p>The Experience Center Project</p>
            <img src={image9} alt="" />
            <p>The PwC office building Project</p>
          </div>
          <div className="image">
            <img src={image10} alt="" />
            <p>The PwC Daylighting Project</p>
            <img src={image11} alt="" />
            <p>The PwC BookCase Project</p>
            <img src={image12} alt="" />
            <p>The PwC Solar Project</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default gallery;
