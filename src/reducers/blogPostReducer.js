const initialState = {
  currentArticle: null,
};

const blogPostReducer = (state = initialState, action) => {
  switch (action.type){
    case "VIEW_ARTICLE":
      return Object.assign({}, state, {
        currentArticle: action.targetArticle
      });
    default:
      return state;
  }
};

export default blogPostReducer;
