import actionTypes from "../actionTypes/general";

const actionCreators = {
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

export default actionCreators;