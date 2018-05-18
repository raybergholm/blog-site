export const actionTypes = {
  InitializeStart: "INITIALIZE_START",
  InitializeEnd: "INITIALIZE_END",
  LoadedQuickLinks: "LOADED_QUICK_LINKS",
  LoadedArchiveLinks: "LOADED_ARCHIVE_LINKS",
  LoadedTagList: "LOADED_TAG_LIST",
};

export const actionCreators = {
  initialize: () => ({
    type: actionTypes.InitializeStart
  }),

  initializationComplete: () => ({
    type: actionTypes.InitializeEnd
  }),

  loadedQuickLinks: (quickLinks) => ({
    type: actionTypes.LoadedQuickLinks,
    payload: {
      quickLinks
    }
  }),

  loadedArchiveLinks: (archiveLinks) => ({
    type: actionTypes.LoadedArchiveLinks,
    payload: {
      archiveLinks
    }
  }),

  loadedTagList: (tags) => {
    let tagsWithState = [];

    if (tags) {
      tagsWithState = tags.map((tagName) => ({
        tagName,
        selected: false
      }));
    }
    return {
      type: actionTypes.LoadedTagList,
      payload: {
        tags: tagsWithState
      }
    };
  },
};

const initialState = {
  quickLinks: {},
  archiveLinks: {},
  tags: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LoadedQuickLinks:
      console.log("LoadedQuickLinks with ", action.payload);
      console.log("prev state: ", state);
      console.log("new state: ", Object.assign({}, state, action.payload));
      return Object.assign({}, state, action.payload);
    case actionTypes.LoadedArchiveLinks:
      console.log("LoadedArchiveLinks with ", action.payload);
      console.log("prev state: ", state);
      console.log("new state: ", Object.assign({}, state, action.payload));
      return Object.assign({}, state, action.payload);
    case actionTypes.LoadedTagList:
      console.log("LoadedTagList with ", action.payload);
      console.log("prev state: ", state);
      console.log("new state: ", Object.assign({}, state, action.payload));
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};