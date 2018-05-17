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
  flags: {},
  errors: {} 
};

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.SetFlag:

      return Object.assign({}, state, {
        currentArticle: action.targetArticle
      });
      case actionTypes.SetError:
      return Object.assign({}, state, {
        currentArticle: action.targetArticle
      });
    default:
      return state;
  }
};