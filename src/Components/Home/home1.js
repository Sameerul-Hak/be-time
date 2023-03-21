import React from "react";
import mobimage from "../../Sources/ftxelon.png";
import "./home.css";
import vect1 from "../../Sources/Vector.png";

function Home1() {
  return (
    <div className="container">
      <div className="betime">
        <h1>Be time</h1>
        <h3>
          BeTime is a one-stop platform for all current news, providing
          <br /> users with relevant news in an easy to use format.
        </h3>
      </div>
      <div className="image-container">
        <img className="iamge-mobile" src={mobimage}></img>
        <h4 className="image-container-text">
          <span style={{ color: "white" }}>
            Don't let long news articles slow you down.
            <br />
            Make the most of your time with BeTime.
            <br /> Get quick and concise news updates.
            <br />
          </span>
        </h4>
        {/* <h2 className="image-container-bottom-text">“For the Busy World”</h2> */}
      </div>
      <h1 id="for"> “For the Busy World”</h1>
      {/* <img src={vect1} className="bgc1"></img> */}
    </div>
  );
}

export default Home1;
