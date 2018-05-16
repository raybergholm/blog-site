export const loadedQuickLinks = (quickLinks) => ({
  type: "LOADED_QUICK_LINKS",
  data: quickLinks
});

export const loadedArchiveLinks = (archiveLinks) => ({
  type: "LOADED_ARCHIVE_LINKS",
  data: archiveLinks
});

export const loadedTagList = (tagList) => {
  const tags = tagList.map((tagName) => ({
    tagName,
    selected: false
  }));
  return {
    type: "LOADED_TAG_LIST",
    data: tags
  };
};

export const searchByValue = (searchValue) => ({
  type: "SEARCH_BY_VALUE",
  search: searchValue
});

export const searchByTags = (searchTags) => ({
  type: "SEARCH_BY_TAGS",
  search: searchTags
});

export const setSelectedTags = (selectedTags) => ({
  type: "UPDATE_SELECTED_TAGS",
  data: selectedTags
});