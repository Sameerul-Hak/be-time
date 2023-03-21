import React from "react";
import "./home3.css";
import mobileimage from "../../Sources/tcs.png";
import colgeveimg from "../../Sources/collegeevents.png";
import politics from "../../Sources/politics.png";
function Home3() {
  return (
    <div className="container3">
      <img className="bgc" src={mobileimage}></img>
      <h5 className="text-3">
        Find the stock and <br />
        crypto news you're
        <br /> looking for without the
        <br /> BeTime delivers specific <br /> and crypto updates in a <br />
        quick and concise manner.
      </h5>
    </div>
  );
}

export default Home3;
