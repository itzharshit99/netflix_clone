import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-image" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-image" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            doloribus ducimus necessitatibus fugiat asperiores atque nostrum
            explicabo est!
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"BlockBuster Movie"} category={"top_rated"} />
        <TitleCards title={"only on Netflix"} category={"popular"}/>
        <TitleCards title={"upcoming"} category={"upcoming"} />
        <TitleCards title={"Top picks for you"} category={"now_playing"} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
