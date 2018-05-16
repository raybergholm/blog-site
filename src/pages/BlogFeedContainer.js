import React from "react";
import { connect } from "react-redux";

import { loadPosts } from "../actions/blogFeedActions";

import BlogFeedView from "./BlogFeedView";

const createView = (ViewComponent, componentDidMountHook) => class extends React.Component {
  componentDidMount() {
    componentDidMountHook(this.props);
  }
  render() {
    return <ViewComponent {...this.props} />;
  }
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
)(createView(BlogFeedView, ({actions}) => actions.loadPosts()));

export default FeedContainer;