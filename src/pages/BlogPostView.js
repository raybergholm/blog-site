import React from "react";
import PropTypes from "prop-types";

import BlogPostNavigation from "../components/BlogPostNavigation";
import BlogPost from "../components/BlogPost";

const Page = ({ fullPost }) => (
  <div id="main-content-section">
    {fullPost && (
      <div>
        <BlogPostNavigation prevLink={fullPost.prev} nextLink={fullPost.next} />
        <BlogPost key={fullPost._id} _id={fullPost._id} {...fullPost.content} />
      </div>
    )}
  </div>
);

Page.propTypes = {
  fullPost: PropTypes.object
};

export default Page;