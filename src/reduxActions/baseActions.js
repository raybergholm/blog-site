export const actionTypes = {
  SetFlag: "SET_FLAG",
  ClearFlag: "CLEAR_FLAG",
  SetError: "SET_ERROR",
  ClearError: "CLEAR_ERROR"
};

export const actionCreators = {
  setFlag: (name, status = true) => ({
    type: actionTypes.SetFlag,
    payload: {
      name,
      status
    }
  }),
  clearFlag: (name) => ({
    type: actionTypes.ClearFlag,
    payload: {
      name
    }
  }),
  setError: (name, error = null) => ({
    type: actionTypes.SetError,
    payload: {
      name,
      error
    }
  }),
  clearError: (name) => ({
    type: actionTypes.ClearError,
    payload: {
      name
    }
  })
};

const initialState = {
  flags: new Map(),
  errors: new Map()
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SetFlag:
      return Object.assign({}, state, {
        flags: new Map([...Array.from(state.flags), [action.name, action.status]])
      });
    case actionTypes.ClearFlag: {
      const nextStateFlags = new Map(Array.from(state.flags));
      nextStateFlags.delete(action.name);
      return Object.assign({}, state, {
        flags: nextStateFlags
      });
    }
    case actionTypes.SetError:
      return Object.assign({}, state, {
        errors: new Map([...Array.from(state.errors), [action.name, action.error]])
      });
    case actionTypes.ClearError: {
      const nextStateErrors = new Map(Array.from(state.errors));
      nextStateErrors.delete(action.name);
      return Object.assign({}, state, {
        errors: nextStateErrors
      });
    }
    default:
      return state;
  }
};