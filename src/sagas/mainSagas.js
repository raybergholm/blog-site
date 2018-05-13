import { put, takeEvery } from "redux-saga/effects";

export function* listBlogPosts() {

}

export function* queryBlogPosts(){

}

export function* fetchBlogPost(){

}

export default function* mainSagas() {
  yield takeEvery("LIST_BLOG_POSTS", listBlogPosts);
  yield takeEvery("QUERY_BLOG_POSTS", queryBlogPosts);
  yield takeEvery("FETCH_BLOG_POST", fetchBlogPost);
}