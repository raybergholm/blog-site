import React from "react";
import { connect } from "react-redux";

import { actionCreators } from "../reduxActions/blogFeedActions";

import BlogFeedView from "./BlogFeedView";

const createView = (ViewComponent, hooks) => class extends React.Component {
  componentDidMount() {
    // hooks.didMount && hooks.didMount(this.props);
  }
  render() {
    return <ViewComponent {...this.props} />;
  }
};

const hooks = {
  didMount: ({ actions }) => actions.loadPosts()
};

const FeedContainer = connect(
  (state) => ({
    feed: state.feed
  }),
  (dispatch, ownProps) => ({
    loadPosts: () => dispatch(actionCreators.loadPosts()),
    readPost: () => dispatch(actionCreators.readPost(ownProps.postId))
  }),
  (state, dispatch, own) => ({
    ...state,
    ...own,
    actions: {
      ...dispatch
    }
  }),
)(createView(BlogFeedView, hooks));

export default FeedContainer;