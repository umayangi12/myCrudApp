import React from "react";
import "./home.css";
import "./home.scss";
import travelBee from "../../assets/img/travelBee.png";

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">
            Plan your trip with TravelBee
            {/* <img
              src={travelBee}
              style={{ width: "150px", float: "right", marginRight: "145px" }}
            /> */}
          </h1>
          <p className="subTitle">Travel to your favorite city with us!</p>
          <button className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>
        <div className="homeCard grid">
          <div className="locationDiv">
            <label
              htmlFor="location"
              style={{
                display: "block",
                color: "var(--textColor)",
                fontWeight: "bold",
                paddingBottom: ".4rem",
              }}
            >
              Location
            </label>
            <input
              type="text"
              placeholder="Dream destination"
              style={{
                width: "100%",
                background: "var(--inputColor)",
                borderRadius: "10px",
                border: "none",
                padding: "10px",
                fontSize: "13px",
                fontWeight: "500",
              }}
            />
          </div>
          <div className="distDiv">
            <label
              htmlFor="distance"
              style={{
                display: "block",
                color: "var(--textColor)",
                fontWeight: "bold",
                paddingBottom: ".4rem",
              }}
            >
              km/Meters
            </label>
            <input
              type="text"
              placeholder="km/Meters"
              style={{
                width: "100%",
                background: "var(--inputColor)",
                borderRadius: "10px",
                border: "none",
                padding: "10px",
                fontSize: "13px",
                fontWeight: "500",
              }}
            />
          </div>
          <div className="priceDiv">
            <label
              htmlFor="price"
              style={{
                display: "block",
                color: "var(--textColor)",
                fontWeight: "bold",
                paddingBottom: ".4rem",
              }}
            >
              Location
            </label>
            <input
              type="text"
              placeholder="Rs.10,000 - Rs.20,000"
              style={{
                width: "100%",
                background: "var(--inputColor)",
                borderRadius: "10px",
                border: "none",
                padding: "10px",
                fontSize: "13px",
                fontWeight: "500",
              }}
            />
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
