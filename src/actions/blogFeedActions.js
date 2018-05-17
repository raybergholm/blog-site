export const actionTypes = {
  ReadPost: "READ_POST",
  LoadPosts: "LOAD_POSTS"
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
  })
};