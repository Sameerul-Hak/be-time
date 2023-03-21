import React from "react";
import "./contact.css";
import whatsapp from "../Sources/WhatsApp.png";
import LinkedIn from "../Sources/linkedinicon.png";
import insta from "../Sources/Instaicon.png";

function ContactUS() {
  return (
    <div className="contact-container">
      <div className="Contact-container1">
        <div className="contact-left-box">
          <h1 id="head-contact">Contact Us Through</h1>
          <p id="co1-para1">
            Phone no :
            <br />
            <br />
            Mail : betimeofficial.com
            <br />
            <br />
          </p>
          <p className="co-para2">
            {" "}
            Get regular news updates and informative content
            <br />
            <br />
            Join our social media platform using the link below to receive news
            updates and informative content
          </p>
        </div>
        <div className="contact-social">
          <a className="social-icon">
            <img src={whatsapp} />
            <p className="social-icontxt">Whatsapp Community</p>
          </a>
          <a className="social-icon">
            <img src={LinkedIn} />
            <p className="social-icontxt">@betime_news</p>
          </a>
          <a className="social-icon">
            <img src={insta} />
            <p className="social-icontxt">@betime_news</p>
          </a>
        </div>
        <h1 id="head">Wanna Join our team</h1>
        <h3 id="head"> contact: 9360435944</h3>
      </div>
    </div>
  );
}

export default ContactUS;
