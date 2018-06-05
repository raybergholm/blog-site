import actionTypes from "../actionTypes/sidebar";

const initialState = {
  search: {
    value: null,
    tags: []
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SearchByValue:
      return Object.assign({}, state, action.payload);
    case actionTypes.SearchByTags:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};