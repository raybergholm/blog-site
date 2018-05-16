import { call, put, takeEvery } from "redux-saga/effects";

import dataApi from "../scripts/dataApi";

export function* listBlogPosts() {
  console.log("in listBlogPosts");
  try {

    const response = yield call(dataApi.listBlogPosts, {});

    console.log("response from server:", response);

    const blogPosts = response.body;

    console.log("blogPosts:", blogPosts);

    return blogPosts;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export function* queryBlogPosts(queryParams) {
  console.log("in queryBlogPosts");
  try {

    const response = yield call(dataApi.queryBlogPosts, queryParams);

    console.log("response from server:", response);

    const blogPosts = response.body;

    console.log("blogPosts:", blogPosts);

    return blogPosts;
  } catch (error) {
    return [];
  }
}

export function* fetchBlogPost(postId) {
  console.log("in fetchBlogPost");
  try {
    const response = yield call(dataApi.getBlogPost, postId);

    console.log("response from server:", response);

    const blogPosts = response.body;

    console.log("blogPosts:", blogPosts);

    return blogPosts;
  } catch (error) {
    return null;
  }
}

export default function* mainSagas() {
  yield takeEvery("LOAD_POSTS", listBlogPosts);
  yield takeEvery("LIST_BLOG_POSTS", listBlogPosts);
  yield takeEvery("QUERY_BLOG_POSTS", queryBlogPosts);
  yield takeEvery("FETCH_BLOG_POST", fetchBlogPost);
}