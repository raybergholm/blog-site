import React from "react";

import Banner from "./Banner";

const bannerStyle = {
  height: "200px",
  fontFamily: "\"Courier New\", Courier, monospace",
  textAlign: "center",
  verticalAlign: "middle",
  lineHeight: "normal"
};

const Header = () => (
  <header id="app-header" data-sticky-container>
    <Banner id="app-header-banner" style={bannerStyle}>
      <span>A touch of saudade</span>
    </Banner>
  </header>
);

export default Header;