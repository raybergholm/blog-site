import actionTypes from "../actionTypes/blogFeed";

import BlogPost from "../../models/BlogPost";

const initialState = {
  posts: [],
  cache: new Set()
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LoadedPosts: {
      const newPosts = action.payload.map((entry) => new BlogPost(entry));
      const newCache = new Set([...state.cache, ...newPosts]);
      return Object.assign({}, state, action.payload, {
        cache: newCache
      });
    }
    default:
      return state;
  }
};