const filterReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TAG":
      if (state.indexOf(action.tag) > -1) {
        return [
          ...state,
          action.tag
        ];
      } else {
        return state;
      }
    case "REMOVE_TAG":
      return state.reduce((reducer, item) => {
        if (item !== action.tag) {
          reducer.push(item);
        }
        return reducer;
      }, []);
    default:
      return state;
  }
};

export default filterReducer;
