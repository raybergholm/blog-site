export const actionTypes = {
  MoveToPrevPost: "MOVE_TO_PREV_POST",
  MoveToNextPost: "MOVE_TO_NEXT_POST",
  LoadComments: "LOAD_COMMENTS",
  PostComment: "POST_COMMENT"
};

export const actionCreators = {
  moveToPrevPost: (postId) => ({
    type: actionTypes.MoveToPrevPost,
    payload: {
      postId
    }
  }),

  moveToNextPost: (postId) => ({
    type: actionTypes.MoveToNextPost,
    payload: {
      postId
    }
  }),

  LoadComments: () => ({
    type: actionTypes.LoadComments
  }),

  PostComment: (comment) => ({
    type: actionTypes.PostComment,
    payload: {
      comment
    }
  })
};