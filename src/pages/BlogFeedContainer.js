import React from "react";
import { bindActionCreators } from "redux";
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
    flags: state.flags,
    errors: state.errors,
    posts: state.blogFeed.posts,
    cache: state.blogFeed.cache
  }),
  (dispatch) => {
    const boundActions = bindActionCreators(actionCreators, dispatch);
    return {
      ...boundActions
    };
  },
  (state, dispatch, own) => ({
    ...state,
    ...own,
    actions: {
      ...dispatch
    }
  }),
)(createView(BlogFeedView, hooks));

export default FeedContainer;