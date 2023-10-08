import PropTypes from "prop-types";

import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fragment } from "react";

import sidemenu from "../../assets/images/sidebar-menu.svg";
import logo from "../../assets/images/logo.svg";
import home from "../../assets/images/home.svg";
import explore from "../../assets/images/explore.svg";
import shorts from "../../assets/images/shorts.svg";
import subscriptions from "../../assets/images/subscriptions.svg";
import library from "../../assets/images/library.svg";
import history from "../../assets/images/history.svg";
import yourvideos from "../../assets/images/your-videos.svg";
import watchlater from "../../assets/images/watch-later.svg";
import pop from "../../assets/images/pop.svg";
import channelIcon from "../../assets/images/channel-icon.jpg";

import "./Sidebar.css";

const SideBar = ({ show, sidebarClose }) => {
  return (
    <Fragment>
      <Offcanvas show={show} onHide={sidebarClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div className="sidebar-title">
              <button onClick={sidebarClose} className="sidebar-close">
                <img src={sidemenu} alt="Sidebar Menu" />
              </button>
              <Link to="/home" title="Youtube Home" className="sidebar-logo">
                <img src={logo} alt="Youtube Logo" />
              </Link>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="sidebar">
          <div className="sidebar-top">
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={home} alt="Home Icon" />
                <p>Home</p>
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={explore} alt="Explore Icon" />
                <p>Explore</p>
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={shorts} alt="Shorts Icon" />
                <p>Shorts</p>
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={subscriptions} alt="Subscription Icon" />
                <p>Subscriptions</p>
              </button>
            </div>
          </div>
          <div className="sidebar-middle">
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={library} alt="Library Icon" />
                <p>Library</p>
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={history} alt="History Icon" />
                <p>History</p>
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={yourvideos} alt="Your-videos Icon" />
                <p>Your videos</p>
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={watchlater} alt="Watch-later Icon" />
                <p>Watch Later</p>
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={pop} alt="Pop Icon" />
                <p>Pop</p>
              </button>
            </div>
          </div>
          <div className="sidebar-bottom">
            <h3 className="subscriptions-text">SUBSCRIPTIONS</h3>
            <Link className="subscriptions-box">
              <img
                className="channel-img"
                src={channelIcon}
                alt="Channel Icon"
              />
              <p className="channel-name">freeCodeCamp.org</p>
            </Link>
            <Link className="subscriptions-box">
              <img
                className="channel-img"
                src={channelIcon}
                alt="Channel Icon"
              />
              <p className="channel-name">freeCodeCamp.org</p>
            </Link>
            <Link className="subscriptions-box">
              <img
                className="channel-img"
                src={channelIcon}
                alt="Channel Icon"
              />
              <p className="channel-name">freeCodeCamp.org</p>
            </Link>
            <Link className="subscriptions-box">
              <img
                className="channel-img"
                src={channelIcon}
                alt="Channel Icon"
              />
              <p className="channel-name">freeCodeCamp.org</p>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

SideBar.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  sidebarClose: PropTypes.func,
  sidebarOpen: PropTypes.func,
};

export default SideBar;
