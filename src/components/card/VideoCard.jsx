import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import verified from "../../assets/images/verified.svg";
import channelLogo from "../../assets/images/channel-logo.svg";

import "./VideoCard.css";

const VideoCard = ({ statistics, snippet }) => {
  const postedTime = () => {
    const now = new Date();
    const hours = now.getHours();
    let publishedtime = snippet.publishedAt.split("T")[1];
    let publishedHour = publishedtime.split(":")[0];
    return hours - +publishedHour;
  };

  const {thumbnails: {standard}} = snippet;

  return (
    <Link to="/video/:videoId" className="video-card">
      <div className="video-image">
        <img className="video-img" src={standard.url} alt="" />
      </div>
      <div className="video-info">
        <div className="video-left">
          <img className="video-icon" src={channelLogo} alt="Logo" />
        </div>
        <div className="video-right">
          <h3 className="video-title">{snippet.title}</h3>
          <p className="video-channel">
            {snippet.channelTitle}
            <span>
              <img className="channel-logo-img" src={verified} alt="Verified" />
            </span>
          </p>
          <div className="video-stats">
            <p className="video-views">{statistics.viewCount} Views</p>
            <p>*</p>
            <p className="video-hours">{postedTime()} hours ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

VideoCard.propTypes = {
  statistics: PropTypes.object,
  snippet: PropTypes.object,
  channelTitle: PropTypes.string,
  publishedAt: PropTypes.string,
  thumbnails: PropTypes.string,
  title: PropTypes.string,
  viewCount: PropTypes.string,
};

export default VideoCard;
