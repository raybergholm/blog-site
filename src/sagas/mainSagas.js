import { call, put, takeEvery } from "redux-saga/effects";

import dataApi from "../scripts/dataApi";

export function* initialize() {
  console.log("initialization sequence started");

  const quickLinks = yield call(dataApi.getQuickLinks);
  yield put({
    type: "FETCHED_QUICK_LINKS",
    data: quickLinks
  });

  
  const archiveLinks = yield call(dataApi.getArchiveLinks);
  yield put({
    type: "FETCHED_ARCHIVE_LINKS",
    data: archiveLinks
  });

  const tags = yield call(dataApi.getTagList);
  yield put({
    type: "FETCHED_TAG_LIST",
    data: tags
  });

  const posts = yield call(dataApi.listBlogPosts);
  yield put({
    type: "FETCHED_BLOG_POSTS",
    data: posts
  });

  yield put({
    type: "INITIALIZE_END"
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