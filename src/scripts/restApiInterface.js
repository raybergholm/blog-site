import request from "superagent";

const get = async ({ hostUrl, apiKey, restPath, query }) => request
  .get(`${hostUrl}/${restPath}`)
  .set("x-api-key", apiKey)
  .query(query)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const post = async ({ hostUrl, apiKey, restPath, body }) => request
  .get(`${hostUrl}/${restPath}`)
  .set("x-api-key", apiKey)
  .send(body)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const put = async ({ hostUrl, apiKey, restPath, body }) => request
  .put(`${hostUrl}/${restPath}`)
  .set("x-api-key", apiKey)
  .send(body)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const del = async ({ hostUrl, apiKey, restPath, query }) => request
  .delete(`${hostUrl}/${restPath}`)
  .set("x-api-key", apiKey)
  .query(query)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const apiInterface = (hostUrl, apiKey) => ({
  get: async (params) => get({ hostUrl, apiKey, ...params }),
  post: async (params) => post({ hostUrl, apiKey, ...params }),
  put: async (params) => put({ hostUrl, apiKey, ...params }),
  delete: async(params) => del({ hostUrl, apiKey, ...params })
});

export default apiInterface;