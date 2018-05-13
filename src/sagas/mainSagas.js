import { put, takeEvery } from "redux-saga/effects";

import dataApi from "../scripts/dataApi";

export function* listBlogPosts() {
  console.log("in listBlogPosts");

  const response = yield dataApi.listBlogPosts({});

  console.log("response from server:", response);

  const blogPosts = response.body;

  console.log("blogPosts:", blogPosts);

  return blogPosts;
}

export function* queryBlogPosts(queryParams){
  console.log("in queryBlogPosts");

  const response = yield dataApi.queryBlogPosts(queryParams);

  console.log("response from server:", response);

  const blogPosts = response.body;

  console.log("blogPosts:", blogPosts);

  return blogPosts;
}

export function* fetchBlogPost(postId){
  console.log("in fetchBlogPost");

  const response = yield dataApi.getBlogPost(postId);

  console.log("response from server:", response);

  const blogPosts = response.body;

  console.log("blogPosts:", blogPosts);

  return blogPosts;
}

export default function* mainSagas() {
  yield takeEvery("LIST_BLOG_POSTS", listBlogPosts);
  yield takeEvery("QUERY_BLOG_POSTS", queryBlogPosts);
  yield takeEvery("FETCH_BLOG_POST", fetchBlogPost);
}