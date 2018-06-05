import actionTypes from "../actionTypes/sidebar";

const actionCreators = {
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

export default actionCreators;