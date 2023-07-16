import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import "./popular.scss";
import londonImg from "../../assets/img/london.jpg";

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destinations</h2>
            <p>
              From historical to natural spectecualrs, come see the best of the
              world!
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={londonImg} alt="Image title" />
              <div className="overlayInfo">
                <h3>text text text</h3>
                <p>jsfjsdfjd sdfjdf dfkdk</p>
                <BsArrowRightShort className="icon" />
              </div>
            </div>
            <div className="destFooter">
              <div className="number">01</div>
              <div className="destText flex">
                <h6>London</h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
