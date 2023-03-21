import React from "react";
import './About.css';
import android from "../Sources/android.png";
import iosic from '../Sources/Ios.png';
import IG from '../Sources/Instaicon.png';
import WA from '../Sources/WhatsApp.png';
import LI from '../Sources/linkedinicon.png';

function About(){
    return(
        <div className="about-container">
                <div className="about-left">
                    <div className="left-box">
                        <h1 className="about-left-qn">Why BeTime?</h1>
                        <p className="about-left-para">BeTime is an app designed to make news reading easy for everyone. We offer a wide range of news categories, including tech, politics, business, and more. In addition, we provide a unique feature that allows users to scroll through stock and crypto news</p>
                    </div>
                    <div className="about-left-img">
                    <img src={android} alt="android" className="about-img"/>
                    <img src={iosic} alt="" className="about-img"/>
                    </div>
                    <p className="about-soon">App is Coming Soon.....!</p>
                </div>
                <div className="about-right">
                    <div className="right-box">
                        <p className="about-qn">"Got bored with long News articles?"</p>
                        <span><h1 className="about-ans">BeTime</h1>
                        <h3 className="about-tag">Short Simple and Smart News</h3> </span>  
                        <p className="about-right-para">Join our social media platform using the link below to receive regular news updates and informative content</p>  
                    </div>           
                    <div className="about-right-social">
                        <div className="social-box">
                            <a href="#" className="about-link">
                            <img src={WA} alt="" className="about-WAimg"/>
                            <div className="about-socialtxt">WhatsApp Community</div>
                            </a>
                            <a href="#" className="about-link">
                            <img src={IG} alt="" className="about-WAimg"/>
                            <div className="about-socialtxt">@beTime_news</div>
                            </a>
                            <a href="#" className="about-link">
                            <img src={LI} alt="" className="about-WAimg"/>
                            <div className="about-socialtxt">@beTime_news</div>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default About;