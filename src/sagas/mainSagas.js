import { call, put, takeEvery } from "redux-saga/effects";

import { actionCreators as baseActionCreators } from "../reduxActions/baseActions";
import { actionCreators } from "../reduxActions/generalActions";
import {actionCreators as blogFeedActionCreators } from "../reduxActions/blogFeedActions";

import dataApi from "../scripts/dataApi";

const api = dataApi();

export function* initialize() {
  console.log("initialization sequence started");
  try {

    const quickLinks = yield call(api.getQuickLinks, null);
    yield put(actionCreators.loadedQuickLinks(quickLinks));
  } catch (error) {
    yield put(baseActionCreators.setError("", error));
  }

  const archiveLinks = yield call(api.getArchiveLinks, null);
  yield put(actionCreators.loadedArchiveLinks(archiveLinks));

  const tags = yield call(api.getTagList, null);
  yield put(actionCreators.loadedTagList(tags));

  const posts = yield call(api.listBlogPosts, null);
  yield put(blogFeedActionCreators.loadedPosts(posts));
  yield put({
    type: "FETCHED_BLOG_POSTS",
    payload: posts
  });

  yield put({
    type: "INITIALIZE_END",
    payload: {

    }
  });
}

export function* endInit() {
  console.log("initialization sequence started");
  yield true;
}

export function* listBlogPosts() {
  console.log("in listBlogPosts");
  try {

    const response = yield call(dataApi.listBlogPosts, {});

    yield response;

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
  // TODO: first, check if the requested

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
  yield takeEvery("INITIALIZE_START", initialize);
  yield takeEvery("INITIALIZE_END", endInit);
  yield takeEvery("LOAD_POSTS", listBlogPosts);
  yield takeEvery("LIST_BLOG_POSTS", listBlogPosts);
  yield takeEvery("QUERY_BLOG_POSTS", queryBlogPosts);
  yield takeEvery("FETCH_BLOG_POST", fetchBlogPost);
}