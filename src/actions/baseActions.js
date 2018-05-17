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