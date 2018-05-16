import { call, put, takeEvery } from "redux-saga/effects";

import { getQuickLinks, getArchiveLinks, getTagList, listBlogPosts as dataApiListBlogPosts, queryBlogPosts as dataApiQueryBlogPosts, getBlogPost } from "../scripts/dataApi";

export function* initialize() {
  console.log("initialization sequence started");

  // SIDEBAR ACTIONS:
  // Fetch quick links list

  yield call(getQuickLinks);
  // Fetch archive links list: one per month from oldest to newest
  yield call(getArchiveLinks);

  // Fetch tags to populate options for searchByTag
  yield call(getTagList);

  // Fetch default init load: newest 10 posts



  yield true;
}

export function* endInit() {
  console.log("initialization sequence started");
  yield true;
}

export function* listBlogPosts() {
  console.log("in listBlogPosts");
  try {

    const response = yield call(dataApiListBlogPosts, {});

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

    const response = yield call(dataApiQueryBlogPosts, queryParams);

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
    const response = yield call(getBlogPost, postId);

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