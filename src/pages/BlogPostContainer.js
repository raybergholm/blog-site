import React from "react";
import { connect } from "react-redux";

import { viewArticle } from "../actions/blogPostActions";

import BlogPostView from "./BlogPostView";

const BlogPostContainer = connect(
  (state) => ({
    currentArticle: "",
    prevArticle: "",
    nextArticle: "" 
  }),
  (dispatch, ownProps) => ({
    goToPreviousArticle: () => dispatch(viewArticle(ownProps.prevArticle)),
    goToNextArticle: () => dispatch(viewArticle(ownProps.nextArticle))
  })
)(class extends React.Component {
  componentDidMount() {

  }
  render() {
    return <BlogPostView {...this.props} />;
  }
});

export default BlogPostContainer;