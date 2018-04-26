import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";

import BlogFeedPage from "./pages/blog/Feed";
import BlogArchivePage from "./pages/blog/Archive";
import BlogArticlePage from "./pages/blog/ArticleView";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/blog" component={BlogFeedPage} />
      <Route path="/blog/page/:pageNumber" component={BlogFeedPage} />
      <Route path="/blog/post/:articleId" component={BlogArticlePage} />
      <Route path="/blog/archive/:year/:month" component={BlogArchivePage} />
      <Redirect path="/blog/*" to="/blog" />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;