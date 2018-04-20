export const viewArticle = (id) => ({
  type: "VIEW_ARTICLE",
  targetArticle: id
});

export const addTag = (tag) => ({
  type: "ADD_TAG",
  tag: tag
});

export const removeTag = (tag) => ({
  type: "REMOVE_TAG",
  tag: tag
});