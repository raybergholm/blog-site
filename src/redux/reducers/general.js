import actionTypes from "../actionTypes/general";

const initialState = {
  initialized: false,
  quickLinks: [],
  archiveLinks: [],
  tags: [],
  config: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LoadedMetadata: 
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