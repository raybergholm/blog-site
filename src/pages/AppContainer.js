import React from "react";
import { connect } from "react-redux";

import { initialize } from "../actions/generalActions";
import { searchByValue, searchByTags } from "../actions/sidebarActions";

import AppView from "./AppView";

const createView = (ViewComponent, hooks) => class extends React.Component {
  componentDidMount() {
    hooks.didMount && hooks.didMount(this.props);
  }
  render() {
    return <ViewComponent {...this.props} />;
  }
};

const hooks = {
  didMount: ({ initialized, actions }) => {
    if (!initialized) {
      actions.initialize();
    }
  }
};

const AppContainer = connect(
  (state) => ({
    initialized: state.initialized
  }),
  (dispatch) => ({
    initialize: () => dispatch(initialize()),
    searchByValue: (val) => dispatch(searchByValue(val)),
    searchByTags: (tags) => dispatch(searchByTags(tags))
  }),
  (state, dispatch, own) => ({
    ...state,
    ...own,
    actions: {
      ...dispatch
    }
  }),
)(createView(AppView, hooks));

export default AppContainer;