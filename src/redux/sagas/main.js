import { call, put, takeEvery } from "redux-saga/effects";

import baseActionCreators from "../actionCreators/base";
import generalActionCreators from "../actionCreators/general";
import blogFeedActionCreators from "../actionCreators/blogFeed";

import dataApi from "../../scripts/dataApi";

const api = dataApi();

export function* initialize() {
  const quickLinks = yield call(api.getQuickLinks);
  yield put(generalActionCreators.loadedQuickLinks(quickLinks));

  const archiveLinks = yield call(api.getArchiveLinks);
  yield put(generalActionCreators.loadedArchiveLinks(archiveLinks));

  const tags = yield call(api.getTags);
  yield put(generalActionCreators.loadedTagList(tags));

  const posts = yield call(api.listBlogPosts);
  yield put(blogFeedActionCreators.loadedPosts(posts));

  yield put({
    type: "INITIALIZE_END",
    payload: {
      quickLinks,
      archiveLinks,
      tags,
      posts
    }
  });
}

export function* endInit() {
  console.log("initialization sequence finished");
  yield true;
}

export function* listBlogPosts() {
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