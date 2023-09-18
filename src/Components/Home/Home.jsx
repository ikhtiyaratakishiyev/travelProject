import React from "react";

import video from "../../Assets/video.mp4";

import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <h1>Home</h1>
      </div>

      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="homeContent container">
         <div className="textDiv">
           <span className="smallText">
            Our Packages
           </span>
           <h1 className="homeTitle">
            Search your Holiday
           </h1>
         </div>
      </div>
         
    </section>
  );
};

export default Home;
