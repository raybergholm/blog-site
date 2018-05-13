import request from "superagent";

const get = async ({ hostUrl, apiKey, restPath, query }) => await request
  .get(`${hostUrl}/${restPath}`)
  .set("x-api-key", apiKey)
  .query(query)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const post = async ({ hostUrl, apiKey, restPath, body }) => await request
  .get(`${hostUrl}/${restPath}`)
  .set("x-api-key", apiKey)
  .send(body)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const put = async ({ hostUrl, apiKey, restPath, body }) => await request
  .put(`${hostUrl}/${restPath}`)
  .set("x-api-key", apiKey)
  .send(body)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const del = async ({ hostUrl, apiKey, restPath, query }) => await request
  .delete(`${hostUrl}/${restPath}`)
  .set("x-api-key", apiKey)
  .query(query)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const apiInterface = (hostUrl, apiKey) => ({
  get: async (params) => await get({ hostUrl, apiKey, ...params }),
  post: async (params) => await post({ hostUrl, apiKey, ...params }),
  put: async (params) => await put({ hostUrl, apiKey, ...params }),
  delete: async(params) => await del({ hostUrl, apiKey, ...params })
});

export default apiInterface;