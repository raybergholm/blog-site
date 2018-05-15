import { connect } from "react-redux";

import { willMountHook } from "../utils/hooks";

import AppView from "./AppView";

const AppContainer = connect(
  (state) => ({
    archive: state.archive
  }),
  (dispatch) => ({
  })
)(willMountHook(AppView, () => {}));

export default AppContainer;