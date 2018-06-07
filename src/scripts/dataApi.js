import restApiInterface from "./restApiInterface";

import { devStage } from "../config/configs";

const DATA_API_URL = `https://${devStage.restApiId}.execute-api.${devStage.awsRegion}.amazonaws.com/${devStage.restApiStage}`;

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

const API_KEY = process.env.REACT_APP_API_KEY;
if (!API_KEY) {
  console.error("API key missing!");
}

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

const getMetadata = async () => {
  const restPath = "public/blog/metadata";

  const response = await restApi.get({ restPath });

  return response.body;
};

const fetchPage = async (yearMonthKey) => {
  const restPath = `public/blog/page/${yearMonthKey}`;

  const response = await restApi.get({ restPath });

  return response.body;
};

const listBlogPosts = async ({ ...queryParams }) => {
  const restPath = "public/blog";

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
  getMetadata,
  fetchPage,
  listBlogPosts,
  queryBlogPosts,
  getBlogPost
});

export default dataApi;