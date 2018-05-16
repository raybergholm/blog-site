export const searchByValue = (searchValue) => ({
  type: "SEARCH_BY_VALUE",
  search: searchValue
});

export const searchByTags = (searchTags) => ({
  type: "SEARCH_BY_TAGS",
  search: searchTags
});