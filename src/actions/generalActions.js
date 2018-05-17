export const actionTypes = {
  InitializeStart: "INITIALIZE_START",
  InitializeEnd: "INITIALIZE_END",
  LoadedQuickLinks: "LOADED_QUICK_LINKS",
  LoadedArchiveLinks: "LOADED_QUICK_LINKS",
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

  loadedTagList: (tagList) => {
    const tags = tagList.map((tagName) => ({
      tagName,
      selected: false
    }));
    return {
      type: actionTypes.LoadedTagList,
      payload: {
        tags
      }
    };
  },
};