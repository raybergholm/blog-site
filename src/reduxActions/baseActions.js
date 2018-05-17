export const actionTypes = {
  SetFlag: "SET_FLAG",
  SetError: "SET_ERROR"
};

export const actionCreators = {
  setFlag: (flagName, status = true) => ({
    type: actionTypes.SetFlag,
    payload: {
      flagName,
      status
    }
  }),
  setError: (errorName, error = null) => ({
    type: actionTypes.SetError,
    payload: {
      errorName,
      error
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