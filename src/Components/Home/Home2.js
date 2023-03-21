import React from "react";
import tech from "../../Sources/tech.png";
import entertainment from "../../Sources/entertainment.png";
import politics from "../../Sources/entertainment.png";
import business from "../../Sources/business.png";
import "./home2.css";

function Home2() {
  return (
    <div className="container2">
      <div className="container2-text">
        Get the news you want by choosing the category
        <br /> you're interested in, like technology,
        <br /> politics, business, and more!
      </div>
      <div className="image2-container">
        <div className="image2-images">
          <h3 className="cat">category</h3>
          <img id="img" src={tech}></img>
          <h4 id="slogan">technology</h4>
          <img id="img" src={business}></img>
          <h4 id="slogan">business</h4>
          <img id="img" src={entertainment}></img>
          <h4 id="slogan">entertainment</h4>
          <img id="img" src={politics}></img>
          <h4 id="slogan">politics</h4>
        </div>
      </div>
    </div>
  );
}

export default Home2;
