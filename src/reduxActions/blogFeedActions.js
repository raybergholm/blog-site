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
  searchCriteria: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case "LoadedPosts":
      return Object.assign({}, state, ...action.payload);
    default:
      return state;
  }
};