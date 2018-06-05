import actionTypes from "../actionTypes/blogFeed";

const actionCreators = {
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

export default actionCreators;