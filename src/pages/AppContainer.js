import React from "react";
import { connect } from "react-redux";

import { actionCreators as generalActionCreators } from "../reduxActions/generalActions";
import { actionCreators as sidebarActionCreators } from "../reduxActions/sidebarActions";

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
    initialized: state.initialized,
    dataCache: state.dataCache
  }),
  (dispatch, ownProps) => ({
    initialize: () => dispatch(generalActionCreators.initialize()),
    initializationComplete: () => dispatch(generalActionCreators.initializationComplete()),
    searchByValue: () => dispatch(sidebarActionCreators.searchByValue(ownProps.searchValue)),
    searchByTags: () => dispatch(sidebarActionCreators.searchByTags(ownProps.selectedTags)),
    setSelectedTags: () => dispatch(sidebarActionCreators.setSelectedTags(ownProps.selectedTags))
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