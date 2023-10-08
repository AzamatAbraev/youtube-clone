import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import VideoCard from "../components/card/VideoCard";
import HomeTab from "../components/tabs/HomeTab";

import home from "../assets/images/home.svg";
import shorts from "../assets/images/shorts.svg";
import subscriptions from "../assets/images/subscriptions.svg";
import library from "../assets/images/library.svg";

import "./Home.css";
import finalURL from "../constants/getData";


const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      try {
        let {
          data: { items },
        } = await axios(finalURL);
        setData(items);
      } catch (err) {
        console.log(err);
      }
    };
    getVideos();
  }, []);

  return (
    <div className="container-fluid home-container">
      <div className="home-sidebar">
        <NavLink className="home-sidebar-item">
          <img src={home} alt="home icon" />
          <p>Home</p>
        </NavLink>
        <NavLink className="home-sidebar-item">
          <img src={shorts} alt="shorts icon" />
          <p>Shorts</p>
        </NavLink>
        <NavLink className="home-sidebar-item">
          <img src={subscriptions} alt="Subscriptions icon" />
          <p>Subscriptions</p>
        </NavLink>
        <NavLink className="home-sidebar-item">
          <img src={library} alt="home icon" />
          <p>Library</p>
        </NavLink>
      </div>
      <div className="home-main">
        <HomeTab />
        <div className="videos-row">
          {data.map((item) => (
            <VideoCard key={item.channelId} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
