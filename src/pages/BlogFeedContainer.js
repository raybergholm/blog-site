import React from "react";
import { connect } from "react-redux";

import { loadPosts } from "../actions/blogFeedActions";

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
  (dispatch) => ({
    loadPosts: () => dispatch(loadPosts())
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