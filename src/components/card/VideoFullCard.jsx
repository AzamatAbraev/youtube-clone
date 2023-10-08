import clickbate from "../../assets/images/clickbate.jpg";
import like from "../../assets/images/like.svg";
import dislike from "../../assets/images/dislike.svg";
import download from "../../assets/images/download.svg";
import clip from "../../assets/images/clip.svg";
import save from "../../assets/images/save.svg";
import more from "../../assets/images/more.svg";
import channelLogo from "../../assets/images/channel-logo.svg";

import "./VideoFullCard.css";
import { NavLink } from "react-bootstrap";

const VideoFullCard = () => {
  return (
    <div className="video-full-card">
      <div className="card-image">
        <img className="card-img" src={clickbate} alt="Clickbate" />
      </div>
      <div className="card-content">
        <h3 className="card-title">
          🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH FIRST HAT-TRICK | UN
          DIA DE PARTIT (EPISODE 2) 🔥🔥
        </h3>
        <div className="card-footer">
          <div className="card-stats">
            <p className="card-views">132,757 views</p>
            <p className="card-time">22 hours ago</p>
          </div>
          <div className="card-controls">
            <div className="button-wrapper">
              <button className="control-btn">
                <img src={like} alt="like" />
              </button>
              <p className="btn-desc">21K</p>
            </div>
            <div className="button-wrapper">
              <button className="control-btn">
                <img src={dislike} alt="dislike" />
              </button>
              <p className="btn-desc">Dislike</p>
            </div>
            <div className="button-wrapper download-box">
              <button className="control-btn">
                <img src={download} alt="download" />
              </button>
              <p className="btn-desc">Download</p>
            </div>
            <div className="button-wrapper save-box">
              <button className="control-btn ">
                <img src={clip} alt="clip" />
              </button>
              <p className="btn-desc">Clip</p>
            </div>
            <div className="button-wrapper clip-box">
              <button className="control-btn">
                <img src={save} alt="save" />
              </button>
              <p className="btn-desc">Save</p>
            </div>
            <div className="button-wrapper">
              <button className="control-btn">
                <img src={more} alt="more" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-channel-info">
        <div className="card-channel-left">
          <button className="channel-btn">
            <img
              className="card-channel-img"
              src={channelLogo}
              alt="Channel Logo"
            />
          </button>
          <div className="channel-info">
            <NavLink className="channel-name">FC Barcelona</NavLink>
            <p className="channel-subs">14.1M Subscriber</p>
          </div>
        </div>
        <div className="card-channel-right">
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default VideoFullCard;
