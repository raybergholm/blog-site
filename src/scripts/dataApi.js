import mimisbrunnrApiInterface from "./mimisbrunnrApiInterface";

import { devStage } from "../config/configs";

const DATA_API_URL = `https://${devStage.restApiId}.execute-api.${devStage.awsRegion}.amazonaws.com/${devStage.restApiStage}`;

const API_KEY = "Y7Db5PmJ28WG4Yew9cve4jPdNnC1VthaNtDobGda";

export const FIELDS = {
  Date: "Date"
};

export const QUERY_OPTIONS = {
  ListByLatest: "LATEST"
};

export const ORDER = {
  Ascending: "ASC",
  Descending: "DESC"
};

const api = mimisbrunnrApiInterface(DATA_API_URL, API_KEY);

/**
 * Only allow specific valid params to pass through
 */
const buildQuery = ({ page, searchtext, tags }) => {
  if (page) {
    return {
      page
    };
  } else {
    return {
      searchtext,
      tags: tags ? tags.join(" ") : []
    };
  }
};

const DEFAULT_QUERY = buildQuery({
  listby: "LATEST",
  $top: 10,
  $skip: 0,
  orderby: FIELDS.Date,
  order: ORDER.Descending
});

export const listBlogPosts = async ({ ...queryParams }) => {
  const restPath = "public/blog";

  const query = queryParams ? buildQuery(queryParams) : DEFAULT_QUERY;

  return await api.get({ restPath, query });
};

export const getBlogPost = async (postId) => {
  const restPath = `public/blog/${postId}`;

  return await api.get({ restPath });
};

const dataApi = () => ({
  listBlogPosts,
  getBlogPost
});

export default dataApi;

// const dataApi = ({ authToken }) => ({
//   listBlogPosts: async (queryParams) => await listBlogPosts({ authToken, ...queryParams }),
//   getBlogPost: async ({ id }) => await getBlogPost({ id, authToken })
// });

// export default dataApi;