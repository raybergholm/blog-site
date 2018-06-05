import actionTypes from "../actionTypes/general";

const initialState = {
  initialized: false,
  quickLinks: [],
  archiveLinks: [],
  tags: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LoadedQuickLinks:
    case actionTypes.LoadedArchiveLinks:
    case actionTypes.LoadedTagList:
      return Object.assign({}, state, action.payload);
    case actionTypes.InitializeEnd:
      return Object.assign({}, state, {
        initialized: true
      });
    default:
      return state;
  }
};

export default reducer;