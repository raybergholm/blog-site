import { combineReducers } from "redux";

// import all the reducers
import blogReducer from "./blogReducer";
import portfolioReducer from "./portfolioReducer";
import contactFormReducer from "./contactFormReducer";

const allReducers = {
  // throw in all the imported reducers
  blogReducer,
  portfolioReducer,
  contactFormReducer
};

export default combineReducers(allReducers);