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
