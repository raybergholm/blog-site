import React from "react";
import PropTypes from "prop-types";

import BlogPost from "../../components/BlogPost";

import mockPosts from "../../config/mockPosts.json";

const fetchMainContent = () => {
  return mockPosts.map((post) => (<BlogPost key={post._id} _id={post._id} {...post.content} />));
};

const Page = () => (
  <div id="main-content-section">
    {fetchMainContent()}
  </div>
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;