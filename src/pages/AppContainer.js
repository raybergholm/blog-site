import React from "react";
import { bindActionCreators } from "redux";
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
    initialized: state.general.initialized,
    quickLinks: state.general.quickLinks,
    archiveLinks: state.general.archiveLinks,
    tags: state.general.tags,
  }),
  (dispatch) => {
    const combinedActionCreators = Object.assign({}, generalActionCreators, sidebarActionCreators);
    const boundActions = bindActionCreators(combinedActionCreators, dispatch);
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
)(createView(AppView, hooks));

export default AppContainer;