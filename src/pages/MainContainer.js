import { connect } from "react-redux";

import MainView from "./MainView";

const MainContainer = connect(
  (state) => ({
    archive: state.archive
  }),
  (dispatch) => ({
  })
)(MainView);

export default MainContainer;