import { combineReducers } from "redux";

import baseReducer  from "../reducers/base";
import generalReducer from "../reducers/general";
import blogFeedReducer from "../reducers/blogFeed";
import blogPostReducer from "../reducers/blogPost";
import sidebarReducer from "../reducers/sidebar";

const allReducers = {
  // throw in all the imported reducers
  base: baseReducer,
  general: generalReducer,
  blogFeed: blogFeedReducer,
  blogPost: blogPostReducer,
  sidebar: sidebarReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;