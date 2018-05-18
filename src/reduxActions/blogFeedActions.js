export const actionTypes = {
  ReadPost: "READ_POST",
  LoadPosts: "LOAD_POSTS",
  LoadedPosts: "LOADED_POSTS"
};

export const actionCreators = {
  readPost: (postId) => ({
    type: actionTypes.ReadPost,
    payload: {
      postId
    }
  }),
  loadPosts: (sequence, limit) => ({
    type: actionTypes.LoadPosts,
    payload: {
      sequence,
      limit
    }
  }),
  loadedPosts: (posts) => ({
    type: actionTypes.LoadedPosts,
    payload: {
      posts
    }
  })
};

const initialState = {
  posts: [],
  cache: new Set()
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LoadedPosts: {
      const newCache = new Set([...state.cache, ...action.payload]);
      return Object.assign({}, state, action.payload, {
        cache: newCache
      });
    }
    default:
      return state;
  }
};