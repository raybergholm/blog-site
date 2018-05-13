const initialState = {
  searchCriteria: null,
};

const blogFeedReducer = (state = initialState, action) => {
  switch (action.type){
    case "VIEW_ARTICLE":
      return Object.assign({}, state, {
        currentArticle: action.targetArticle
      });
    default:
      return state;
  }
};

export default blogFeedReducer;