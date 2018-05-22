import restApiInterface from "./restApiInterface";

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

const restApi = restApiInterface(DATA_API_URL, API_KEY);

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

const getArchiveLinks = async () => {
  const restPath = "public/blog/metadata/archive-links";

  return await restApi.get({ restPath })
    .then(({ body }) => body);
};

const getQuickLinks = async () => {
  const restPath = "public/blog/metadata/quick-links";

  return await restApi.get({ restPath })
    .then(({ body }) => body);
};

const getTags = async () => {
  const restPath = "public/blog/metadata/tags";

  return await restApi.get({ restPath })
    .then(({ body }) => body);
};

const listBlogPosts = async ({ ...queryParams }) => {
  const restPath = "public/blog";

  const query = queryParams ? buildQuery(queryParams) : DEFAULT_QUERY;

  return await restApi.get({ restPath, query })
    .then(({ body }) => body);
};

const fetchBlogByYearMonth = async({ year, month, ...queryParams }) => {
  const key = `${year}-${month}`;

  const restPath = "public/blog/${key}";

  const query = queryParams ? buildQuery(queryParams) : DEFAULT_QUERY;

  return await restApi.get({ restPath, query })
    .then(({ body }) => body);
};

const queryBlogPosts = async ({ ...queryParams }) => {
  const restPath = "public/blog";

  const query = queryParams ? buildQuery(queryParams) : DEFAULT_QUERY;

  return await restApi.get({ restPath, query })
    .then(({ body }) => body);
};

const getBlogPost = async (postId) => {
  const restPath = `public/blog/${postId}`;

  return await restApi.get({ restPath })
    .then(({ body }) => body);
};

const dataApi = () => ({
  getArchiveLinks,
  getQuickLinks,
  getTags,
  listBlogPosts,
  queryBlogPosts,
  getBlogPost
});

export default dataApi;

// const dataApi = ({ authToken }) => ({
//   listBlogPosts: async (queryParams) => await listBlogPosts({ authToken, ...queryParams }),
//   getBlogPost: async ({ id }) => await getBlogPost({ id, authToken })
// });

// export default dataApi;