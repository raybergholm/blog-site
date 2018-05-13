import React from "react";
import PropTypes from "prop-types";

const Page = ({ match }) => (
  <div id="main-content-section">
    <p>I am the blog archive page for {match.params.month}/{match.params.year}</p>
  </div>
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;