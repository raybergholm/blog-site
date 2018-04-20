const contactFormReducer = (state = {}, action) => {
  switch(action.type){
    case "SUBMIT_FORM":
      return Object.assign({}, state, {
        name: action.name,
        email: action.email,
        subject: action.subject,
        message: action.message
      });
    default:
      return state;
  }
};

export default contactFormReducer;