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

console.log("generalReducer", generalReducer);

console.log("allReducers", allReducers);

const rootReducer = combineReducers(allReducers);

console.log("rootReducer", rootReducer);

export default rootReducer;