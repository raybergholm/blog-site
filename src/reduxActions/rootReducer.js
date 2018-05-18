import { combineReducers } from "redux";

import { reducer as baseReducer } from "./baseActions";
import { reducer as generalReducer } from "./generalActions";
import { reducer as blogFeedReducer } from "./blogFeedActions";
import { reducer as blogPostReducer } from "./blogPostActions";
import { reducer as sidebarReducer } from "./sidebarActions";

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