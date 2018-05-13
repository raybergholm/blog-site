import { combineReducers } from "redux";

// import all the reducers
import blogPostReducer from "./blogPostReducer";
import blogFeedReducer from "./blogFeedReducer";

import searchFilterReducer from "./searchFilterReducer";
import tagFilterReducer from "./tagFilterReducer";

const allReducers = {
  // throw in all the imported reducers
  blogPostReducer,
  blogFeedReducer,
  searchFilterReducer,
  tagFilterReducer
};

export default combineReducers(allReducers);