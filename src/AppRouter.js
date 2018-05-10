import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AboutPage from "./pages/AboutPage";

import BlogFeedPage from "./pages/Feed";
import BlogArchivePage from "./pages/Archive";
import BlogArticlePage from "./pages/ArticleView";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BlogFeedPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route path="/post/:articleId" component={BlogArticlePage} />
      <Route path="/archive/:year/:month" component={BlogArchivePage} />
      <Redirect path="/blog/*" to="/" />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;