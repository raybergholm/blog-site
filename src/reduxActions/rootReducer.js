import { combineReducers } from "redux";

import { reducer as baseReducer } from "./baseActions";
import { reducer as generalReducer } from "./generalActions";
import { reducer as blogFeedReducer } from "./blogFeedActions";
import { reducer as blogPostReducer } from "./blogPostActions";
import { reducer as sidebarReducer } from "./sidebarActions";

const allReducers = {
  // throw in all the imported reducers
  baseReducer,
  generalReducer,
  blogFeedReducer,
  blogPostReducer,
  sidebarReducer
};

export default combineReducers(allReducers);