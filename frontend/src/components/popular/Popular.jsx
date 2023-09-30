import React, { useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import "./popular.scss";
import londonImg from "../../assets/img/london.jpg";
import australiaImg from "../../assets/img/australia.png";
import egyptImg from "../../assets/img/egypt.jpg";
import franceImg from "../../assets/img/france.jpg";
import italyImg from "../../assets/img/italy.jpg";
import malImg from "../../assets/img/maldives.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

//high order array method
const data = [
  {
    id: 1,
    imgSrc: australiaImg,
    destTitle: "Sydney Opera House",
    location: "Australia",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    imgSrc: egyptImg,
    destTitle: "Egyptian pyramids",
    location: "Egypt",
    grade: "CULTURAL RELAX",
  },
  {
    id: 3,
    imgSrc: franceImg,
    destTitle: "Eiffel Tower",
    location: "France",
    grade: "CULTURAL RELAX",
  },
  {
    id: 4,
    imgSrc: italyImg,
    destTitle: "Venice",
    location: "Italy",
    grade: "CULTURAL RELAX",
  },
  {
    id: 5,
    imgSrc: malImg,
    destTitle: "Maldives",
    location: "Maldives",
    grade: "CULTURAL RELAX",
  },
  {
    id: 6,
    imgSrc: londonImg,
    destTitle: "Big Ben",
    location: "London",
    grade: "CULTURAL RELAX",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="textDiv"
          >
            <h2 className="secTitle">Popular Destinations</h2>
            <p>
              From historical to natural spectecualrs, come see the best of the
              world!
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
        <div className="mainContent grid">
          {data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2500"
                className="singleDestination"
              >
                <div className="destImage">
                  <img src={imgSrc} alt="Image title" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      {grade}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
