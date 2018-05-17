import React from "react";
import { connect } from "react-redux";

import { actionCreators } from "../reduxActions/blogPostActions";

import BlogPostView from "./BlogPostView";

const BlogPostContainer = connect(
  (state) => ({
    currentPostId: "",
    prevPostId: "",
    nextPostId: ""
  }),
  (dispatch, ownProps) => ({
    goToPreviousArticle: () => dispatch(actionCreators.moveToPrevPost(ownProps.prevPostId)),
    goToNextArticle: () => dispatch(actionCreators.moveToNextPost(ownProps.nextPostId))
  })
)(class extends React.Component {
  componentDidMount() {

  }
  render() {
    return <BlogPostView {...this.props} />;
  }
});

export default BlogPostContainer;