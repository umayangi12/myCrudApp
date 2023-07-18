import React from "react";
import "./about.scss";
import customer from "../../assets/img/customer.png";
import mountain from "../../assets/img/mountains.png";
import hiking from "../../assets/img/hiking.png";
import video from "../../assets/video.mp4";

const About = () => {
  return (
    <section className="about section">
      <div className="secContainer">
        <div className="title">Why Hikings?</div>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={mountain} alt="" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance to break away from the normal rythms
              of daily life reduces stress and imporces health and well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src={hiking} alt="" />
            <h3>1000+ Hikings</h3>
            <p>
              Research shows that a chance to break away from the normal rythms
              of daily life reduces stress and imporces health and well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src={customer} alt="" />
            <h3>20000+ Customers</h3>
            <p>
              Research shows that a chance to break away from the normal rythms
              of daily life reduces stress and imporces health and well-being.
            </p>
          </div>
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Wonderful house experience!</h2>
              <p>
                The adventure subranking is based on an equally weighted average
                of scores
              </p>
            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
