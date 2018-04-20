import { combineReducers } from "redux";

import articleReducer from "./blog/articleReducer";
import filterReducer from "./blog/filterReducer";

const blogReducer = combineReducers({
  articleReducer,
  filterReducer
});

export default blogReducer;