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
    // Post-processing: on the client side tags are also paired with a selected boolean to determine if they're being filtered 
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
  initialized: false,
  quickLinks: [],
  archiveLinks: [],
  tags: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LoadedQuickLinks:
    case actionTypes.LoadedArchiveLinks:
    case actionTypes.LoadedTagList:
      return Object.assign({}, state, action.payload);
    case actionTypes.InitializeEnd:
      return Object.assign({}, state, {
        initialized: true
      });
    default:
      return state;
  }
};