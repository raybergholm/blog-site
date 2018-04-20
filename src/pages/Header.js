import React from "react";

import { Sticky } from "../lib/bootstrap/react-bootstrap";

import Banner from "./Banner";

const stickyBarStyle = {
  width: "100%"
};

const bannerStyle = {
  height: "200px",
  fontFamily: "\"Courier New\", Courier, monospace",
  textAlign: "center",
  verticalAlign: "middle",
  lineHeight: "normal"
};

const stickyConfig = {
  "data-options": "marginTop:0;",
  "data-top-anchor": "1"
};

const Header = () => (
  <header id="app-header" data-sticky-container>
    <Sticky style={stickyBarStyle} {...stickyConfig}>
      <Banner id="app-header-banner" style={bannerStyle}>
        <span>A touch of saudade</span>
      </Banner>
    </Sticky>
  </header>
);

export default Header;