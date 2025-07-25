import React from "react";
import "./Home.css";
import hero_banner from "../../assets/assets/hero_banner.jpg";
import Hero_Title from "../../assets/assets/hero_title.png";
import Play_icon from "../../assets/assets/play_icon.png";
import Info_icon from "../../assets/assets/info_icon.png";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={Hero_Title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret order,a young man living in modern
            Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn"><img src={Play_icon} alt=""/>Play</button>
            <button className="btn dark-btn"><img src={Info_icon} alt=""/>More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="morecards">
        <TitleCards title={'Blockbuster Movies'} category={'top_rated'}/>
        <TitleCards title={'Only on Netflix'} category={'popular'}/>
        <TitleCards title={'UpComing'} category={'upcoming'}/>
        <TitleCards title={'Top pics for you'} category={'now_playing'}/>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
