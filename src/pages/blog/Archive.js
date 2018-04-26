import React from "react";
import PropTypes from "prop-types";

import TwoColumnRightBody from "../../components/layout/TwoColumnRightBody";
import BlogSidebar from "../../components/BlogSidebar";

const Page = ({match}) => (
  <TwoColumnRightBody id="main-content-section" side={<BlogSidebar topAnchor="app-header:bottom" bottomAnchor="app-footer:top" />}>
    <div>
      <p>I am the blog archive page for {match.params.month}/{match.params.year}</p>
    </div>
  </TwoColumnRightBody>
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;