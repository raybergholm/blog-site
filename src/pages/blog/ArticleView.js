import React from "react";
import PropTypes from "prop-types";

import TwoColumnRightBody from "../../components/layout/TwoColumnRightBody";
import BlogPostNavigation from "../../components/BlogPostNavigation";
import BlogPost from "../../components/BlogPost";
import BlogSidebar from "../../components/BlogSidebar";

import mockPosts from "../../config/mockPosts.json";

const fetchPost = (articleId) => {
  const result = mockPosts.filter(({ _id }) => _id === articleId);

  return result ? result[0] : null;
};

const Page = ({ match }) => {
  const post = fetchPost(match.params.articleId);

  return (<TwoColumnRightBody id="main-content-section" side={<BlogSidebar topAnchor="app-header:bottom" bottomAnchor="app-footer:top" />}>
    <BlogPostNavigation prevLink={post.prev} nextLink={post.next} />
    {post && (<BlogPost key={post._id} _id={post._id} {...post.content} />)}
  </TwoColumnRightBody>);
};

Page.propTypes = {
  match: PropTypes.object,
  state: PropTypes.object
};

export default Page;