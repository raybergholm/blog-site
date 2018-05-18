export const actionTypes = {
  SetFlag: "SET_FLAG",
  RemoveFlag: "REMOVE_FLAG",
  SetError: "SET_ERROR",
  RemoveError: "REMOVE_Error"
};

export const actionCreators = {
  setFlag: (name, status = true) => ({
    type: actionTypes.SetFlag,
    payload: {
      name,
      status
    }
  }),
  removeFlag: (name) => ({
    type: actionTypes.RemoveFlag,
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
  removeError: (name) => ({
    type: actionTypes.RemoveError,
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
    case actionTypes.RemoveFlag: {
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
    case actionTypes.RemoveError: {
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