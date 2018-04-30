import React from "react";
import PropTypes from "prop-types";

import TwoColumnRightBody from "../../components/layout/TwoColumnRightBody";
import BlogPost from "../../components/BlogPost";
import BlogSidebar from "../../components/BlogSidebar";

import mockPosts from "../../config/mockPosts.json";

const fetchMainContent = () => {
  return mockPosts.map((post) => (<BlogPost key={post._id} _id={post._id} {...post.content} />));
};

const Page = () => (
  <TwoColumnRightBody id="main-content-section" side={<BlogSidebar topAnchor="app-header-banner:bottom" bottomAnchor="app-footer:top" />}>
    {fetchMainContent()}
  </TwoColumnRightBody>
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;