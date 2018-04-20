import React from "react";

import TwoColumnLeftBody from "../components/layout/TwoColumnLeftBody";

import Main from "./portfolio/Main";
import Side from "./portfolio/Side";

const Page = () => (
  <TwoColumnLeftBody id="main-content-section" side={<Side />} full padding>
    <Main />
  </TwoColumnLeftBody>
);

export default Page;