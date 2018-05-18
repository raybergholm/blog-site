export const actionTypes = {
  SearchByValue: "SEARCH_BY_VALUE",
  SearchByTags: "SEARCH_BY_TAGS",
  UpdateSelectedTags: "UPDATE_SELECTED_TAGS"
};

export const actionCreators = {
  searchByValue: (searchValue) => ({
    type: actionTypes.SearchByValue,
    payload: {
      searchValue
    }
  }),

  searchByTags: (searchTags) => ({
    type: actionTypes.SearchByTags,
    payload: {
      searchTags
    }
  }),

  updateSelectedTags: (selectedTags) => ({
    type: actionTypes.UpdateSelectedTags,
    payload: {
      selectedTags
    }
  })
};

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