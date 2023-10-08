import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import useScreenSize from "../../hooks/ScreenSize";

import sidemenu from "../../assets/images/sidebar-menu.svg";
import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search.svg";
import voice from "../../assets/images/voice.svg";
import createContent from "../../assets/images/create-video.svg";
import notification from "../../assets/images/notification.svg";
import user from "../../assets/images/user.svg";
import back from "../../assets/images/arrow-back.svg";

import "./Header.css";

const Header = ({ sidebarOpen }) => {
  const [searchShow, setSearchShow] = useState(false);
  const screenSize = useScreenSize();



  return (
    <header>
      <nav>
        <div className="container-fluid nav-container">
          {searchShow && screenSize <= 650 ? (
            <Fragment>
              <button
                onClick={() => setSearchShow(false)}
                className="back-btn mr-3"
              >
                <img src={back} alt="Back" />
              </button>
              <div className="nav-search-click">
                <input
                  className="search-box"
                  placeholder="Search"
                  type="text"
                />
                <button title="Search" className="search-btn">
                  <img src={searchIcon} alt="Search Icon" />
                </button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="nav-left">
                <button
                  onClick={() => sidebarOpen()}
                  className="sidebar-control"
                >
                  <img src={sidemenu} alt="Sidebar Menu" />
                </button>
                <Link to="/home" title="Youtube Home" className="youtube-logo">
                  <img src={logo} alt="Youtube Logo" />
                </Link>
              </div>
              <div className="nav-middle">
                <div className="nav-search">
                  <input
                    className="search-box"
                    placeholder="Search"
                    type="text"
                  />
                  <button title="Search" className="search-btn">
                    <img src={searchIcon} alt="Search Icon" />
                  </button>
                </div>
                <button className="voice-btn">
                  <img src={voice} alt="Voice search" />
                </button>
              </div>
              <div className="nav-right">
                <button
                  onClick={() => setSearchShow(true)}
                  className="search-btn-res"
                >
                  <img src={searchIcon} alt="Search" />
                </button>
                <button className="voice-btn-res">
                  <img src={voice} alt="Voice search" />
                </button>
                <button className="create-btn">
                  <img src={createContent} alt="Create Content btn" />
                </button>
                <button className="notification-btn">
                  <img src={notification} alt="Notification" />
                </button>
                <button className="user-account">
                  <img src={user} alt="User Image" />
                </button>
              </div>
            </Fragment>
          )}
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  sidebarOpen: PropTypes.func,
  setSearch: PropTypes.func,
  search: PropTypes.string,
};

export default Header;
