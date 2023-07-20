import React, { useEffect } from "react";
import "./about.scss";
import customer from "../../assets/img/customer.png";
import mountain from "../../assets/img/mountains.png";
import hiking from "../../assets/img/hiking.png";
import video from "../../assets/hiking.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="about section">
      <div className="secContainer">
        <div className="title">Why Hikings?</div>
        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem"
          >
            <img src={hiking} alt="" />
            <h3>1000+ Hikings</h3>
            <p>
              Research shows that a chance to break away from the normal rythms
              of daily life reduces stress and imporces health and well-being.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={mountain} alt="" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance to break away from the normal rythms
              of daily life reduces stress and imporces health and well-being.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem"
          >
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
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>Mountains for the Mind: Wonderful hiking experience!</h2>
              <p>
                The entire nature clothed in green, is enjoyed by us to our
                heart’s content. Nature ! appears before us as a great teacher,
                healer and consoler.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted type="video/mp4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
