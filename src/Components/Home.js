import React from "react";
import Home1 from "./Home/home1";
import Home2 from "./Home/Home2";
import Home3 from "./Home/Home3";
import Home4 from "./Home/home4";
import Navbar from "./Home/navbar";
function Home() {
  return (
    <div>
      <Navbar />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
    </div>
  );
}

export default Home;
