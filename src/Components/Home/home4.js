import React from "react";
import "./home4.css";
import colgeveimg from "../../Sources/collegeevents.png";
import politics from "../../Sources/politics.png";
import insta from "../../Sources/Instaicon.png";
import linkedin from "../../Sources/linkedinicon.png";
import whatsapp from "../../Sources/WhatsApp.png";

function Home4() {
  return (
    <div className="container-home4">
      <div className="image-cont-home4">
        <div className="image1-home4">
          {" "}
          <img id="home4-image" src={colgeveimg}></img>
          <h2 className="image1-text-home4">
            Get the college events that you want
          </h2>
        </div>
        <div className="image2-home4">
          {" "}
          <img id="home4-image" src={politics}></img>
          <h2 className="image1-text-home4">
            Scroll through a collection of memes
          </h2>
        </div>
      </div>
      <div className="contactus-home4">
        <h2 className="home4-contactus-text">
          {" "}
          we also offer a fun feature where users can scroll <br />
          through a collection of memes. This provides an entertaining
          <br /> break from the serious news and helps users
          <br /> de-stress. At BeTime, we're committed to providing <br />a
          comprehensive and enjoyable experience for all our users.
        </h2>
        <h3 className="home4-contactus-h3">
          Join our social media platform using the link below
          <br /> to receive regular news updates and informative content
        </h3>
        <div className="social-icons">
          <img id="social-icons-list" src={insta}></img>
          <h5 id="soi">instagram</h5>
          <img id="social-icons-list" src={whatsapp}></img>
          <h5 id="soi">whatsapp</h5>
          <img id="social-icons-list" src={linkedin}></img>
          <h5 id="soi">linkedin</h5>
        </div>
      </div>
    </div>
  );
}

export default Home4;
