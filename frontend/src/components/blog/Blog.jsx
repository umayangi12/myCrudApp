import React from "react";
import './blog.scss'
import { BsArrowRightShort } from "react-icons/bs";
import blog1 from "../../assets/img/blog1.jpg";
import blog2 from "../../assets/img/blog2.jpeg";
import blog3 from "../../assets/img/blog3.jpg";
import blog4 from "../../assets/img/blog4.jpeg";

const post = [
  {
    id: 1,
    postImage: blog1,
    title:
      "THE ULTIMATE BLACK FOREST TRAVEL GUIDE: WHAT TO KNOW BEFORE YOU VISIT",
    desc: "Situated in Germany’s southwest corner, the Black Forest, or Schwarzwald in German, is known around the world for its dark conifer forests, enchanting villages, hiking trails, and thermal spas. ",
  },
  {
    id: 2,
    postImage: blog2,
    title: "THE ULTIMATE GREECE TRAVEL",
    desc: " Greece: where historic ruins, volcanic cliffs, and friendly locals meet the blue Mediterranean Sea. My first trip to Greece was a summer adventure through Athens and Mykonos",
  },
  {
    id: 3,
    postImage: blog3,
    title: "WE DID IT! WE REACHED OUR 50M CAMPAIGN FUNDRAISING GOAL!",
    desc: "In Earth Month 2023, the NFF reached its fundraising target for the 50 Million For Our Forests campaign.",
  },
  {
    id: 4,
    postImage: blog4,
    title: "THE FASCINATING SKY",
    desc: "The sky has been fascinating to people for decades. Something that appears so far, yet sometimes is closer than you think. The colors of the sky can be mind-blowingly spectacular, especially during twilight.",
  },
];

const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our Blogs?</h2>
          <p>An insight to the increadible expeirence in the world!</p>
        </div>

        <div className="mainContainer grid">
          {post.map(({ id, postImage, title, desc }) => {
            return (
              <div className="singlePost grid">
                <div className="imgDiv">
                  <img src={postImage} />
                </div>
                <div className="postDetails">
                  <h3>{title} </h3>
                  <p>{desc}</p>
                </div>
                <a href="#" className="flex">
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
