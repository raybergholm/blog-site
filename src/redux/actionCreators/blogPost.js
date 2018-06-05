import actionTypes from "../actionTypes/blogPost";

const actionCreators = {
  moveToPrevPost: (postUrl) => ({
    type: actionTypes.MoveToPrevPost,
    payload: {
      postUrl
    }
  }),

  moveToNextPost: (postUrl) => ({
    type: actionTypes.MoveToNextPost,
    payload: {
      postUrl
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

export default actionCreators;