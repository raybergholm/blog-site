import { combineReducers } from "redux";

import projectReducer from "./portfolio/projectReducer";

const portfolioReducer = combineReducers({
  projectReducer
});

export default portfolioReducer;