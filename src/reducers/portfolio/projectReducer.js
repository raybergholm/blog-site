const initialState = {
  currentProject: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type){
    case "VIEW_PROJECT":
      return Object.assign({}, state, {
        currentProject: action.targetProject
      });
    default:
      return state;
  }
};

export default projectReducer;