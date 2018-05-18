export const actionTypes = {
  MoveToPrevPost: "MOVE_TO_PREV_POST",
  MoveToNextPost: "MOVE_TO_NEXT_POST",
  LoadComments: "LOAD_COMMENTS",
  PostComment: "POST_COMMENT",
  LoadedComments: "LOADED_COMMENTS"
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

const initialState = {
  currentArticle: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MoveToPrevPost:
    case actionTypes.MoveToNextPost:
      return Object.assign({}, state, action.payload);
    case actionTypes.LoadedComments:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};