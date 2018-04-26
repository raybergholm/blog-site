import request from "superagent";

import { AWS_REGION, REST_API_NAME, REST_API_STAGE } from "./config/configs";

const DATA_API_URL = `https://${REST_API_NAME}.execute-api.${AWS_REGION}.amazonaws.com/${REST_API_STAGE}/`;

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
      tags: tags.join(" ")
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

export const listBlogPosts = async ({ authToken, ...queryParams }) => {
  const API_PATH = "public/blog/posts";
  const requestUrl = `${DATA_API_URL}/${API_PATH}`;

  const query = queryParams ? buildQuery(queryParams) : DEFAULT_QUERY;

  return await request
    .get(requestUrl)
    .query(query)
    .set("Authorization", authToken);
};

export const getBlogPost = async ({ id, authToken }) => {
  const API_PATH = "public/blog/posts";
  const requestUrl = `${DATA_API_URL}/${API_PATH}/${id}`;

  return await request
    .get(requestUrl)
    .set("Authorization", authToken);
};

const dataApi = ({ authToken }) => ({
  listBlogPosts: async (queryParams) => await listBlogPosts({ authToken, ...queryParams }),
  getBlogPost: async ({ id }) => await getBlogPost({ id, authToken })
});

export default dataApi;