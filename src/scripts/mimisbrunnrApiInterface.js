import request from "superagent";

const get = async ({ hostUrl, restPath, query }) => await request
  .get(`${hostUrl}/${restPath}`)
  .query(query)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const post = async ({ hostUrl, restPath, body }) => await request
  .get(`${hostUrl}/${restPath}`)
  .send(body)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const put = async ({ hostUrl, restPath, body }) => await request
  .put(`${hostUrl}/${restPath}`)
  .send(body)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const del = async ({ hostUrl, restPath, query }) => await request
  .delete(`${hostUrl}/${restPath}`)
  .query(query)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const apiInterface = (hostUrl) => ({
  get: async (params) => await get({ hostUrl, ...params }),
  post: async (params) => await post({ hostUrl, ...params }),
  put: async (params) => await put({ hostUrl, ...params }),
  delete: async(params) => await del({ hostUrl, ...params })
});

export default apiInterface;