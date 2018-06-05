import actionTypes from "../actionTypes/blogPost";

const initialState = {
  postId: null,
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