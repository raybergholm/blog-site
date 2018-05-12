import request from "superagent";

const get = ({ hostUrl, restPath, queryParams }) => request
  .get(`${hostUrl}/${restPath}`)
  .query(queryParams)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const post = ({ hostUrl, restPath, body }) => request
  .get(`${hostUrl}/${restPath}`)
  .send(body)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const put = ({ hostUrl, restPath, body }) => request
  .put(`${hostUrl}/${restPath}`)
  .send(body)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const del = ({ hostUrl, restPath, queryParams }) => request
  .delete(`${hostUrl}/${restPath}`)
  .query(queryParams)
  .then(({ statusCode, body }) => ({ statusCode, body }))
  .catch((error) => error);

const apiInterface = (hostUrl) => ({
  get: (params) => get({ hostUrl, ...params }),
  post: (params) => post({ hostUrl, ...params }),
  put: (params) => put({ hostUrl, ...params }),
  delete: (params) => del({ hostUrl, ...params })
});

export default apiInterface;