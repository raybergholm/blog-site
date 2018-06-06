import actionTypes from "../actionTypes/blogFeed";

import BlogPost from "../../models/BlogPost";

const initialState = {
  posts: [],
  cache: new Set()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LoadedPosts: {
      const newPosts = action.payload.posts.map((entry) => new BlogPost(entry));
      const newCache = new Set([...state.cache, ...newPosts]);
      
      return Object.assign({}, state, { posts: newPosts }, { cache: newCache });
    }
    default:
      return state;
  }
};

export default reducer;