import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";
import SideBar from "../sidebar/SideBar";

const Layout = () => {
  const [show, setShow] = useState(false);


  const sidebarClose = () => setShow(false);
  const sidebarOpen = () => setShow(true);
  return (
    <Fragment>
      <Header sidebarOpen={sidebarOpen} />
      <SideBar show={show} setShow={setShow} sidebarClose={sidebarClose} sidebarOpen={sidebarOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};


export default Layout;
