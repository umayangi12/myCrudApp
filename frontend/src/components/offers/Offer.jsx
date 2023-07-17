import React from "react";
import './offer.scss';
import './offer.css';
import {MdKingBed} from 'react-icons/md'
import { GiBathtub } from "react-icons/gi";
import { AiOutlineWifi } from "react-icons/ai";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import hotel1 from '../../assets/img/hotel1.jpg';

const Offer = () => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <div className="secTitle">
            <h2>Special offers</h2>
            <p>
              From historical to natural spectecualrs, come see the best of the
              world!
            </p>
          </div>
          <div className="mainContent grid">
            <div className="singleOffer">
              <div className="destImage">
                <img src={hotel1} alt="destination image" />
                <span className="discount">30% off</span>
              </div>
              <div className="offerBody">
                <div className="price flex">
                  <h4>Rs.15,000</h4>
                  <span className="status">For Rent</span>
                </div>
                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className="icon" />
                    <small>2 Beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <GiBathtub className="icon" />
                    <small>Private bathroom</small>
                  </div>
                  <div className="singleAmenity flex">
                    <AiOutlineWifi className="icon" />
                    <small>Free WiFi</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className="icon" />
                    <small>Shuttle</small>
                  </div>
                </div>
                <div className="location flex">
                  <MdLocationPin className="icon" />
                  <small>Veniece, France</small>
                </div>
                <button className="btn flex">
                  View Details
                  <BsArrowRightShort className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
